// Dictionnaires : en.json (interface) + en.pages.json (pages longues), même structure par langue.
// Une clé absente dans une langue retombe sur l'anglais.
const files = import.meta.glob('./*.json', { eager: true, import: 'default' }) as Record<string, any>;

const ALL = ['en', 'fr', 'es', 'de', 'pt', 'it', 'ru', 'tr', 'zh'] as const;
export type Lang = (typeof ALL)[number];
// Une langue n'est publiée que si son fichier de traduction existe (pas de copie anglaise sous /xx/).
export const LOCALES = ALL.filter((l) => l === 'en' || files[`./${l}.json`]) as Lang[];
export const OTHER_LOCALES = LOCALES.filter((l) => l !== 'en');
export const HREFLANG: Record<Lang, string> = { en: 'en', fr: 'fr', es: 'es', de: 'de', pt: 'pt', it: 'it', ru: 'ru', tr: 'tr', zh: 'zh-Hans' };

const isObj = (v: unknown): v is Record<string, any> => !!v && typeof v === 'object' && !Array.isArray(v);
const merge = (a: any, b: any): any => {
  if (!isObj(a) || !isObj(b)) return b ?? a;
  const out: Record<string, any> = { ...a };
  for (const k of Object.keys(b)) out[k] = merge(a[k], b[k]);
  return out;
};
const cache = new Map<string, any>();
export const dict = (lang: Lang) => {
  if (!cache.has(lang)) {
    let d = merge(files['./en.json'], files['./en.pages.json']);
    if (lang !== 'en') d = merge(d, merge(files[`./${lang}.json`] ?? {}, files[`./${lang}.pages.json`] ?? {}));
    cache.set(lang, d);
  }
  return cache.get(lang);
};

export const useT = (lang: Lang) => {
  const d = dict(lang);
  return (key: string, vars: Record<string, string | number> = {}): any => {
    const v = key.split('.').reduce((o: any, k) => o?.[k], d);
    return typeof v === 'string' ? v.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`)) : v;
  };
};

// Chemin localisé : '/' -> '/fr', '/swaps' -> '/fr/swaps'
export const lp = (lang: Lang, path: string) => (lang === 'en' ? path : path === '/' ? `/${lang}` : `/${lang}${path}`);
// Traduit une valeur issue des données (résumé KYC, pays bloqués)
export const tx = (lang: Lang, s: string | null) => (s ? dict(lang).data?.[s] ?? s : s);
export const langName = (lang: Lang) => dict(lang).meta.lang_name as string;
