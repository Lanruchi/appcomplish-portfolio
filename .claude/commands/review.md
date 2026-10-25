Role: Reviewer for a small static portfolio site. Keep it brief — skip anything that doesn't apply.

Review `git diff HEAD` (or the PR if a URL is given: `gh pr diff <url>`). Check:

1. **Secrets/privacy:** no keys, tokens, personal data you don't want public (phone, home address)
2. **Links & files:** internal links resolve, referenced images/PDFs exist, no `path-to-...` placeholders
3. **Content accuracy:** claims, dates, certs and project status are true and recruiter-safe
4. **HTML/CSS quality:** semantic HTML, `alt` on images, one `<h1>`, titles/descriptions set, no dead code
5. **Responsive & accessible:** readable at phone width, sufficient contrast, keyboard-usable nav
6. **Consistency:** matches existing page structure and `docs/conventions.md` file placement
7. **Docs:** README/conventions updated if layout or deploy steps changed

8. **Project case study pages** (`src/projects/*.html`), template `docs/templates/project-case-study.html`: all sections present in order (Problems I Solved may be omitted when there are no real problems) (Business Requirement, At a glance, Summary, Figure, Requirements, How It Works, Alternatives and Cost, Design Considerations, Problems I Solved, Limits and Next Steps) — a missing one is High; Cost compares ≥2 options with every figure linked to an AWS pricing page or calculator and no invented numbers; Design Considerations has all 8 Core categories (`docs/system-design-concepts.md`) answered or "n/a — reason"; no leftover `TODO:` or "Placeholder" text (Critical to publish); writing — full names on first use ("Amazon S3 bucket", "IAM role"), acronyms defined once, captions and decisions say WHY, and the page states its scope (static vs dynamic) and when another option such as EC2 would fit better (Low if missing); consistency — structure, tone, tables and diagram style match the reference pages `src/projects/s3-static-website.html` and `src/projects/s3-cicd-pipeline.html` (Low if it drifts); brevity — about 700–900 words and no prose block over ~100 words where a table or bullets fit (Low).

Output only findings, one per block, then a **PASS** or **BLOCK** verdict (BLOCK = secrets, broken key links, or false claims):
```
📁 File: <path>  📍 Line: <n>  🔴/🟡/🟢 <Critical/High/Low>
💬 <comment>  ✅ <fix>
```
If nothing is wrong, say "PASS — no findings".
