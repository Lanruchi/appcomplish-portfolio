# Claude Rules

## Principles
Don't assume. Minimum code. Touch only what you must. Define success criteria.

## Context
- 70–80%: `/compact`. 80%+: `/clear` mandatory.
- Cost order, cheapest first: hooks, sub-agents, skills, MCP, CLAUDE.md (loaded every request, keep short).

## Files
Read `docs/conventions.md` before creating any file. No new top-level folder if an existing one fits. `/structure` prints the tree.

## Governance
- Follow `docs/git-workflow.md` for all commits, PRs, merges.
- Commands: `/kickoff` `/branch` `/changes` `/review` `/commit` `/push` `/compact` `/structure`.
- **Review gate:** before proposing ANY commit, run `/review` via the Skill tool and show its full output. Never call a change reviewed or "clean" unless it ran on these exact changes. Every commit proposal states `Review: <PASS|BLOCK>, run <just now>`. No review result shown = no commit, push or merge.
- No `git add`, `commit` or `push` until the user has seen the diff (`/changes`) and approved. Leave changes unstaged.
- No secrets; empty placeholders only.
- If a requirement is ambiguous or has multiple valid paths, stop and ask.

---

## Project
appcomplish.click — cloud engineering portfolio for Nurudeen Adeniyi: AWS and DevOps projects as case studies with decisions, tradeoffs and diagrams.

Static HTML/CSS/JS, no build step or framework. Site files live in `src/` (deploy root). Hosted on S3 + CloudFront; GitHub Actions syncs `src/` to S3 on push to `main` (OIDC role, no stored keys). Real values live in the GitHub `production` environment; `.env` stays local and uncommitted. See `docs/aws-deploy-setup.md`.
