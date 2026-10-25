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
│   │   ├── review.md                  # /review    code review checklist
│   │   ├── commit.md                  # /commit    README check + approved commit
│   │   ├── push.md                    # /push      push + create/update PR
│   │   ├── compact.md                 # /compact   context snapshot
│   │   └── structure.md               # /structure print this file
│   ├── skills/                        # Reusable packaged capabilities (optional)
│   └── agents/                        # Sub-agent definitions (optional)
│
├── .github/
│   └── pull_request_template.md       # PR description template
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
    └── build-and-test.md              # Run, pre-upload checklist, deploy
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
| Project case study           | `src/projects/<slug>.html`                    | One file per project                       |
| All-projects listing         | `src/projects.html`                            | Entry point to case studies                |
| Global CSS                   | `src/assets/css/style.css`                   | Single stylesheet, design tokens at :root  |
| Global JS                    | `src/assets/js/main.js`                      | Minimal; avoid frameworks                  |
| Architecture diagram (image) | `src/assets/images/projects/<slug>/`         | PNG or SVG; referenced by case study HTML  |
| Other shared images          | `src/assets/images/`                         | Favicons, hero images, profile photo       |
| PR template                  | `.github/pull_request_template.md`           | Pre-fills PR descriptions                  |
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
10. **One responsibility per file** — keep JS/CSS modules focused; no unrelated code in `main.js`.

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
