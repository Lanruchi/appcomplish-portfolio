# Build, Run & Test

## Run locally
No build step. `cd src && python -m http.server 8000` → http://localhost:8000

## Pre-upload checklist (replaces unit tests)
- [ ] Every page opens; nav and internal links work
- [ ] No missing images/PDFs, no `path-to-...` placeholders
- [ ] Looks right at phone width
- [ ] Claims, dates and certs are accurate; nothing private
- [ ] Resume PDF and profile photo are in `src/assets/`
- [ ] Dry-run the deploy workflow if you changed deletions/renames (`--delete` removes files not in `src/`)

## Deploy
Automatic: push to `main` → GitHub Actions syncs `src/` to S3. Manual: Actions → Deploy to S3 → Run workflow (dry run by default). One-time AWS/GitHub setup: `docs/aws-deploy-setup.md`.
