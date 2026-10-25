Fill a project page's "Design Considerations" section by interviewing the user.

Usage: `/concepts <slug>` — e.g. `/concepts s3-static-website`.

1. Read `docs/system-design-concepts.md` and `src/projects/<slug>.html` (create the page from `docs/templates/project-case-study.html` first if missing). List which Core categories already have a row and which are missing or still `TODO:`.
2. For each missing **Core** category, ONE at a time:
   - Show the category's key concepts from the cheat sheet and its "Ask yourself" question, plus one sentence on how it likely applies to THIS project (from the page and conversation).
   - Ask the user to answer in their own words (a draft is fine to propose; they edit it).
   - Turn the answer into a row: `Category | Concept(s) | How it applies here | Decision / status`. Allowed statuses: decided, planned, or "Not available yet". If it doesn't apply: "n/a — <reason>".
3. Never invent numbers, SLAs, latencies or prices. If an AWS figure is quoted, link its source. Unknown → "Not available".
4. After the 8 Core rows, offer the Situational categories that look relevant (one line each) and add only the ones the user wants.
5. Write the approved rows into the page's Design Considerations table (`class="cost-table design-table"`, inside `<div class="table-wrap">`). No `TODO:` may remain.
6. Finish by listing any Core categories still missing and running `/changes`. Do not stage, commit or push.
