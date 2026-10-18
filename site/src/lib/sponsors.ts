import data from '../data/sponsors.json';

// Une entrée par sponsor. Pas de montant ici : le dépôt est public, les paiements se suivent ailleurs.
export type Sponsor = {
  id: string;
  name: string;
  slot: string;        // 'home' ou le chemin d'une page thématique, ex. '/swaps'
  url: string;         // lien de destination (rel="sponsored")
  tagline: string;     // une phrase, 140 caractères max
  logo?: string;       // ex. 'sponsors/halden.webp' dans public/
  start: string;       // AAAA-MM-JJ inclus
  end: string;         // AAAA-MM-JJ inclus
};

const today = new Date().toISOString().slice(0, 10);

export const sponsors = data as Sponsor[];
// Le build quotidien (GitHub Actions) fait apparaître et disparaître les tuiles selon ces dates.
export const activeFor = (slot: string): Sponsor | null =>
  sponsors.filter((s) => s.slot === slot && s.start <= today && today <= s.end)
    .sort((a, b) => a.start.localeCompare(b.start))[0] ?? null;
export const activeSponsors = () => sponsors.filter((s) => s.start <= today && today <= s.end);
