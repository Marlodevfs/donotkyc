import { platforms, TYPES, byLeastId } from '../lib/platforms';
import { LANDINGS } from '../data/landings';
import { pairs } from '../data/compare';
import { TOOL_PAGES } from '../data/tools';
import { LOCALES } from '../i18n';

// Résumé lisible par les IA (convention llms.txt), généré depuis les mêmes données que le site.
const SITE = 'https://www.donotkyc.com';
const LEVEL = { none: 'None (no ID, no account details)', light: 'Light (no ID under a limit, or only email/phone)', tiered: 'Tiered (ID above a threshold)' };

export function GET() {
  const list = [...platforms].sort(byLeastId)
    .map((p) => `- [${p.name}](${SITE}/p/${p.slug}): ${TYPES[p.type]}. Identity: ${LEVEL[p.kyc_level]}. ${p.kyc_summary}. ${p.fiat_deposit ? 'Card or bank accepted' : 'Crypto only'}. Fees: ${p.fees}.${p.blocked ? ` Not available in: ${p.blocked}.` : ''}${p.status === 'check' ? ` UNDER REVIEW: ${p.status_note}` : ''}`)
    .join('\n');
  const text = `# DoNotKYC

> Independent directory of ${platforms.length} crypto exchanges, instant swaps, P2P markets, Bitcoin ATMs and bridges that let people trade without sending an ID document. Each platform is sorted by how much identity it asks for. Rankings are not for sale; affiliate links are disclosed.

Identity levels: None = no ID and no account details; Light = no ID under a stated limit, or only an email or phone number; Tiered = ID required above a threshold.

## Key pages
- [Directory](${SITE}/): every platform, filterable by type, identity level, card or bank deposit and US availability
- [How we check platforms](${SITE}/methodology): identity levels and where the facts come from
- [About and contact](${SITE}/about): who runs the project, how it is funded, how to reach us
- [Compare platforms](${SITE}/compare): ${pairs.length} side-by-side comparisons
- [Changelog](${SITE}/changelog): dated changes to listings
- [Open data](${SITE}/nokyc_directory.json): the full directory as JSON

## Topic pages
${LANDINGS.map((l) => `- ${SITE}${l.path}`).join('\n')}

## Tool pages
Each entry quotes the maker's own site and states what the tool asks of you and whether its code is open. Sorted by one rule, never by affiliation or sponsorship.
${TOOL_PAGES.map((p) => `- ${SITE}/tools/${p.key}`).join('\n')}

## Platforms
${list}

## Languages
Available in: ${LOCALES.join(', ')}. Localized URLs use a prefix, for example ${SITE}/fr/p/bisq.
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
