import { platforms } from '../lib/platforms';
import { LANDINGS } from '../data/landings';

const SITE = 'https://www.donotkyc.com';
const PAGES = ['/', '/blog', '/article1', '/article2', '/vpn-affiliation', '/privacy', '/security', '/api-docs', '/submit', '/methodology', '/advertise'];

export function GET() {
  const urls = [...PAGES, ...LANDINGS.map((l) => l.path), ...platforms.map((p) => `/p/${p.slug}`)];
  const body = urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } });
}
