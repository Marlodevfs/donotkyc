import entries from '../data/changelog.json';

const SITE = 'https://www.donotkyc.com';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const ARTICLES = [
  { date: '2025-11-10', title: 'Top No-KYC and Low-KYC Crypto Exchanges in 2025', link: '/article1', body: 'A practical guide to exchanges with low or optional KYC.' },
  { date: '2025-11-10', title: 'Privacy First: Why Avoiding KYC Is Important', link: '/article2', body: 'Why KYC data is a risk and how to protect yourself.' },
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
