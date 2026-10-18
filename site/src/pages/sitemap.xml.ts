import { platforms } from '../lib/platforms';
import { LANDINGS } from '../data/landings';
import { LOCALES, lp } from '../i18n';

const SITE = 'https://www.donotkyc.com';
const LOCALIZED = ['/', '/submit', '/methodology', '/advertise'];
const EN_ONLY = ['/blog', '/article1', '/article2', '/vpn-affiliation', '/privacy', '/security', '/api-docs'];

export function GET() {
  const paths = [...LOCALIZED, ...LANDINGS.map((l) => l.path), ...platforms.map((p) => `/p/${p.slug}`)];
  const urls = [...LOCALES.flatMap((l) => paths.map((p) => lp(l, p))), ...EN_ONLY];
  const body = urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } });
}
