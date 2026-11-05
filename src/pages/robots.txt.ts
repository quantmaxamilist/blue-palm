import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
export const GET: APIRoute = () => new Response(`User-agent: *\nAllow: /\n\n# AI search assistants are welcome\nUser-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: ChatGPT-User\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: Claude-SearchBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain' } });
