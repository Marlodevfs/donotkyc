import { platforms, type Platform } from '../lib/platforms';

// Paires les plus recherchées, toujours entre plateformes du même type.
const PAIRS: [string, string][] = [
  ['mexc', 'bybit'], ['mexc', 'bingx'], ['bybit', 'bingx'], ['coinex', 'mexc'], ['nonkyc-io', 'coinex'],
  ['uniswap', 'pancakeswap'], ['dydx', 'hyperliquid'], ['hyperliquid', 'edgex'], ['uniswap', '1inch'],
  ['bisq', 'hodl-hodl'], ['bisq', 'peach-bitcoin'], ['hodl-hodl', 'peach-bitcoin'], ['localcoinswap', 'hodl-hodl'],
  ['trocador', 'stealthex'], ['changelly', 'simpleswap'], ['stealthex', 'changelly'], ['trocador', 'wizardswap'], ['boltz', 'trocador'],
];

export type Pair = { slug: string; a: Platform; b: Platform };
const bySlug = (s: string) => {
  const p = platforms.find((x) => x.slug === s);
  if (!p) throw new Error(`compare: unknown platform ${s}`);
  return p;
};
export const pairs: Pair[] = PAIRS.map(([a, b]) => ({ slug: `${a}-vs-${b}`, a: bySlug(a), b: bySlug(b) }));
export const pairsFor = (slug: string) => pairs.filter((p) => p.a.slug === slug || p.b.slug === slug);
