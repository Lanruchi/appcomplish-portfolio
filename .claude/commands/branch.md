Create a feature branch and suggest a commit message.

Usage: `/branch` — no ticket or number needed.

Steps:
1. Infer a 3–5 word description from the work in this conversation.
2. Name it `<type>/<description>` — lowercase, hyphens. Types: feat | fix | docs | refactor | chore.
   Example: `fix/login-redirect-loop`, `feat/add-search`
3. Ask: "Create branch `<name>`? (y/n)"
4. Only after approval → run `git switch -c <name>` in the main project folder (carries uncommitted changes with it, and switches the editor to the new branch). Never use `git worktree` folders.
5. Show the branch name and suggest the commit message.
