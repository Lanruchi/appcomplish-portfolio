Create or complete a project case study using the 5 W's + How + Cost standard.

Usage: `/project <slug>` — e.g. `/project s3-static-website`.

0. Read the two reference pages first, `src/projects/s3-static-website.html` and `src/projects/s3-cicd-pipeline.html`, and match their structure, tone, table style, diagram style and length (about 700–900 words). New pages must read like siblings of these, not like a different author.
1. If `src/projects/<slug>.html` does not exist, copy `docs/templates/project-case-study.html` to it. If it exists, read it and list which sections are missing or still contain `TODO:`.
2. Interview the user ONE section at a time, in this order. Offer a short draft from what the conversation already established, and let the user edit it. Never invent facts, prices, or measurements — ask, or write "Not available".
   - ALL TEN, in this order (Problems I Solved only if there are real problems; otherwise omit it): Business Requirement (2-sentence scenario + design question; say static or dynamic) · At a glance (Goal, Key decision, Stack incl. region, Who, Monthly cost, Status) · Summary (~50 words) · Figure (diagram + 2-sentence caption: why it fits, when another design would) · Requirements (targets + status) · How It Works (3–5 steps, Proof line, Key Decision) · Alternatives and Cost · Design Considerations (run `/concepts <slug>`) · Problems I Solved (real errors only) · Limits and Next Steps.
   - Table rows that do not apply may say "n/a — <reason>". Unknown values: write "Not available" and say why. Never invent problems, prices or measurements.
3. Writing rules for every section you draft: be explicit (full service names on first use, e.g. "Amazon S3 bucket", "IAM role", spell out acronyms once); say WHY in captions, decisions and table rows; state the scope (static vs dynamic, small vs large) and when a different choice such as EC2 or containers would be better.
3b. Cost section rules: compare at least two options; estimates are fine; state the assumption in a sentence; link each figure's source (AWS pricing page or https://calculator.aws/); say when the pricier option becomes worth it.
4. Write each approved section into the file, keeping the template's markup and classes. Update the card on `src/projects.html` (and `src/index.html` if featured), add the page to the folder tree in `README.md`, and link related case studies to each other.
5. Finish by listing remaining required gaps and running `/changes`. Then `/review` must run (Skill tool) and be shown before any commit is proposed. Do not stage, commit or push.
