# appcomplish.click — Cloud Engineering Portfolio

Personal portfolio site documenting my transition from senior .NET software engineering
into AWS cloud architecture and DevOps. Every project is a case study: what I built,
why I chose this approach, alternatives, tradeoffs, and what I'd do differently.

**Live site:** https://appcomplish.click

---

## Folder Structure

```
appcomplish-portfolio/
├── index.html                          # Home — hero, cert badges, featured projects
├── about.html                          # About me — background and transition story
├── resume.html                         # Resume PDF link + cert badges
│
├── projects/
│   ├── index.html                      # All projects listing
│   └── s3-static-website/
│       └── index.html                  # Case study: S3 static hosting
│
└── assets/
    ├── css/
    │   └── style.css                   # Shared stylesheet (all pages)
    ├── js/
    │   └── main.js                     # Nav toggle, active link
    └── images/
        ├── profile/
        │   └── nurudeen.jpg            # (add your photo here)
        └── projects/
            └── s3-static-website/
                └── architecture.png    # (add diagram when ready)
```

---

## Adding a New Project

1. Create a folder: `projects/<project-slug>/`
2. Copy `projects/s3-static-website/index.html` as your template
3. Fill in all 6 sections:
   - What I Built
   - Why This Approach
   - Alternatives I Considered
   - Tradeoffs
   - What Would Break at 10× the Scale
   - What I'd Do Differently
4. Add an architecture diagram to `assets/images/projects/<project-slug>/`
5. Add a card to `projects/index.html` and `index.html`

---

## Deploying to S3

```bash
# Sync to S3 bucket (replace bucket name)
aws s3 sync . s3://appcomplish.click --exclude ".git/*" --exclude "README.md"

# Invalidate CloudFront cache (replace distribution ID)
aws cloudfront create-invalidation --distribution-id <ID> --paths "/*"
```

---

## Planned Projects

- [ ] S3 Static Website — Phase 2: CloudFront + ACM + WAF
- [ ] Terraform: provision the full stack as IaC
- [ ] CI/CD: GitHub Actions → S3 sync + CloudFront invalidation
- [ ] Secure VPC Architecture: private subnets, bastion, NAT Gateway
- [ ] OptiBizIQ: AI-powered POS analytics pipeline (Python + OpenAI + Square)
