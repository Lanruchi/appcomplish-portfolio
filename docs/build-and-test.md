# Build, Run & Test

## Run locally
No build step. `cd src && python -m http.server 8000` → http://localhost:8000

## Pre-upload checklist (replaces unit tests)
- [ ] Every page opens; nav and internal links work
- [ ] No missing images/PDFs, no `path-to-...` placeholders
- [ ] Looks right at phone width
- [ ] Claims, dates and certs are accurate; nothing private
- [ ] Resume PDF and profile photo are in `src/assets/`

## Deploy (manual for now)
Upload the contents of `src/` to the S3 bucket in the AWS console, keeping folders and overwriting existing files.
Later: `aws s3 sync src/ s3://<bucket> --delete`, then Terraform, then GitHub Actions.
