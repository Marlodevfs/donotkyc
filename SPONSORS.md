# Sponsored placements

Tiles are driven by `site/src/data/sponsors.json`. A nightly GitHub Action rebuilds the site, so a tile appears on its start date and disappears after its end date with no manual step.

## Add a sponsor

```json
[
  {
    "id": "halden-2026-11",
    "name": "Halden",
    "slot": "home",
    "url": "https://halden.example",
    "tagline": "Air-gapped hardware wallet for Bitcoin and Monero.",
    "logo": "sponsors/halden.webp",
    "start": "2026-11-01",
    "end": "2026-11-30"
  }
]
```

- `slot`: `home` (homepage tile) or the path of a topic page: `/exchanges`, `/swaps`, `/p2p`, `/dex`, `/atms`, `/bridges`, `/buy/bitcoin`, `/buy/monero`, `/pay/cash`, `/pay/bank-transfer`, `/pay/card`.
- One sponsor per slot at a time. If two overlap, the earlier `start` wins.
- `logo` (optional): 96x96 WebP in `site/public/sponsors/`.
- `tagline`: one sentence, factual, no claims we cannot check.

Then commit `site/` and push. GitHub builds the site and publishes it; the nightly rebuild also applies the start and end dates.

## Payments are tracked outside this repo

This repository is public. Never put amounts, invoices, transaction IDs or contact details here.
Keep them in the private payment tracker (BTCPay Server once it runs, a private spreadsheet until then) with, for each payment:
advertiser, contact, slot, start, end, amount, coin, fiat value at the time of payment, invoice reference, transaction ID, review date, notes.

## Before accepting an advertiser
- Search for scam, frozen-funds and exit reports.
- Check the service is legal where it is offered, and what it claims about KYC.
- Agree in writing on the removal conditions (see /advertise).
