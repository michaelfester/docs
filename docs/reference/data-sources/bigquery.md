---
title: BigQuery
description: Bring your BigQuery data into Glide
video: https://youtu.be/AGRPXQ2PPSU
slug: bigquery
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

[Big Query](https://cloud.google.com/bigquery) is Google Cloud's data warehouse tool that allows businesses to run analytics across a tremendous amount of data using SQL (Structured Query Language).

{% callout title="" %}
BigQuery integration is only available on Business and Enterprise plans. Need to upgrade? Read more about our plans and pricing [here](https://www.glideapps.com/pricing).
{% /callout %}

## Getting Set up with BigQuery

1. Before using BigQuery with Glide, [you'll need to set up a BigQuery account.](https://cloud.google.com/bigquery)
2. Make sure your first column in your data set is a unique string or number column named “id” so Glide can identify the rows.
3. New to SQL queries? [Check out Google's documentation to get started](https://cloud.google.com/bigquery/docs/reference/standard-sql/introduction).
4. Make sure cookies are left on in your personal Glide settings.

## Syncing Data from BigQuery

- From the Data Editor, navigate to the Tables menu and **select plus** to add a new data source.

{% figure src="/docs/reference/integrations/big-query/adding-big-query-to-a-project.png" caption="Adding BigQuery to a project" /%}

- Select **BigQuery** and sign in to the relevant Google account.
- **Search or browse your datasets** and select which one you want to sync with Glide.

{% figure src="/docs/reference/integrations/big-query/choosing-the-bq-project.png" caption="Choosing the BigQuery project" /%}

- In the query screen, run whatever queries you like to create the dataset you want to pull into Glide.

{% figure src="/docs/reference/integrations/big-query/running-the-query.png" caption="Running the query" /%}

- When you're ready, you can name the query and save it as a table.

{% figure src="/docs/reference/integrations/big-query/naming-the-query.png" caption="Naming the query" /%}

You can now work with this data for your Glide project.

## Editing Your Synced Table

{% callout title="" %}
Unlike our other data integrations, changes you make to BigQuery data in Glide do not write back to your BigQuery data warehouse. Glide uses BigQuery as a read-only data source.
{% /callout %}

- To change your table, select “edit query” in the upper right corner.

{% figure src="/docs/reference/integrations/big-query/editing-the-query.png" caption="Editing a query" /%}

- Make any changes to the query you'd like.
- Preview your data, then save it to update your table.

## Limitations of BigQuery

There are some features in Glide that aren't compatible with a table generated from BigQuery. Those features are:

- Row owners
- Protected columns
- Rollups and lookups into relations
- Grouping

In computed columns, filtering, sorted, and search is not supported.

The following components will load at most 5000 rows:

- Chart
- Radial Chart
- Choice
- Kanban
- Calendar

## BigQuery FAQ

- I don't see the option to add BigQuery in tables.
  You might need a business plan! [You can read more about our plans and pricing here.](https://www.glideapps.com/pricing)
- I don't see BigQuery on the “select a source” page for my new project.
  To sync your BigQuery data for a project, first create an empty project with Glide tables. Then, you can sync the data source using the steps above.
- My sign in screen for BigQuery won't load.
  Please make sure you have cookies turned on in your Glide settings, and that you aren't using a web browser or tool that blocks third party cookies.
- I'm getting a “There was an issue running your query” error.
  Your table will need to have a first column with a unique stream or column number labeled “id.”
- I need help learning BigQuery.
  BigQuery has an extensive [documentation library](https://cloud.google.com/bigquery/docs) that can help.
