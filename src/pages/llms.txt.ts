import type { APIRoute } from 'astro';
import posts from '../data/blog.json';
import { SITE, brand, contact, home, corporate, landlords, management, properties, google, guestAreas, landlordAreas } from '../data/site';
export const GET: APIRoute = () => new Response(`# Blue Palm Corporate Housing Cardiff

> ${home.desc} ${brand.legal} (${brand.reg}). Independent, local company working in Cardiff since ${brand.since}.

## Key facts
- Email: ${contact.email} (${contact.reply.toLowerCase()})
- Google: ${google.name}, ${google.address} — ${google.rating.toFixed(1)}★ from ${google.count} reviews (${google.url})
- Apartments in Pontcanna and Cardiff Bay; stays typically one month upwards; corporate invoicing with VAT
- Guaranteed rent for landlords across South Wales (agreements typically 3–5 years)
- Serviced accommodation management: ${management.small}
- Trusted by production teams from Netflix, Sky One, Bad Wolf, Disney, HBO, Pinewood, ITV, Paramount, BBC and S4C

## Main pages
- [Corporate accommodation](${SITE}/serviced-accommodation-cardiff): ${corporate.intro[0]}
- [Properties](${SITE}/properties)
- [Guaranteed rent for landlords + income calculator](${SITE}/agents-landlords): ${landlords.intro}
- [Serviced accommodation management](${SITE}/management)
- [Pontcanna](${SITE}/pontcanna) · [Cardiff Bay](${SITE}/cardiff-bay) · [About](${SITE}/aboutus) · [Book your stay](${SITE}/contact) · [Landlord assessment](${SITE}/agents-landlords#valuation)

## Apartments
${properties.map((p) => `- [${p.name}](${SITE}/${p.slug}): ${p.spec}, sleeps ${p.sleeps}`).join('\n')}

## Areas
${guestAreas.map((a) => `- [Serviced apartments near ${a.name}](${SITE}/serviced-apartments/${a.slug})`).join('\n')}
${landlordAreas.map((a) => `- [Guaranteed rent in ${a.name}](${SITE}/guaranteed-rent/${a.slug})`).join('\n')}

## Blog
${posts.map((p) => `- [${p.title}](${SITE}/blog/${p.slug})`).join('\n')}
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
