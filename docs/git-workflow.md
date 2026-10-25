# Git Workflow

Light process for a solo static site. Never skip `/review`, never commit to `main`.

1. `/branch` — create a feature branch.
2. Make changes; check them in a browser (see `docs/build-and-test.md`), then `/changes` to see the diff.
3. `/review` — fix anything Critical/High.
4. `/commit` — approve the proposed message (y/n).
5. `/push` — approve push + PR (y/n).
6. Merge the PR on GitHub, delete the branch.

## Branch names
`<type>/<short-description>` — lowercase, hyphens. Types: `feat` `fix` `docs` `refactor` `chore`.

## Commit messages
`<type>(<scope>): <summary>` — lowercase, imperative, no period, ≤72 chars.
Examples: `feat(projects): add s3 static website case study` · `fix(resume): correct pdf link`

## Rules
- **Never stage or commit before the user has seen the diff.** Use `/changes` (or VS Code Source Control) first; `git add`/`commit`/`push` also prompt for permission.
- No secrets in the repo; `.env` stays gitignored.
- No force-push, `reset --hard`, or `--no-verify` without explicit approval.
- Tests: none required for this static site; the manual pre-upload checklist replaces them.
- If a requirement is ambiguous, ask before proceeding.
