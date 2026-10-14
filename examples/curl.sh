#!/usr/bin/env bash
# Run sam-gov-opportunities-feed synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~sam-gov-opportunities-feed/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"postedWithinDays": 3, "noticeTypes": ["Solicitation", "Sources Sought", "Presolicitation"], "maxItems": 50}'
