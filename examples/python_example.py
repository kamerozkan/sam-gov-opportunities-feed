"""Run sam-gov-opportunities-feed on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'postedWithinDays': 3,
 'noticeTypes': ['Solicitation', 'Sources Sought', 'Presolicitation'],
 'maxItems': 50}
run = client.actor("kamerozkan/sam-gov-opportunities-feed").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
