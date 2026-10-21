import { platforms } from '../lib/platforms';

// API publique (format documenté sur /api-docs), générée depuis la même source que le site.
const KEYS: Record<string, string> = {
  CEX: 'centralized_exchanges', DEX: 'decentralized_exchanges', Bridge: 'bridges',
  ATM: 'atms', P2P: 'p2p_marketplaces', 'Instant Swap': 'instant_swaps', Card: 'crypto_cards',
};

export function GET() {
  const out: Record<string, object[]> = Object.fromEntries(Object.values(KEYS).map((k) => [k, []]));
  for (const p of platforms) {
    out[KEYS[p.type]].push({
      name: p.name, type: p.type, url: p.url, kyc_tier: p.kyc_tier, kyc_level: p.kyc_level,
      supported_countries: p.supported_countries, fiat_deposit: p.fiat_deposit,
      fees: p.fees, cryptocurrencies: p.cryptocurrencies, features: p.features,
      custody: p.custody, payment_methods: p.payment_methods, tor: p.tor, open_source: p.open_source,
      status: p.status,
    });
  }
  return new Response(JSON.stringify(out, null, 2) + '\n', { headers: { 'Content-Type': 'application/json' } });
}
