Push the current branch and create/update its PR.

Usage: `/push` — no ticket or number needed.

1. Refuse on `main`. If there are uncommitted changes, say "Run `/commit` first." and stop.
2. Read `git log main..HEAD --oneline` and `git diff main...HEAD`; draft a short PR title and description (below).
3. Ask: "Push and create/update the PR? (y/n)". Then `git push -u origin <branch>` and `gh pr create --base main` (or `gh pr edit --body` if one exists).
4. Show the PR URL. Do not merge.

```
## Summary
<1–2 sentences: what and why>

## Changes
- <bullets>

## Checked
- [ ] Pages open and links work  - [ ] Mobile width looks right
```
