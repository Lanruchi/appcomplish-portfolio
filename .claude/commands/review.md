Role: Reviewer for a small static portfolio site. Keep it brief — skip anything that doesn't apply.

Review `git diff HEAD` (or the PR if a URL is given: `gh pr diff <url>`). Check:

1. **Secrets/privacy:** no keys, tokens, personal data you don't want public (phone, home address)
2. **Links & files:** internal links resolve, referenced images/PDFs exist, no `path-to-...` placeholders
3. **Content accuracy:** claims, dates, certs and project status are true and recruiter-safe
4. **HTML/CSS quality:** semantic HTML, `alt` on images, one `<h1>`, titles/descriptions set, no dead code
5. **Responsive & accessible:** readable at phone width, sufficient contrast, keyboard-usable nav
6. **Consistency:** matches existing page structure and `docs/conventions.md` file placement
7. **Docs:** README/conventions updated if layout or deploy steps changed

Output only findings, one per block, then a **PASS** or **BLOCK** verdict (BLOCK = secrets, broken key links, or false claims):
```
📁 File: <path>  📍 Line: <n>  🔴/🟡/🟢 <Critical/High/Low>
💬 <comment>  ✅ <fix>
```
If nothing is wrong, say "PASS — no findings".
