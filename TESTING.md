# Test protocol

How to test a platform with real money and record it so the site shows it.

## Before you start
- Use a fresh browser profile and a VPN. Prepare no documents.
- Pick a small amount you can afford to lose (equivalent of 20 to 50 EUR).
- Take screenshots of every screen that asks for information. Keep them privately (they protect us if a platform disputes a listing). Never publish them with personal data.

## Steps
1. **Sign up.** Note every field requested (email, phone, name, ID, selfie).
2. **Deposit** with the payment method the listing describes (crypto, bank, card, cash).
3. **Trade or swap once** on a main pair. Note the fee shown on the receipt.
4. **Withdraw** to your own wallet. Note any limit and when an ID check appears.
5. **Record** the result in `site/src/data/platforms.json` (see below), build and push.

## Recording a test

Add an entry to the platform's `tests` array:

```json
"tests": [
  {
    "date": "2026-10-20",
    "amount": "0.001 BTC",
    "method": "SEPA bank transfer",
    "steps": "Deposit, trade and withdrawal",
    "kyc_asked": "none",
    "result": "No ID asked. Withdrawal arrived in 40 minutes."
  }
]
```

- `kyc_asked`: `none`, `email`, `phone` or `id`.
- If the test changes the facts, also update `kyc_level` (`none`, `light`, `tiered`), `kyc_summary`, `fees`, `blocked`, `payment_methods`.
- Fill `kyc_source` with the link to the platform's page that states its KYC policy.
- If the platform closed or looks like a scam, set `status` to `closed` or `check` and explain in `status_note`.

The platform page then shows "Tested <date>" and the test history automatically. Listings tested more than 90 days ago will be flagged for a new test.

Then: `cd site && npm run build`, commit `site/` and `docs/`, push to `main`.
