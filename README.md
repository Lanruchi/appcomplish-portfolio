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
│   ├── about.html                      # About — background and transition story
│   ├── resume.html                     # Resume summary, LinkedIn contact + cert badges
│   ├── projects.html                   # All projects listing
│   ├── projects/
│   │   ├── s3-static-website.html      # Case study: S3 static hosting
│   │   └── s3-cicd-pipeline.html       # Case study: CI/CD to S3 with GitHub Actions and OIDC
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

Only the landing page is named `index.html`; every other page has a descriptive name. Links use relative paths (`assets/css/style.css`, `../about.html` from `projects/`), so pages also work opened straight from disk; only `404.html` uses root-absolute paths, since S3 serves it from any URL.

---

## Adding a New Project

1. Copy `src/projects/s3-static-website.html` to `src/projects/<project-slug>.html`
2. Fill in all 6 sections:
   - What I Built
   - Why This Approach
   - Alternatives I Considered
   - Tradeoffs
   - What Would Break at 10× the Scale
   - What I'd Do Differently
3. Add an architecture diagram to `src/assets/images/projects/<project-slug>/`
4. Add a card to `src/projects.html` and `src/index.html`

---

## Deploying to S3

Pushes to `main` that change `src/` deploy automatically via GitHub Actions (`.github/workflows/deploy.yml`), which syncs `src/` to the `appcomplish.click` bucket. GitHub signs in to AWS with an OIDC role, so no AWS keys are stored anywhere. Setup steps are in `docs/aws-deploy-setup.md`.

Manual run: Actions → **Deploy to S3** → Run workflow (dry run is on by default).
