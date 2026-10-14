# SAM.gov Contract Opportunities & DLA Solicitations Feed

SAM.gov contract opportunities feed from the official public daily extract: DLA solicitations, sources sought, small business set-asides and award notices, filtered by NAICS, agency, state and keyword. No portal scraping, no API key.

**[Run it on Apify Store](https://apify.com/kamerozkan/sam-gov-opportunities-feed)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/sam-gov-opportunities-feed); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/sam-gov-opportunities-feed).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/sam-gov-opportunities-feed) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "postedWithinDays": 3,
  "noticeTypes": [
    "Solicitation",
    "Sources Sought",
    "Presolicitation"
  ],
  "maxItems": 50
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "noticeId": "f50d635e4b9d4404916c47df2357fc66",
    "title": "Admin Management, Data Management, Software Development (Quality Assurance Inspection Software for EMS)",
    "solicitationNumber": "36C26026Q1017",
    "noticeType": "Combined Synopsis/Solicitation",
    "baseType": "Combined Synopsis/Solicitation",
    "postedDate": "2026-10-13T18:26:14",
    "responseDeadline": "2026-11-03T17:00:00-08:00",
    "archiveDate": "2026-11-18",
    "active": true,
    "department": "VETERANS AFFAIRS, DEPARTMENT OF",
    "subTier": "VETERANS AFFAIRS, DEPARTMENT OF",
    "office": "260-NETWORK CONTRACT OFFICE 20 (36C260)",
    "officeCode": "36C260",
    "naicsCode": "541519",
    "pscCode": "H979",
    "setAsideCode": "SDVOSBC",
    "setAside": "Service-Disabled Veteran-Owned Small Business (SDVOSB) Set-Aside (FAR 19.14)",
    "popCity": null,
    "popState": "OR",
    "popZip": "97239",
    "popCountry": "USA",
    "awardNumber": null,
    "awardDate": null,
    "awardAmount": null,
    "awardee": null,
    "primaryContactName": "Tyrone Whalen, Contract Specialist",
    "primaryContactTitle": null,
    "primaryContactEmail": "contact@example.com",
    "primaryContactPhone": null,
    "secondaryContactName": "Danielle Carrico",
    "secondaryContactEmail": "contact@example.com",
    "secondaryContactPhone": null,
    "officeCity": "VANCOUVER",
    "officeState": "WA",
    "officeZip": "98661",
    "samUrl": "https://sam.gov/workspace/contract/opp/f50d635e4b9d4404916c47df2357fc66/view",
    "additionalInfoLink": null,
    "description": "Amendment 0001- Answer Questions submitted from vendors by questions deadline of 10/05/2026 and adding attachment 1 revised RFQ 36C26026Q1017 The is for the acquisition of admin management, data management, software development (Quality Assurance Inspection Software for EMS)",
    "extractUpdatedAt": "Wed, 14 Oct 2026 03:30:44 GMT",
    "scrapedAt": "2026-10-14T15:05:32Z"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/sam-gov-opportunities-feed/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
