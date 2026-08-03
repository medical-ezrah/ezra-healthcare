# Ezra Healthcare Management Website

This repository is structured around:

- **Ezra Healthcare Management** — parent company
- **Ezra Health** — primary care
- **Ezra Mobile Wound Care** — Arizona wound services
- **Ezra Academics Foundation** — nonprofit education division

## Main routes

- `/`
- `/primary-care/`
- `/arizona-wound-care/`
- `/academics/`
- `/about/`
- `/contact/`

## Run locally

```bash
npm install
npm run dev
```

## Cloudflare Pages static deployment

This project uses:

```js
output: "export"
```

Cloudflare Pages settings:

- Framework preset: **Next.js (Static HTML Export)**
- Production branch: `main`
- Build command: `npx next build`
- Build output directory: `out`

## Before publishing

1. Confirm the exact legal and DBA names of each division.
2. Replace placeholder contact emails if they have not been created.
3. Add the correct phone numbers, service areas, hours, and scheduling links.
4. Verify all primary-care and Arizona wound-care licensure and service claims.
5. Do not accept PHI through ordinary email or a basic form.
6. Connect referrals to a HIPAA-appropriate service with required BAAs and safeguards.
7. Add Privacy, Terms, Accessibility, and Nondiscrimination pages.
8. Obtain appropriate rights and releases for all published artwork and photographs.
9. Add Google Search Console, analytics configured for healthcare privacy, and organization schema after launch.

## Uploading to GitHub from mobile

The easiest mobile workflow is to upload the files and folders from this package to the repository root. Preserve the folder structure. For a clean rebuild, delete the old project files first, but do not delete the repository itself.

Recommended commit message:

`Rebuild site for Ezra Healthcare Management divisions`


## Version 3 update

The homepage now follows a conversion-focused structure inspired by Empire Wound Care's public page organization while using original Ezra content, branding, and code.

Ezra Academics Foundation is included:
- In the main navigation
- On the homepage under services and programs
- On the dedicated Services page
- In Resources
- In Contact
