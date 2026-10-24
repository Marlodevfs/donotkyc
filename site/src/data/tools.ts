// Pages d'outils : les fiches viennent de tools.json (faits tirés des sites officiels), classées par une règle unique.
import tools from './tools.json';

export type Identity = 'none' | 'account' | 'id' | 'unstated';
export type Code = 'open' | 'partial' | 'proprietary' | 'unstated';
export interface Tool {
  page: string; slug: string; name: string; url: string; identity: Identity; code: Code; facts: string[];
  affiliate?: string; checked?: string; release?: string; repo?: string; note?: string; section?: string;
}
export interface ToolPage { key: string; group: 'network' | 'crypto' | 'devices'; }

export const TOOL_PAGES: ToolPage[] = [
  { key: 'vpn', group: 'network' }, { key: 'tor', group: 'network' }, { key: 'dns', group: 'network' },
  { key: 'leak-tests', group: 'network' }, { key: 'routers', group: 'network' }, { key: 'anonymous-vps', group: 'network' },
  { key: 'wallets', group: 'crypto' }, { key: 'hardware-wallets', group: 'crypto' }, { key: 'monero-wallets', group: 'crypto' },
  { key: 'coinjoin', group: 'crypto' }, { key: 'privacy-coins', group: 'crypto' }, { key: 'private-payments', group: 'crypto' },
  { key: 'desktop-os', group: 'devices' }, { key: 'mobile-os', group: 'devices' }, { key: 'email', group: 'devices' }, { key: 'email-aliases', group: 'devices' }, { key: 'sms-esim', group: 'devices' }, { key: 'hardening', group: 'devices' },
];

// Règle de tri unique : ce que l'outil demande (rien, un compte, une pièce d'identité, non indiqué), puis code ouvert d'abord, puis A à Z.
const ID = { none: 0, account: 1, id: 2, unstated: 3 };
const CODE = { open: 0, partial: 1, proprietary: 2, unstated: 3 };
export const sorted = (key: string): Tool[] =>
  (tools as Tool[]).filter((t) => t.page === key).sort((a, b) => ID[a.identity] - ID[b.identity] || CODE[a.code] - CODE[b.code] || a.name.localeCompare(b.name));
export const allTools = tools as Tool[];
export const CHECKED = '2026-10-19';

// Page « renforcer sa vie privée » : les fiches sont regroupées par section, dans cet ordre.
export const HARDENING_SECTIONS = ['browsers', 'extensions', 'search', 'passwords', 'two-factor', 'messengers', 'encryption', 'metadata', 'sharing'];
