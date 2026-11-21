# Al-Amal School — website

Bilingual (English / Arabic) marketing and course-discovery site for Al-Amal School,
built with **Next.js 15 (App Router) + TypeScript**.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start          # serves the built site
npm run typecheck  # TypeScript check only
```

## How it's organised

```
src/
  app/
    [lang]/                 every page lives under /en or /ar
      layout.tsx            <html lang dir>, fonts, header, footer
      template.tsx          page fade-in on navigation
      page.tsx              Home
      courses/page.tsx      Course catalogue (search + filters, ?cat= and ?age= in the URL)
      courses/[slug]/       Course detail (pre-rendered for every course in both languages)
      pricing/  about/  how-it-works/  contact/
    api/inquiry/route.ts    receives the enrollment form (see "Before launch")
    globals.css             the whole design system: tokens, components, RTL, breakpoints
  components/               Header, Footer, CourseCard, CourseCatalog, Accordion,
                            PricingTable, ContactForm, course-page client bits, icons, ui
  lib/
    content.ts              ← courses, subjects, age groups, levels, org details, feature switches
    dictionaries.ts         ← all interface text in English and Arabic
    art.ts                  SVG illustrations (one palette per subject)
    i18n.ts                 language helpers, URL builders, formatting, filtering
    inquiry.ts              form model + validation (shared by browser and server)
    types.ts                Course / Category / L10n types
  middleware.ts             sends "/" and other bare paths to /en or /ar
                            (saved choice → browser language → English)
public/logo-mark.png        logo
```

## Editing content

* **Courses:** edit `src/lib/content.ts`. Every text field is `{ en, ar }`.
  Unknown facts stay `null` and show as a dashed "To be confirmed" marker — no need to invent values.
* **Fees:** set `price` (a number) and `priceUnit` (e.g. `{ en: "per month", ar: "شهريًا" }`).
  The currency is `org.currency`. Fees then appear on cards, course pages and the pricing page.
* **WhatsApp / email:** set `org.whatsapp` / `org.email` in `content.ts`; the WhatsApp button turns on automatically.
* **Interface text:** `src/lib/dictionaries.ts`. The Arabic object is type-checked against the English one,
  so a missing or misspelled key fails the build.

### Feature switches (`src/lib/content.ts`)

| Switch | Currently | What it does |
| --- | --- | --- |
| `SHOW_IN_PERSON` | `false` | In-person programs (data kept, hidden from the site) |
| `SHOW_TEACHER_TRAINING` | `false` | Teacher Training subject and its 6 courses |
| `SHOW_TEACHERS` | `false` | Teacher-profile sections on Home, About and course pages |

## Before launch

1. **Deliver inquiries.** `src/app/api/inquiry/route.ts` validates and currently only logs to the server
   console. Connect it to email, a CRM / Google Sheet, or WhatsApp Business.
2. Add real fees, the WhatsApp number, and confirm the course details written for English,
   math, physics and programming (ages, levels, descriptions).
3. Replace `public/logo-mark.png` with a high-resolution or SVG version of the logo if available.

## Design notes

* Right-to-left is handled with `dir="rtl"` and CSS logical properties; directional icons carry a `flip` class.
* Arabic uses its own fonts (Tajawal headings, IBM Plex Sans Arabic body) with larger size and line-height.
* Motion respects `prefers-reduced-motion`.
* Fonts load from Google Fonts by family name because the SVG illustrations reference those names.
