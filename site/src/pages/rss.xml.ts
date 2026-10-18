import entries from '../data/changelog.json';

const SITE = 'https://www.donotkyc.com';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const ARTICLES = [
  { date: '2026-10-18', title: 'No-KYC crypto exchanges in 2026: limits, fees and catches', link: '/article1', body: 'Ten exchanges that let you trade without an ID document, with limits, fees and blocked countries.' },
  { date: '2026-10-18', title: 'Why avoid KYC: what happens to your ID after you upload it', link: '/article2', body: 'Exchanges keep your passport scan for years, and those files leak. Real cases and how to limit your exposure.' },
];

export function GET() {
  const items = [
    ...entries.map((e, i) => ({ ...e, link: `/changelog#${i}` })),
    ...ARTICLES,
  ].sort((a, b) => b.date.localeCompare(a.date));
  const body = items.map((i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${SITE}${i.link}</link>
      <guid isPermaLink="false">${SITE}${i.link}-${i.date}</guid>
      <pubDate>${new Date(i.date + 'T12:00:00Z').toUTCString()}</pubDate>
      <description>${esc(i.body)}</description>
    </item>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>DoNotKYC</title>
    <link>${SITE}/</link>
    <description>Changes to the DoNotKYC directory of no-KYC crypto platforms.</description>
    <language>en</language>
${body}
  </channel>
</rss>
`, { headers: { 'Content-Type': 'application/rss+xml' } });
}
