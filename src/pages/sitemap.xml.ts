import type { APIRoute } from 'astro';
import posts from '../data/blog.json';
import { SITE, properties, guestAreas, landlordAreas } from '../data/site';
export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const u: [string, string, string?][] = [
    ['/', '1.0'], ['/properties', '0.9'], ['/serviced-accommodation-cardiff', '0.9'], ['/agents-landlords', '0.9'], ['/management', '0.8'], ['/aboutus', '0.6'], ['/pontcanna', '0.7'], ['/cardiff-bay', '0.7'], ['/contact', '0.8'], ['/privacy', '0.2'], ['/blog', '0.7'], ['/serviced-apartments', '0.6'], ['/guaranteed-rent', '0.6'],
    ...properties.map((p) => [`/${p.slug}`, '0.8'] as [string, string]),
    ...guestAreas.map((a) => [`/serviced-apartments/${a.slug}`, '0.6'] as [string, string]),
    ...landlordAreas.map((a) => [`/guaranteed-rent/${a.slug}`, '0.6'] as [string, string]),
    ...posts.map((p) => [`/blog/${p.slug}`, '0.5', new Date(p.date).toISOString().slice(0, 10)] as [string, string, string]),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${u.map(([p, pr, d]) => `  <url><loc>${SITE}${p}</loc><lastmod>${d || today}</lastmod><priority>${pr}</priority></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
