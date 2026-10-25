Stage and commit current changes.

Usage: `/commit` — no ticket or number needed.

0. Nothing is staged until the user has seen the changes: run `/changes` first (grouped table + diffs), never `git add` before that.
1. Refuse on `main`/`master` (suggest `/branch`). If the tree is clean, say so and stop.
2. Run `/review` on the changes; stop if anything is Critical.
3. Check `README.md` and `docs/` still match (layout, deploy steps); update if not.
4. Propose a message: `<type>(<scope>): <summary>` — lowercase, imperative, ≤72 chars (types: feat fix docs style refactor chore).
5. Show the exact files to stage and ask: "Approve this commit? (y/n)". Only then `git add` those specific files and commit. Show the hash.
