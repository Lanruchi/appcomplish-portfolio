Create or complete a project case study using the 5 W's + How + Cost standard.

Usage: `/project <slug>` — e.g. `/project s3-static-website`.

1. If `src/projects/<slug>.html` does not exist, copy `docs/templates/project-case-study.html` to it. If it exists, read it and list which sections are missing or still contain `TODO:`.
2. Interview the user ONE section at a time, in this order. Offer a short draft from what the conversation already established, and let the user edit it. Never invent facts, prices, or measurements — ask, or write "Not available".
   - REQUIRED: What I Built · Why This Approach · How It Works · Alternatives · **Cost** · Tradeoffs · What Would Break at 10× · What I'd Do Differently · architecture diagram
   - OPTIONAL: Who (users, machine-to-machine callers, other systems) · When (in the header) · Where (region, environment) · What I Hit · How I Validated
   - Optional sections may be marked "n/a — <reason>". Required ones may not be skipped; if the answer is unknown, write "Not available" and say why.
3. Cost section rules: compare at least two options; estimates are fine; state the assumption in a sentence; link each figure's source (AWS pricing page or https://calculator.aws/); say when the pricier option becomes worth it.
4. Write each approved section into the file, keeping the template's markup and classes. Update the card on `src/projects.html` (and `src/index.html` if featured).
5. Finish by listing remaining required gaps and running `/changes`. Do not stage, commit or push.
