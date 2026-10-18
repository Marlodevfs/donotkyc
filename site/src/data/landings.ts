import { platforms, byLeastId, type Platform } from '../lib/platforms';

export type Landing = {
  path: string;          // URL sans extension
  group: 'category' | 'alternative' | 'coin' | 'payment';
  filter: (p: Platform) => boolean;
};

const has = (p: Platform, m: string) => (p.payment_methods as string[]).includes(m);
const inSlugs = (...s: string[]) => (p: Platform) => s.includes(p.slug);

export const LANDINGS: Landing[] = [
  // Catégories
  { path: '/exchanges', group: 'category',
    filter: (p) => p.type === 'CEX' },
  { path: '/dex', group: 'category',
    filter: (p) => p.type === 'DEX' },
  { path: '/swaps', group: 'category',
    filter: (p) => p.type === 'Instant Swap' },
  { path: '/p2p', group: 'category',
    filter: (p) => p.type === 'P2P' || p.slug === 'bisq' },
  { path: '/atms', group: 'category',
    filter: (p) => p.type === 'ATM' },
  { path: '/bridges', group: 'category',
    filter: (p) => p.type === 'Bridge' },

  // Alternatives aux plateformes qui exigent une pièce d'identité
  { path: '/alternatives/binance', group: 'alternative',
    filter: (p) => (p.type === 'CEX' || p.type === 'DEX') && p.kyc_level !== 'tiered' },
  { path: '/alternatives/coinbase', group: 'alternative',
    filter: (p) => p.fiat_deposit && p.kyc_level !== 'tiered' },
  { path: '/alternatives/kraken', group: 'alternative',
    filter: (p) => (p.type === 'CEX' || p.type === 'DEX') && p.kyc_level !== 'tiered' },
  { path: '/alternatives/kucoin', group: 'alternative',
    filter: (p) => ['CEX', 'DEX', 'Instant Swap'].includes(p.type) && p.kyc_level === 'none' },
  { path: '/alternatives/revolut', group: 'alternative',
    filter: (p) => p.fiat_deposit && p.kyc_level !== 'tiered' },
  { path: '/alternatives/paypal', group: 'alternative',
    filter: (p) => has(p, 'card') || (p.fiat_deposit && p.type === 'Instant Swap') },
  { path: '/alternatives/crypto-com', group: 'alternative',
    filter: (p) => (p.type === 'CEX' || p.fiat_deposit) && p.kyc_level !== 'tiered' },
  { path: '/alternatives/robinhood', group: 'alternative',
    filter: (p) => (p.type === 'P2P' || p.type === 'ATM' || p.slug === 'bisq' || p.slug === 'boltz') && p.kyc_level !== 'tiered' },

  // Coins
  { path: '/buy/bitcoin', group: 'coin',
    filter: (p) => ['P2P', 'ATM', 'CEX'].includes(p.type) || ['bisq', 'boltz'].includes(p.slug) },
  { path: '/buy/monero', group: 'coin',
    filter: inSlugs('bisq', 'trocador', 'stealthex', 'wizardswap') },

  // Moyens de paiement
  { path: '/pay/cash', group: 'payment',
    filter: (p) => has(p, 'cash') },
  { path: '/pay/bank-transfer', group: 'payment',
    filter: (p) => has(p, 'bank') },
  { path: '/pay/card', group: 'payment',
    filter: (p) => has(p, 'card') },
];

export const itemsFor = (l: Landing) => platforms.filter(l.filter).sort(byLeastId);

// Textes d'une page thématique dans une langue (i18n/<lang>.pages.json, repli anglais)
import { dict, type Lang } from '../i18n';
export type LandingText = { nav: string; title: string; description: string; h1: string; intro: string[]; faq?: [string, string][] };
export const landingText = (lang: Lang, path: string): LandingText => dict(lang).landings[path];
