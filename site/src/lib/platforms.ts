import data from '../data/platforms.json';

export type Level = 'none' | 'light' | 'tiered';
export type Platform = (typeof data)[number] & { kyc_level: Level };

export const platforms = data as Platform[];

export const LEVELS: Record<Level, { label: string; icon: string; rank: number }> = {
  none: { label: 'None', icon: 'shield-check', rank: 0 },
  light: { label: 'Light', icon: 'shield-half', rank: 1 },
  tiered: { label: 'Tiered', icon: 'shield-alert', rank: 2 },
};

export const TYPES: Record<string, string> = {
  CEX: 'Exchange',
  DEX: 'Decentralised exchange',
  'Instant Swap': 'Instant swap',
  P2P: 'P2P market',
  Bridge: 'Bridge',
  ATM: 'Bitcoin ATM',
};

// Catégories de l'accueil : ATM et bridges partagent une tuile
export const CATEGORIES = [
  { key: 'all', label: 'All platforms', icon: 'layout-grid', types: [] as string[] },
  { key: 'cex', label: 'Exchanges', icon: 'landmark', types: ['CEX'] },
  { key: 'dex', label: 'Decentralised', icon: 'network', types: ['DEX'] },
  { key: 'swap', label: 'Instant swaps', icon: 'repeat', types: ['Instant Swap'] },
  { key: 'p2p', label: 'P2P markets', icon: 'users', types: ['P2P'] },
  { key: 'atm', label: 'ATMs and bridges', icon: 'banknote', types: ['ATM', 'Bridge'] },
];

export const catOf = (p: Platform) => CATEGORIES.find((c) => c.types.includes(p.type))!.key;

export const byLeastId = (a: Platform, b: Platform) =>
  LEVELS[a.kyc_level].rank - LEVELS[b.kyc_level].rank || a.name.localeCompare(b.name);

export const visitUrl = (p: Platform) => p.affiliate_link ?? p.url;
export const logoUrl = (p: Platform) => (p.logo ? '/' + p.logo.replace(/^\//, '') : null);

const ISSUES = 'https://github.com/Marlodevfs/donotkyc/issues/new';
export const SUBMIT_URL = `${ISSUES}?template=submit-platform.yml`;
export const reportUrl = (name?: string) =>
  `${ISSUES}?template=report-change.yml${name ? '&title=' + encodeURIComponent('Listing update: ' + name) : ''}`;

export type Test = { date: string; amount: string; method: string; steps: string; kyc_asked: 'none' | 'email' | 'phone' | 'id'; result: string };

export const CUSTODY: Record<string, string> = { self: 'Your wallet', custodial: 'Platform holds funds', none: 'Not applicable (cash)', unstated: 'Not stated' };
export const PAYMENTS: Record<string, string> = { crypto: 'Crypto', bank: 'Bank transfer', card: 'Card', cash: 'Cash', 'gift-card': 'Gift cards', fiat: 'Card or bank' };
export const KYC_ASKED: Record<string, string> = { none: 'Nothing', email: 'Email only', phone: 'Phone number', id: 'ID document' };

// Le test le plus récent, s'il existe : c'est lui qui date la fiche.
export const lastTest = (p: Platform): Test | null =>
  ((p.tests ?? []) as Test[]).slice().sort((a, b) => b.date.localeCompare(a.date))[0] ?? null;
export const fmtDate = (iso: string) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export const CATEGORY_PATH: Record<string, string> = { CEX: '/exchanges', DEX: '/dex', 'Instant Swap': '/swaps', P2P: '/p2p', ATM: '/atms', Bridge: '/bridges' };
