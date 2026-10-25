# Project Conventions — appcomplish-portfolio

## Folder Tree

```
appcomplish-portfolio/
├── CLAUDE.md                          # Claude memory — keep short
│
├── .claude/
│   ├── settings.json                  # Permissions + hooks (deny .env reads, force-push)
│   ├── commands/                      # Slash commands
│   │   ├── kickoff.md                 # /kickoff   think-first start
│   │   ├── branch.md                  # /branch    create feature branch
│   │   ├── changes.md                 # /changes   show diff, stage nothing
│   │   ├── concepts.md                # /concepts  fill Design Considerations from the cheat sheet
│   │   ├── project.md                 # /project  interview-driven case study (5 W's + How + Cost)
│   │   ├── review.md                  # /review    code review checklist
│   │   ├── commit.md                  # /commit    README check + approved commit
│   │   ├── push.md                    # /push      push + create/update PR
│   │   ├── compact.md                 # /compact   context snapshot
│   │   └── structure.md               # /structure print this file
│   ├── skills/                        # Reusable packaged capabilities (optional)
│   └── agents/                        # Sub-agent definitions (optional)
│
├── .github/
│   ├── pull_request_template.md       # PR description template
│   └── workflows/
│       └── deploy.yml                 # Sync src/ to S3 on push to main
├── .gitignore                         # Ignores .env, settings.local.json, OS files
├── .env.example                       # Committed env template (empty values only)
│
├── src/                               # Web root — only this folder is deployed
│   ├── index.html                     # Landing page (the only index.html)
│   ├── about.html                     # About / Bio
│   ├── resume.html                    # Résumé
│   ├── projects.html                  # All-projects listing
│   ├── 404.html                       # Not-found page
│   ├── robots.txt
│   ├── projects/
│   │   └── <project-slug>.html        # One case study per file
│   └── assets/
│       ├── css/
│       │   └── style.css              # Global stylesheet
│       ├── js/
│       │   └── main.js                # Global script (minimal)
│       └── images/
│           ├── profile/               # Profile photo
│           └── projects/
│               └── <project-slug>/    # Diagrams for that case study
│                   ├── architecture-before.png
│                   └── architecture-after.png
│
└── docs/
    ├── conventions.md                 # ← YOU ARE HERE
    ├── git-workflow.md                # Branch → review → commit → PR flow
    ├── system-design-concepts.md      # Condensed cheat sheet read by /concepts
    ├── templates/
    │   └── project-case-study.html    # Case study template (outside src/, never deployed)
    ├── build-and-test.md              # Run, pre-upload checklist, deploy
    └── aws-deploy-setup.md            # One-time OIDC role + GitHub environment setup
```

---

## File-Type Table

| File type                    | Goes in                                      | Notes                                      |
|------------------------------|----------------------------------------------|--------------------------------------------|
| Claude memory / rules        | `CLAUDE.md`                                  | Root only, keep short                      |
| Slash commands               | `.claude/commands/`                          | One `.md` per command                      |
| Permissions / hooks          | `.claude/settings.json`                      | Hooks live here, not in scripts/           |
| Personal Claude overrides    | `.claude/settings.local.json`                | Gitignored                                 |
| MCP config                   | `.mcp.json` (root)                           | External tool connections                  |
| Reusable skill               | `.claude/skills/<name>/SKILL.md`             | Loaded on demand, not every session        |
| Sub-agent definition         | `.claude/agents/`                            | Isolated context window                    |
| Homepage                     | `src/index.html`                             | Web root                                   |
| Top-level page               | `src/<page>.html`                            | Descriptive name (about, resume, 404)      |
| Project case study           | `src/projects/<slug>.html`                    | Start from the template, or run `/project <slug>` |
| Case study template          | `docs/templates/project-case-study.html`     | Not deployed                               |
| All-projects listing         | `src/projects.html`                            | Entry point to case studies                |
| Global CSS                   | `src/assets/css/style.css`                   | Single stylesheet, design tokens at :root  |
| Global JS                    | `src/assets/js/main.js`                      | Minimal; avoid frameworks                  |
| Architecture diagram (image) | `src/assets/images/projects/<slug>/`         | PNG or SVG; referenced by case study HTML  |
| Other shared images          | `src/assets/images/`                         | Favicons, hero images, profile photo       |
| PR template                  | `.github/pull_request_template.md`           | Pre-fills PR descriptions                  |
| CI/CD workflow               | `.github/workflows/*.yml`                    | One file per pipeline                      |
| Secrets template             | `.env.example`                               | Committed, empty values; `.env` gitignored |
| Project docs / references    | `docs/`                                      | Outside `src/`, never deployed       |

---

## Rules

1. **Never create a new top-level folder** without checking this table first.
2. **One case study = one file** under `src/projects/`. Slug = kebab-case project name.
3. **Images go in `src/assets/images/projects/<slug>/`** — never inline base64 or put images in the project HTML folder.
4. **No build step** — HTML, CSS, and JS ship as-is. No bundler, no transpiler.
5. **Only `src/` is deployed** — `docs/`, `.claude/`, `.github/` and repo files never reach production, so no exclude flags are needed.
   Only the landing page is `index.html`; other pages get descriptive names. Use relative paths (`assets/...`, or `../assets/...` from `projects/`); only `404.html` uses root-absolute ones.
6. **Skills vs CLAUDE.md** — if Claude should know it sometimes, it's a skill; if always, CLAUDE.md. Keep CLAUDE.md short.
7. **Hooks** (pre/post tool events) go in `.claude/settings.json` under `"hooks"`.
8. **Secrets** — never commit `.env`; commit `.env.example` with empty placeholders.
9. **Git** — follow `docs/git-workflow.md`: feature branch, `/review`, commit, PR. Never commit to `main`.
10. **Theme** — the site is always dark (tokens at `:root` in `style.css`); there is no light theme, so check new components for contrast on `--bg` / `--bg-subtle`.
11. **One responsibility per file** — keep JS/CSS modules focused; no unrelated code in `main.js`.

---

## Naming

| Thing              | Convention           | Example                              |
|--------------------|----------------------|--------------------------------------|
| Project slug       | kebab-case           | `s3-static-website`                  |
| Image file         | kebab-case           | `architecture-before.png`            |
| CSS class          | BEM-ish kebab        | `card`, `card-grid`, `section-header`|
| CSS variable       | `--<token>`          | `--accent`, `--bg-subtle`            |

---

## Decision Framework

| Question                                 | Answer                    |
|------------------------------------------|---------------------------|
| Should Claude always know this?          | `CLAUDE.md`               |
| Should Claude know this sometimes?       | `.claude/skills/`         |
| Should this run in isolation?            | `.claude/agents/`         |
| Should this happen automatically?        | `.claude/settings.json` hooks |
| Does Claude need external tools?         | MCP servers               |

---

## Project Case Study Standard

Every `src/projects/<slug>.html` follows `docs/templates/project-case-study.html`: **ten sections, about 700–900 words**, written so a recruiter gets the point in 30 seconds and the detail in two minutes.

| # | Section | Purpose |
|---|---|---|
| 1 | Business Requirement | 2-sentence scenario and the design question; says if the workload is static or dynamic |
| 2 | At a glance | Goal, Key decision, Stack (with region), Who, Monthly cost, Status |
| 3 | Summary | About 50 words: what, decision, cost, next |
| 4 | Figure | Diagram; caption says why the design fits and when another (EC2, containers) would |
| 5 | Requirements | Measurable targets with status |
| 6 | How It Works | 3–5 steps, one Proof line, Key Decision callout |
| 7 | Alternatives and Cost | Headline figure, one comparison table with a "Best fit" row, sources |
| 8 | Design Considerations | 8 Core categories from `docs/system-design-concepts.md`, 3 columns, rows of 12 words or fewer |
| 9 | Problems I Solved | Real errors only: error, cause, fix. Required once there are real problems; omit it when there are none, never invent one |
| 10 | Limits and Next Steps | Tradeoffs, what breaks at 10× scale, what I'd do differently, what's next |

- Sections 1–8 and 10 are always required; section 9 follows the rule above. "n/a — reason" is allowed for a Design Considerations row; "Not available" for a value you cannot find. Who, When and Where live in the glance card and header.
- **Reference pages:** `src/projects/s3-static-website.html` and `src/projects/s3-cicd-pipeline.html` are the models. New pages match their structure, tone, tables and length; copy the template, then compare against them.
- **Cost:** compare at least two options, give estimates, and link every figure to an AWS pricing page or https://calculator.aws/.
- **Writing rules:**
  1. **Be explicit.** On first use write the full name: "Amazon S3 bucket" not "bucket", "IAM role" not "role", and spell out "OpenID Connect (OIDC)", "AWS Security Token Service (STS)" and similar once per page. Name the actual tool, not "the pipeline" or "the server". Diagram labels may use acronyms defined in the figure's aria-label or caption.
  2. **Say why.** Every caption, decision and table row gives the reason, not just the fact.
  3. **State the scope.** Say what kind of workload the design is for (static vs dynamic, small vs large) and when a different choice, such as EC2 or containers for a dynamic app, would be better.
- **Brevity:** no prose block over ~100 words when a table or bullets would do. No "coming soon" or placeholder sections on a public page; add the section when the work exists.
- No `TODO:` or "Placeholder" may remain on a published page. `/review` enforces this; `/project <slug>` helps fill the sections.
