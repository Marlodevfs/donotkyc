// Contrôle hebdomadaire : sites des plateformes et des outils, pages source des fiches, fraîcheur des faits des outils. Écrit un rapport Markdown sur stdout.
// Usage : node scripts/check-links.mjs > report.md   (code de sortie 0 dans tous les cas)
import { readFileSync } from 'node:fs';

const platforms = JSON.parse(readFileSync(new URL('../src/data/platforms.json', import.meta.url)));
const tools = JSON.parse(readFileSync(new URL('../src/data/tools.json', import.meta.url)));
const checkedOn = /CHECKED = '([\d-]+)'/.exec(readFileSync(new URL('../src/data/tools.ts', import.meta.url), 'utf8'))?.[1];
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36';
const host = (u) => new URL(u).hostname.replace(/^www\./, '');
const today = new Date();

async function check(p) {
  try {
    const res = await fetch(p.url, { redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) });
    const moved = host(res.url) !== host(p.url) && !host(res.url).endsWith('.' + host(p.url));
    // 401/403/429/451/503 : très souvent une protection anti-robot, pas une panne
    const bot = [401, 403, 429, 451, 503].includes(res.status);
    return { p, status: res.status, final: res.url, moved, problem: moved || (!res.ok && !bot), bot };
  } catch (e) {
    return { p, status: e.name === 'TimeoutError' ? 'timeout' : 'error', final: '', moved: false, problem: true, bot: false, err: e.message };
  }
}

const results = [];
const all = [
  ...platforms.map((p) => ({ name: p.name, url: p.url })),
  ...platforms.filter((p) => p.kyc_source).map((p) => ({ name: `${p.name} (source page)`, url: p.kyc_source })),
  ...tools.map((t) => ({ name: `${t.name} (${t.page})`, url: t.url })),
];
for (let i = 0; i < all.length; i += 8) results.push(...(await Promise.all(all.slice(i, i + 8).map(check))));

const age = (d) => Math.floor((today - new Date(d + 'T12:00:00Z')) / 864e5);
const problems = results.filter((r) => r.problem);
const bots = results.filter((r) => r.bot && !r.moved);

const out = [];
out.push(`Automatic check of ${today.toISOString().slice(0, 10)} (weekly, see .github/workflows/link-check.yml).`, '');
out.push(`## Sites to check by hand: ${problems.length}`, '');
const TOOL_FACTS_DAYS = 120;
const toolAge = checkedOn ? age(checkedOn) : null;
if (problems.length) {
  out.push('| Name | Listed URL | Result |', '|---|---|---|');
  for (const r of problems) out.push(`| ${r.p.name} | ${r.p.url} | ${r.moved ? `now redirects to ${r.final}` : `HTTP ${r.status}${r.err ? ` (${r.err.slice(0, 60)})` : ''}`} |`);
} else out.push('Every listed site answered normally.');
out.push('', `## Blocked by anti-bot protection (probably fine): ${bots.length}`, '', bots.map((r) => `${r.p.name} (${r.status})`).join(', ') || 'None.');
out.push('', `## Tool facts: last checked ${checkedOn ?? 'unknown'}${toolAge !== null && toolAge > TOOL_FACTS_DAYS ? ` (${toolAge} days ago: re-read the tools' own sites)` : ''}`);
console.log(out.join('\n'));
