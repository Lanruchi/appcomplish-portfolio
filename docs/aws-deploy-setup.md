# AWS Deploy Setup (GitHub Actions → S3, OIDC)

Pushes to `main` that change `src/` sync the folder to the S3 bucket. GitHub logs in to AWS with a short-lived OIDC token, so **no AWS keys are stored anywhere**.

Account/repo values used below: bucket `appcomplish.click`, region `us-east-1`, repo `nuru-adeniyi/appcomplish-portfolio`. Replace `<ACCOUNT_ID>` with your 12-digit AWS account ID.

## 1. Add GitHub as an identity provider (once per AWS account)
IAM → Identity providers → Add provider → **OpenID Connect**
- Provider URL: `https://token.actions.githubusercontent.com`
- Audience: `sts.amazonaws.com`

## 2. Create the deploy role
IAM → Roles → Create role → **Web identity** → pick the provider above, audience `sts.amazonaws.com`. Name it `github-deploy-appcomplish`.

**Trust policy** (restricts the role to this repo and the `production` environment):
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": { "Federated": "arn:aws:iam::<ACCOUNT_ID>:oidc-provider/token.actions.githubusercontent.com" },
    "Action": "sts:AssumeRoleWithWebIdentity",
    "Condition": {
      "StringEquals": {
        "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
        "token.actions.githubusercontent.com:sub": [
          "repo:nuru-adeniyi@6249869/appcomplish-portfolio@1432825391:environment:production",
          "repo:nuru-adeniyi/appcomplish-portfolio:environment:production"
        ]
      }
    }
  }]
}
```

**Permissions policy** (least privilege: this bucket only):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    { "Effect": "Allow", "Action": "s3:ListBucket", "Resource": "arn:aws:s3:::appcomplish.click" },
    { "Effect": "Allow", "Action": ["s3:PutObject", "s3:DeleteObject"], "Resource": "arn:aws:s3:::appcomplish.click/*" },
    { "Effect": "Allow", "Action": "cloudfront:CreateInvalidation", "Resource": "arn:aws:cloudfront::<ACCOUNT_ID>:distribution/<DISTRIBUTION_ID>" }
  ]
}
```
The last statement lets the deploy clear the CloudFront cache after a real deploy (one distribution only).
**Check the subject format for your repo** before relying on the name-only form: `gh api repos/OWNER/REPO/actions/oidc/customization/sub`. If it shows `use_immutable_subject: true`, the token's `sub` includes numeric IDs (`repo:OWNER@ID/REPO@ID:environment:production`), and the name-only value will fail with "Not authorized to perform sts:AssumeRoleWithWebIdentity". The policy above lists both. If you rename the account or repo, update the `sub` values.

**Permissions are separate from trust:** the role also needs the permissions policy below, or the login succeeds and S3 calls fail with "no identity-based policy allows s3:ListBucket".

## 3. Configure GitHub
Repo → Settings → **Environments** → New environment `production`
- Deployment branches: **Selected branches → main**
- (Optional) Required reviewers: yourself, for a manual approve click before each deploy
- **Secret** `AWS_ROLE_ARN` = `arn:aws:iam::<ACCOUNT_ID>:role/github-deploy-appcomplish`
- **Variable** `AWS_REGION` = `us-east-1`
- **Variable** `S3_BUCKET` = `appcomplish.click`
- **Variable** `CLOUDFRONT_DISTRIBUTION_ID` = the distribution ID (CloudFront console → Distributions → ID column). Until it is set, the cache-clearing step is skipped.

## 4. Safe rollout (auto-deploy is OFF until you turn it on)
Pushes to `main` only deploy when the **repo** variable `AUTO_DEPLOY` is `true` (Settings → Secrets and variables → Actions → Variables, or `gh variable set AUTO_DEPLOY --body true`). Leave it unset or `false` until the dry run looks right. Turn it back to `false` to pause deploys.

## 5. First run
Actions → **Deploy to S3** → Run workflow → **Branch: main** (the environment only allows `main`) → leave **dry run** checked. Read the log: `--delete` removes any bucket file not in `src/` (including old sample files). If it looks right, run again with dry run unchecked.

## Local `.env`
`.env.example` lists the same names with empty values. Keep your real `.env` local and uncommitted (it is gitignored). The workflow never reads it; GitHub environment values are the source of truth for deploys.
