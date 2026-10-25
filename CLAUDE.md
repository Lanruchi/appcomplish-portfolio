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
- Workflow commands: `/kickoff` `/branch` `/review` `/commit` `/push` `/compact` `/structure`.
- Never hardcode secrets; use empty placeholders only.
- If any requirement is ambiguous or has multiple valid paths, stop and prompt before proceeding.

---

## Project
appcomplish.click — Cloud engineering portfolio for Nurudeen Adeniyi.
Goal: document AWS bootcamp projects as real case studies with decisions, tradeoffs, and architecture diagrams.

## Stack
Static HTML/CSS/JS — no build step, no framework. All site files live in `src/` (the deploy root).
Hosted on S3 + CloudFront. Deployed manually (console upload) for now.

## Deploy
Manual for now: upload the contents of `src/` to the S3 bucket via the AWS console. No CLI, Terraform, or CI/CD yet — do not add deploy automation unless asked.

See `docs/conventions.md` for the full folder tree.
Run `/structure` to print the tree on demand.
