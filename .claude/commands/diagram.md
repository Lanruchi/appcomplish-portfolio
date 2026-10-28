Guide the user through drawing a project's AWS architecture diagram in draw.io, then put it on the page.

Usage: `/diagram <slug>` — e.g. `/diagram s3-static-website`. The user draws; you advise and fill the page. Never touch AWS.

1. Read `src/projects/<slug>.html` (and the CI/CD or build notes the user gives). List ONLY the AWS components that were built, in the order a request or deployment travels. Ask the user to confirm the list before giving steps. If a component was not built, leave it out; never draw an example or a "might add later" service.
2. Give the steps below as a short numbered tutorial, with the project's own components filled in.
3. When the user sends the exported file path, create `src/assets/images/projects/<slug>/` if it is missing, copy the file there as `architecture.png` (or `.svg`), replace the `diagram-slot` div with an `<img>` (relative `../assets/...` path, `alt` that spells out the flow and acronyms), and write the caption: Figure 1, what it shows and why this design fits. Then run `/changes`. Do not stage, commit or push.

## Standard (every project uses the same layout)

**Boxes: only what was built, outermost first.**
1. **AWS Cloud** around everything built. The visitor or user (laptop icon, labeled "Visitor (browser)") sits outside it, to the left.
2. **AWS account** inside AWS Cloud.
3. Inside the account, side by side: **Global services** (Route 53, CloudFront and other services with no Region) and **Region `<region>`** (S3, ACM for CloudFront in `us-east-1`, and other regional services).
4. Add a VPC, Availability Zone or subnet box only if the project created one. Never draw a VPC "as an example".

**Components:** one AWS icon each (draw.io: More Shapes → AWS), with the service name under it and a short detail label (bucket name, record type, "Block Public Access on"). Place them left to right in request order.

**Arrows:** numbered 1, 2, 3... in the order things happen, each with a short label. Request = solid, response/return = dashed, supporting link that is not in the path (such as a certificate) = dotted with no number. Attach arrows to the icons (drag from the blue hover arrows) so they follow when moved. Give each arrow its own spot on an icon so lines do not overlap. A feature that sits between two services (for example Origin Access Control) is a label on that arrow, not a floating text box.

**Look:** dark canvas to match the site (the site is dark only), light text, grid off for export, spelling checked.

**Export:** PNG at 2x or SVG, named `architecture.png` / `architecture.svg`, and keep the file small.

**Page rules:** the diagram is the only copy of the flow, so the caption says why the design fits and does not repeat the arrows. CI/CD pages have no architecture slot. If a component changes later, redraw and re-export; do not patch the picture with text.

## Reference
`src/projects/s3-static-website.html` — Visitor → Route 53 → CloudFront → (OAC) → private Amazon S3 bucket, with the ACM certificate dotted to CloudFront.
