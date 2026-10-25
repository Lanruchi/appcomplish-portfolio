Show what changed, grouped and explained, without staging anything.

1. Run `git status --short`, `git diff --stat`, and `git diff -U0` (include untracked files; trim long new files).
2. Group the changes by purpose (e.g. A: workflow/guard, B: deploy, C: site content). A group = changes that should ship together in one commit.
3. For each group, output a table: `| File | What changed |` — one plain-English row per file. For a file whose hunks belong to different groups, say which lines/hunks go with which group.
4. List any older work sitting in `git stash list` as its own group.
5. If groups are mixed, propose how to split them into separate branches/commits, and the commit message for each.
6. End by asking which group(s) to stage, and stop. Never run `git add`, `commit`, `push` or `stash` here — the user reads the diffs in VS Code Source Control or the chat, then decides.
