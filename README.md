# Ezra Healthcare Management Website

This repository is structured around:

- **Ezra Healthcare Management** — parent company
- **Ezra Health** — primary care
- **Ezra Wound Consults** — Arizona wound services
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

## Ezra Academics page update

The `/academics/` page now mirrors the content flow of the existing Canva Academics webpage, including the President's Message, mission statement, Class of 2026 senior assistance, eligibility criteria, proof-of-income privacy instructions, donor status, application form, and contact pathway.


## Version 5 brand-story update

- Added Ezra CARE values: Compassionate, Accessible, Restorative, Elite.
- Added Philippians 4:6 in a prominent editorial scripture section.
- Expanded homepage use of Ezra illustrations.
- Moved the Joanna-and-child founder image to the About page.
- Replaced placeholder About content with Joanna's Canva biography, experience, education, and personal interests.


## Version 6 image and naming update

- Changed the wound-care division name to Ezra Wound Consults.
- Added the uploaded wound-products artwork to the Ezra ecosystem and services.
- Added the uploaded Ezra Academics artwork to the ecosystem and Academics page.
- Added the uploaded family image to the About section.


## Version 7 content and contact update

- Replaced homepage organization description.
- Added Ezra Health license, language access, clinic location, availability, hours, phone, accepted plans, and medical email.
- Renamed the wound division Ezra Wound Consulting.
- Added Arizona mobile and telehealth language, wound-consulting tagline, faith-based lines, and a clinical-image acknowledgment gate.
- Updated all division emails and contact anchors.
- Expanded Ezra Academics with the complete mission, President's Message, Senior Send-Off / Class of 2026 display, eligibility, proof-of-income, donor notice, and application form.
- Removed internal placeholder launch language.


## Version 8 polished organization layout

- Added a premium hover treatment to the three homepage division cards.
- Rebuilt the Ezra Health practice-information area using branded Location, Hours, Phone, Languages, Plans, and Email cards.
- Added the uploaded Senior Send-Off 2027 flyer to the Ezra Academics page.
- Added a mobile-responsive Graduation Expense Assistance Program section.
- Updated the Senior Send-Off display from Class of 2026 to Class of 2027.


## Version 9 illustrations-only approved draft

- Removed stock photography and photographic headshots from the site.
- Rebuilt the homepage to match the approved mockup direction.
- Preserved complementary color strips across the top of all three ecosystem cards.
- Used only user-supplied Ezra illustrations for the hero, primary care, wound consulting, academics, and About sections.
- Added the floating ecosystem-card layout and coordinated CARE/Philippians panels.


## Version 10 provider profile
- Added the Meet Your Provider redesign for Ezra Health.
- Added Joanna Ibanez, MSN, APRN, FNP-C.
- Added NPI 1205629755 and California FNP license 95034630.
- Added CARE philosophy, provider biography, office cards, accepted plan types, and contact CTA.
- Presented the supplied headshot inside a pink Ezra-branded portrait frame.


## Version 11 clean provider page
- Removed CARE Philosophy.
- Removed office hours.
- Removed accepted insurance plans.
- Reduced decorative iconography.
- Simplified the provider page to portrait, biography, credentials, location, and contact.


## Version 12 provider photo update
- Replaced the Ezra Health provider profile image with the newly supplied portrait.
- Preserved the simplified Version 11 provider-page layout.


## Version 13 credential cleanup
- Changed provider display name to Joanna Ibanez, FNP-C.
- Removed MSN and APRN from the public-facing provider name.
- Changed the subtitle from California Licensed Family Nurse Practitioner to Family Nurse Practitioner.


## Deploy-ready consolidation
- Navigation: Home, About, Primary Care, Wound Consulting, Academics, Contact.
- Patient Resources removed from navigation and routes.
- Primary Care uses the exact user-supplied profile photograph.
- Public provider display: Joanna Ibanez, FNP- C.
- Provider subtitle/credential chips beneath the name removed.
- New-patient availability notice removed.
- Three homepage division cards retained with colored top accents.

## Corrected production build
- Removed obsolete `/services` and `/resources` routes.
- Navigation is Home, About, Primary Care, Wound Consulting, Academics, Contact.
- Uses the approved Ezra Healthcare Management logo.
- Primary Care uses Joanna's supplied portrait; the original green background was replaced with a subtle blush on the left while preserving the portrait itself.
- Wound Consulting uses the approved wound-care clinician/products artwork.
- Academics uses the approved Ezra Health & Academics artwork and the supplied mission, President's Message, Senior Send-Off details, eligibility, and application link.
