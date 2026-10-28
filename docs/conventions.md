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
│   │   ├── diagram.md                 # /diagram   guide the draw.io architecture diagram, fill the Figure
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

Every `src/projects/<slug>.html` follows `docs/templates/project-case-study.html`: **five parts, about 600–800 words**, written so a recruiter gets the point in 30 seconds and the detail in two minutes. Each fact appears once.

| # | Section | Purpose |
|---|---|---|
| 1 | Business Requirement | Starts straight with the requirement ("Build a ... that must ...", own domain, no stored keys, low cost...) in one short paragraph, no backstory, then the design question |
| 2 | At a glance | Key decision, Stack (with region), Monthly cost (estimate), Status. A Source row (GitHub link) is allowed on CI/CD pages |
| 3 | Figure | One diagram and a short caption, then an optional Proof line (a result that shows it works). Pages that will get an architecture image keep a "coming soon" slot until it exists; CI/CD pages have none. Run `/diagram <slug>` for the layout standard. Under the Figure, a collapsible services list (`<details class="services">`): one row per AWS service or tool actually used, with its purpose here and a link to its official page |
| 4 | Problems I Hit and How I Fixed Them | Real problems only. Each is a red callout (Trying to, What happened, Why) followed by a green Fix callout with numbered steps that name where to click. Omit the section when nothing went wrong; never invent a problem. An option table is allowed for a decision that mattered |
| 5 | Design Considerations | The 8 Core categories from `docs/system-design-concepts.md`, columns Category, Decision, Status. Cost lives in its row: the estimate, the rejected AWS options and the pricing links |

- **Status labels** (Design Considerations): `Addressed`, `Partly addressed`, `Not addressed yet`, or `n/a` with a reason in the Decision. Use "Not available" for a value you cannot find.
- **Callout classes:** `callout--problem` (red), `callout--fix` (green), `diagram-slot` (reserved image space). Colour tokens are in `style.css`.
- **Reference pages:** `src/projects/s3-static-website.html` and `src/projects/s3-cicd-pipeline.html` are the models. Copy the template, then compare against them.
- **Cost:** put it in the Design Considerations Cost row. Name at least two options (AWS only), give estimates and link every figure to an AWS pricing page or https://calculator.aws/.
- **Writing rules:**
  1. **Be explicit.** On first use write the full name: "Amazon S3 bucket" not "bucket", "IAM role" not "role", and spell out "OpenID Connect (OIDC)", "AWS Security Token Service (STS)" and similar once per page. Name the actual tool, not "the pipeline" or "the server". Diagram labels may use acronyms defined in the figure's aria-label or caption.
  2. **Say why.** Every caption, decision and table row gives the reason, not just the fact.
  3. **State only what is true.** Write what was built, seen or sourced. No hypotheticals ("a dynamic app would...", "at 10× the traffic..."), no non-AWS comparisons, and nothing you cannot explain in an interview.
  4. **Link for learners.** On first mention, link each AWS service, feature or concept (Amazon S3, Origin Access Control, the IAM role's trust policy...) to its official AWS or GitHub documentation page, opening in a new tab with `rel="noopener"`. Check that each URL returns 200 first. Link, do not explain at length.
  5. **Plain language.** Explain each problem so a reader who has never seen the error understands what you were trying to do and why it failed. Mask account and repository ID numbers as `xxxxxxx`.
- **Brevity:** no prose block over ~100 words when a table or bullets would do.
- **Placeholders:** no `TODO:` or "Placeholder" text on a published page. A deliberate "coming soon" image slot is allowed. `/review` enforces this; `/project <slug>` helps fill the sections.
