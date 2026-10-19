import { platforms } from '../../../lib/platforms';

// API versionnée : liste plate, une entrée par plateforme (sans lien d'affiliation).
export function GET() {
  const list = platforms.map(({ affiliate_link, logo, ...p }) => ({ ...p, page: `https://www.donotkyc.com/p/${p.slug}` }));
  return new Response(JSON.stringify({ version: 1, count: list.length, platforms: list }, null, 2) + '\n', {
    headers: { 'Content-Type': 'application/json' },
  });
}
