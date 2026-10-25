# appcomplish.click — Cloud Engineering Portfolio

Personal portfolio site documenting my transition from senior .NET software engineering
into AWS cloud architecture and DevOps. Every project is a case study: what I built,
why I chose this approach, alternatives, tradeoffs, and what I'd do differently.

**Live site:** https://appcomplish.click

---

## Folder Structure

Repo root holds tooling and docs; everything under `src/` is the deployable site.

```
appcomplish-portfolio/
├── src/                                # Web root — the only folder deployed to S3
│   ├── index.html                      # Home — hero, cert badges, featured projects
│   ├── 404.html                        # Not-found page
│   ├── robots.txt
│   ├── about/index.html                # About — background and transition story
│   ├── resume/index.html               # Resume PDF link + cert badges
│   ├── projects/
│   │   ├── index.html                  # All projects listing
│   │   └── s3-static-website/
│   │       └── index.html              # Case study: S3 static hosting
│   └── assets/
│       ├── css/style.css               # Shared stylesheet
│       ├── js/main.js                  # Nav toggle, active link
│       └── images/
│           ├── profile/                # Profile photo
│           └── projects/<slug>/        # Architecture diagrams per case study
│
├── docs/                               # Conventions, git workflow, setup guides
├── .claude/                            # Claude Code commands and settings
├── .github/                            # PR template
├── CLAUDE.md                           # Claude memory
├── .env.example                        # Env template (empty values)
└── README.md
```

Pages use folder URLs (`/about/`, `/resume/`) and root-absolute asset paths (`/assets/...`).

---

## Adding a New Project

1. Create a folder: `src/projects/<project-slug>/`
2. Copy `src/projects/s3-static-website/index.html` as your template
3. Fill in all 6 sections:
   - What I Built
   - Why This Approach
   - Alternatives I Considered
   - Tradeoffs
   - What Would Break at 10× the Scale
   - What I'd Do Differently
4. Add an architecture diagram to `src/assets/images/projects/<project-slug>/`
5. Add a card to `src/projects/index.html` and `src/index.html`

---

## Deploying to S3 (manual for now)

No CLI, Terraform, or CI/CD is wired up yet. To publish:

1. Open the S3 bucket in the AWS console.
2. Upload the **contents** of `src/` (keep the folder structure), overwriting existing files.

Later steps, as the bootcamp progresses: `aws s3 sync src/ s3://<bucket> --delete`, then Terraform for the stack, then GitHub Actions for automatic deploys (see Planned Projects).

---

## Planned Projects

- [ ] S3 Static Website — Phase 2: CloudFront + ACM + WAF
- [ ] Terraform: provision the full stack as IaC
- [ ] CI/CD: GitHub Actions → S3 sync + CloudFront invalidation
- [ ] Secure VPC Architecture: private subnets, bastion, NAT Gateway
- [ ] OptiBizIQ: AI-powered POS analytics pipeline (Python + OpenAI + Square)
