// Run sam-gov-opportunities-feed on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "postedWithinDays": 3,
  "noticeTypes": [
    "Solicitation",
    "Sources Sought",
    "Presolicitation"
  ],
  "maxItems": 50
};
const run = await client.actor('kamerozkan/sam-gov-opportunities-feed').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
