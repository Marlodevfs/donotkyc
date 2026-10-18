import { platforms } from '../lib/platforms';

// API publique (format documenté sur /api-docs), générée depuis la même source que le site.
const KEYS: Record<string, string> = {
  CEX: 'centralized_exchanges', DEX: 'decentralized_exchanges', Bridge: 'bridges',
  ATM: 'atms', P2P: 'p2p_marketplaces', 'Instant Swap': 'instant_swaps',
};

export function GET() {
  const out: Record<string, object[]> = Object.fromEntries(Object.values(KEYS).map((k) => [k, []]));
  for (const p of platforms) {
    out[KEYS[p.type]].push({
      name: p.name, type: p.type, url: p.url, kyc_tier: p.kyc_tier, kyc_level: p.kyc_level,
      supported_countries: p.supported_countries, fiat_deposit: p.fiat_deposit, volume_24h: p.volume_24h,
      fees: p.fees, reputation: p.reputation, cryptocurrencies: p.cryptocurrencies, features: p.features,
    });
  }
  return new Response(JSON.stringify(out, null, 2) + '\n', { headers: { 'Content-Type': 'application/json' } });
}
