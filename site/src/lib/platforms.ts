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
  DEX: 'Decentralized exchange',
  'Instant Swap': 'Instant swap',
  P2P: 'P2P market',
  Bridge: 'Bridge',
  ATM: 'Bitcoin ATM',
  Card: 'Crypto card',
};

// Catégories de l'accueil : swaps + bridges, P2P + ATM partagent une tuile
export const CATEGORIES = [
  { key: 'all', label: 'All platforms', icon: 'layout-grid', types: [] as string[] },
  { key: 'cex', label: 'Exchanges', icon: 'landmark', types: ['CEX'] },
  { key: 'dex', label: 'Decentralized', icon: 'network', types: ['DEX'] },
  { key: 'swap', label: 'Swaps and bridges', icon: 'repeat', types: ['Instant Swap', 'Bridge'] },
  { key: 'cash', label: 'Cash and P2P', icon: 'banknote', types: ['P2P', 'ATM'] },
  { key: 'card', label: 'Crypto cards', icon: 'credit-card', types: ['Card'] },
];

export const catOf = (p: Platform) => CATEGORIES.find((c) => c.types.includes(p.type))?.key ?? 'all';

export const byLeastId = (a: Platform, b: Platform) =>
  LEVELS[a.kyc_level].rank - LEVELS[b.kyc_level].rank || a.name.localeCompare(b.name);

// Vrai si la fiche couvre les États-Unis. Une liste nommée de pays (« US only », « Europe, Switzerland »)
// décide seule ; sinon (« Global… », « 200+ regions »), le champ « non disponible » dit si les États-Unis en sont exclus.
export const worksInUS = (p: Platform) => {
  const s = p.supported_countries ?? '';
  if (!/^(Global|Selected|Depends|\d)/.test(s)) return /\bUS\b/.test(s);
  return !/\bUS\b/.test(p.blocked ?? '');
};

export const visitUrl = (p: Platform) => p.affiliate_link ?? p.url;
export const logoUrl = (p: Platform) => (p.logo ? '/' + p.logo.replace(/^\//, '') : null);

const ISSUES = 'https://github.com/Marlodevfs/donotkyc/issues/new';
export const SUBMIT_URL = `${ISSUES}?template=submit-platform.yml`;
export const reportUrl = (name?: string) =>
  `${ISSUES}?template=report-change.yml${name ? '&title=' + encodeURIComponent('Listing update: ' + name) : ''}`;




export const CATEGORY_PATH: Record<string, string> = { CEX: '/exchanges', DEX: '/dex', 'Instant Swap': '/swaps', P2P: '/p2p', ATM: '/atms', Bridge: '/bridges', Card: '/cards' };
