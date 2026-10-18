// SVG Lucide inlinés au build : aucune requête externe, aucun JS.
const svgs = import.meta.glob('/node_modules/lucide-static/icons/*.svg', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
export function iconSvg(name: string, size = 18, cls = '') {
  const raw = svgs[`/node_modules/lucide-static/icons/${name}.svg`];
  if (!raw) throw new Error(`Unknown icon: ${name}`);
  return raw.replace(/<!--[\s\S]*?-->/g, '').replace(/width="24"/, `width="${size}"`).replace(/height="24"/, `height="${size}"`)
    .replace('<svg', `<svg aria-hidden="true" focusable="false" class="ic ${cls}"`);
}
