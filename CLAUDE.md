# Claude Rules

## Context Management
- 0–70%: work normally
- 70–80%: run `/compact`
- 80%+: `/clear` mandatory

## Token Budget (prefer in this order)
- Hooks → zero cost (runs outside Claude entirely)
- Sub-agents → zero cost (own context window)
- Skills → low cost (description only until invoked) orchestrator. Quarterback
- MCP → moderate cost (Tool Search loads on demand)
- CLAUDE.md → high cost (loaded every session, keep short)

## File Placement
Before creating any file, read `docs/conventions.md` for the correct location.
Never create a new top-level folder without verifying no existing folder fits.

## Governance
- Follow `docs/git-workflow.md` for all commits, PRs, and merges — no exceptions.
- Workflow commands: `/kickoff` `/branch` `/changes` `/review` `/commit` `/push` `/compact` `/structure`.
- **Review gate:** before proposing ANY commit, invoke `/review` with the Skill tool and show its full output. Never say a change is reviewed or "clean" unless the skill ran for these exact changes. Every commit proposal states: `Review: <PASS|BLOCK>, run <just now>`. No review result shown = do not commit, push or merge.
- Never run `git add`, `commit` or `push` until the user has seen the diff (`/changes`) and approved. Leave changes unstaged for review.
- Never hardcode secrets; use empty placeholders only.
- If any requirement is ambiguous or has multiple valid paths, stop and prompt before proceeding.

---

## Project
appcomplish.click — Cloud engineering portfolio for Nurudeen Adeniyi.
Goal: document AWS cloud and DevOps projects as real case studies with decisions, tradeoffs, and architecture diagrams.

## Stack
Static HTML/CSS/JS — no build step, no framework. All site files live in `src/` (the deploy root).
Hosted on S3 + CloudFront. Deployed by GitHub Actions to S3.

## Deploy
GitHub Actions syncs `src/` to S3 on push to `main` (OIDC role, no stored keys). Real values live in the GitHub `production` environment; `.env` stays local and uncommitted. See `docs/aws-deploy-setup.md`.

See `docs/conventions.md` for the full folder tree.
Run `/structure` to print the tree on demand.
