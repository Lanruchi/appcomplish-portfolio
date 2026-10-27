# Git Workflow

Light process for a solo static site. Never skip `/review`, never commit to `main`.

1. `/branch` — create a feature branch.
2. Make changes; check them in a browser (see `docs/build-and-test.md`), then `/changes` to see the diff.
3. `/review` — fix anything Critical/High.
4. `/commit` — approve the proposed message (y/n).
5. `/push` — approve push + PR (y/n).
6. Merge the PR on GitHub, delete the branch.

## Branch names
Create the branch in the main project folder with `git switch -c <name>`, so the editor switches to it and shows the work. Do not use separate `git worktree` folders.

`<type>/<short-description>` — lowercase, hyphens. Types: `feat` `fix` `docs` `refactor` `chore`.

## Commit messages
`<type>(<scope>): <summary>` — lowercase, imperative, no period, ≤72 chars.
Examples: `feat(projects): add s3 static website case study` · `fix(resume): correct linkedin link`

## Review gate (no exceptions)
- `/review` must be run **with the Skill tool, on the exact changes being committed**, and its output shown to the user. Summaries from memory do not count.
- Every commit approval request must include a line: `Review: PASS|BLOCK — run just now`. If that line is missing, the user should reject the request.
- New changes after a review (even a typo fix) require a new review before the commit.
- Applies to PRs too: run `/review` on a PR before merging it.
- Docs, config and one-line edits are not exempt.

## Rules
- **Never stage or commit before the user has seen the diff.** Use `/changes` (or VS Code Source Control) first; `git add`/`commit`/`push` also prompt for permission.
- No secrets in the repo; `.env` stays gitignored.
- No force-push, `reset --hard`, or `--no-verify` without explicit approval.
- Tests: none required for this static site; the manual pre-upload checklist replaces them.
- If a requirement is ambiguous, ask before proceeding.
