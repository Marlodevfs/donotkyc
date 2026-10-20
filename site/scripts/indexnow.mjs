// Après le build : compare chaque page du sitemap avec le manifeste du site en ligne, écrit le nouveau manifeste dans docs/
// et la liste des pages modifiées dans ../changed-urls.json. Le workflow envoie cette liste à IndexNow (Bing, Yandex, Seznam, Naver).
// Usage : node scripts/indexnow.mjs   (depuis site/, après npm run build)
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const SITE = 'https://www.donotkyc.com';
const DOCS = fileURLToPath(new URL('../../docs/', import.meta.url));
const OUT = fileURLToPath(new URL('../../changed-urls.json', import.meta.url));

const urls = [...readFileSync(DOCS + 'sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const fileOf = (u) => {
  const p = u.slice(SITE.length).replace(/\/$/, '');
  for (const f of [p === '' ? 'index.html' : p + '.html', p + '/index.html']) if (existsSync(DOCS + f)) return DOCS + f;
  return null;
};
const manifest = {};
for (const u of urls) { const f = fileOf(u); if (f) manifest[u] = createHash('sha1').update(readFileSync(f)).digest('hex'); }

let previous = null;
try { const r = await fetch(SITE + '/indexnow-manifest.json', { signal: AbortSignal.timeout(20000) }); if (r.ok) previous = await r.json(); } catch {}
const changed = Object.keys(manifest).filter((u) => !previous || previous[u] !== manifest[u]);

writeFileSync(DOCS + 'indexnow-manifest.json', JSON.stringify(manifest));
writeFileSync(OUT, JSON.stringify(changed));
console.log(`IndexNow: ${changed.length} changed page(s) of ${Object.keys(manifest).length}${previous ? '' : ' (no previous manifest: all pages)'}`);
