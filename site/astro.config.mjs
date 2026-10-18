import { defineConfig } from 'astro/config';

// Le build écrit dans ../docs : GitHub Pages publie ce dossier depuis main.
export default defineConfig({
  site: 'https://www.donotkyc.com',
  outDir: '../docs',
  build: { format: 'file', assets: 'assets' },
  trailingSlash: 'never',
});
