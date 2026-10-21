import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Après le build : tout lien vers un autre site s'ouvre dans un nouvel onglet (target="_blank" + rel="noopener").
const ownHost = 'www.donotkyc.com';
const externalLinksInNewTab = () => ({
  name: 'external-links-new-tab',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : e.name.endsWith('.html') ? [join(d, e.name)] : []));
      for (const file of walk(fileURLToPath(dir))) {
        const html = readFileSync(file, 'utf8');
        const out = html.replace(/<a\s[^>]*>/g, (tag) => {
          const href = tag.match(/\shref="(https?:\/\/[^"]+)"/);
          if (!href || new URL(href[1].replaceAll('&amp;', '&')).host === ownHost || /\starget=/.test(tag)) return tag;
          const rel = tag.match(/\srel="([^"]*)"/);
          if (!rel) return tag.replace(/>$/, ' target="_blank" rel="noopener">');
          const r = rel[1].includes('noopener') ? rel[1] : `${rel[1]} noopener`;
          return tag.replace(rel[0], ` rel="${r}"`).replace(/>$/, ' target="_blank">');
        });
        if (out !== html) writeFileSync(file, out);
      }
    },
  },
});

// Le build écrit dans ../docs : GitHub Pages publie ce dossier depuis main.
export default defineConfig({
  site: 'https://www.donotkyc.com',
  outDir: '../docs',
  build: { format: 'file', assets: 'assets' },
  trailingSlash: 'never',
  integrations: [externalLinksInNewTab()],
});
