# FIRST Istanbul Experience

Premium bilingual event companion for **FIRST — Steps to Effective Treatment**, Istanbul, 15–18 September 2026, presented by Dar Al Dawa.

## Content updates

- **Event dates and agenda:** edit `app/event-data.ts`. Each activity has English and Arabic copy, a type, time, and optional verified map URL.
- **Flights:** replace only the `TBC` values in the two boarding-pass blocks in `app/page.tsx` after the flight number, times, and baggage allowance are officially confirmed.
- **Contacts:** edit the verified `contacts` array inside `app/experience-enhancements.tsx`. Keep phone numbers in international format and WhatsApp numbers without `+` or spaces.
- **Speakers:** credentials and session titles are in `app/page.tsx`; portraits are in `public/assets/`.
- **Weather:** the no-key Open-Meteo request is in `app/experience-enhancements.tsx`. Cached data is used when the network fails. Change coordinates only if the event city changes.
- **Currency:** the JOD→TRY reference endpoint is in `app/experience-enhancements.tsx`; the UI identifies cached and indicative rates.
- **Gallery:** add approved, optimized images under `public/assets/gallery/`, then add the filename, bilingual caption, alt text, and date to `public/gallery.json`. Never add attendee photos without approval.
- **Full calendar:** update `public/FIRST-Istanbul-2026.ics` whenever confirmed agenda details change.

## Local-only visitor data

Preferred name, language, checklist progress, custom checklist items, cached weather, and cached currency are stored only in the visitor's browser. They are not uploaded.

## Build and deployment

- `npm run build` validates the hosted Vinext/Sites version.
- `static-entry.tsx` is the GitHub Pages browser entry. The checked-in `public/assets/app.js` and `app.css` are the compiled static experience.
- `.github/workflows/pages.yml` deploys `index.html` and `public/` to GitHub Pages on a push to `main`.

The service worker derives its scope at runtime, so it works at both the domain root and `/Istanubul-First/`.
