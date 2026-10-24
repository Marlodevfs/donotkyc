import { platforms, TYPES, LEVELS, byLeastId } from '../lib/platforms';
import { allTools, TOOL_PAGES } from '../data/tools';
import dict from '../i18n/en.json';

// Version complète de llms.txt : tous les faits des fiches en texte brut, générés depuis les mêmes données que le site.
const SITE = 'https://www.donotkyc.com';
const CUSTODY = dict.platform.custody_v as Record<string, string>;
const ASKS = { none: 'nothing', account: 'an account', id: 'ID', unstated: 'not stated' } as const;
const CODE = { open: 'open source', partial: 'partly open source', proprietary: 'closed source', unstated: 'not stated' } as const;
const clean = (u: string) => { const x = new URL(u); return x.origin + (x.pathname === '/' ? '' : x.pathname); };

const platformText = [...platforms].sort(byLeastId).map((p) => [
  `### ${p.name}`,
  `- Type: ${TYPES[p.type]}`,
  `- Identity asked: ${LEVELS[p.kyc_level].label}. ${p.kyc_summary}.`,
  p.kyc_tier && p.kyc_tier !== 'None' ? `- Listed policy: ${p.kyc_tier}.` : '',
  `- Source for the identity level: ${p.kyc_source ?? 'none linked yet'}`,
  `- Available in: ${p.supported_countries}.${p.blocked ? ` Not available in: ${p.blocked}.` : ''}`,
  `- Cash, card or bank payment: ${p.fiat_deposit ? 'yes' : 'no'}. Payment methods: ${p.payment_methods.join(', ')}.`,
  `- Fees: ${p.fees}`,
  `- Custody: ${CUSTODY[p.custody]}`,
  p.status !== 'active' || p.status_note ? `- Status: ${p.status === 'active' ? 'active' : 'under review'}${p.status_note ? `. ${p.status_note}` : ''}` : '',
  `- Official site: ${clean(p.url)}`,
  `- Our page: ${SITE}/p/${p.slug}`,
].filter(Boolean).join('\n')).join('\n\n');

const toolText = TOOL_PAGES.map((pg) => {
  const items = allTools.filter((t) => t.page === pg.key);
  return `### ${pg.key}\n` + items.map((t) => [
    `#### ${t.name}`,
    `- Asks of you: ${ASKS[t.identity]}. Code: ${CODE[t.code]}.`,
    ...t.facts.map((f) => `- ${f}`),
    `- Maker's site: ${clean(t.url)}`,
  ].join('\n')).join('\n\n');
}).join('\n\n');

export function GET() {
  const text = `# DoNotKYC: full data

> Every platform and tool listed on ${SITE}, as plain text. Facts come from each maker's own terms, help pages or site. We do not test platforms with real money, so treat every entry as a starting point and confirm it with the platform. A shorter index is at ${SITE}/llms.txt. The same platform data as JSON is at ${SITE}/nokyc_directory.json.

Identity levels: None = no ID and no account details; Light = no ID under a stated limit, or only an email or phone number; Tiered = ID required above a threshold. Platforms are sorted by how much identity they ask for. Affiliate links and sponsorship never change the order.

## Platforms (${platforms.length})

${platformText}

## Privacy tools (${allTools.length})

${toolText}
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
