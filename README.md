# Blue Palm — bluepalmproperty.co.uk rebuild (Quantweb)

Astro 5 static site. `npm install` → `npm run dev` (port 4381) → `npm run build`.

- All copy: `src/data/site.ts` ([V] = verbatim from the old Squarespace site). Blog posts: `src/data/blog.json` (15 posts, same URLs).
- Every old URL is kept (property pages, /contact-1, /agents-landlords, blog posts). Retired pages 301 in `vercel.json` + `public/_redirects` (/homepage-1, /landlord, /cart, blog tag pages, /see-all-amenities-*).
- Landlord calculator rebuilt with the old engine/defaults; `/agents-landlords#open-calculator` (printed flyer QR codes) still lands on it.
- New local SEO: /serviced-apartments/<area> (14 Cardiff areas) and /guaranteed-rent/<town> (10 South Wales towns).
- Forms: set `PUBLIC_WEB3FORMS_KEY` in Vercel (free at web3forms.com, sent to info@bluepalmproperty.co.uk).
- Phone: none published on the old site — add it to `contact.phone` in site.ts when supplied.
- Typos tidied from the old copy: "convivence", "Landlords loss", "Legally Complaint", "Mercier of platform", "Predicable", "Assesment", "Request Corporate ratesy".
- Stock: Cardiff Bay photos (misc-9, misc-10) are Unsplash images carried over from the old site.
