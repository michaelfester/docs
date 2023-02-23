---
title: Big Tables
description: Scale your app with up to 10 million rows of data.
video: https://youtu.be/rmBFgHE2M1Q
slug: big-tables
---

Built for the most demanding workflows, **Big Tables** is an enterprise-grade database hosted directly in Glide. While a normal [Glide Table](https://www.glideapps.com/docs/reference/data-sources/glide-tables) has a limit of 25,000 rows, Big Tables can support up to 10 million rows. With Big Tables, your app can scale as your data grows.

{% callout title="" %}
Big Tables are only available on Business and Enterprise plans. Need to upgrade? [Read more about our plans and pricing here](https://www.glideapps.com/pricing).
{% /callout %}

You can also use an API to add rows, set columns, or delete rows from a Big Table.

## Creating a Big Table

From an already existing project, select the plus in the tables menu and choose “Big Empty Table.”

{% figure src="/docs/reference/data-sources/big-tables/adding-a-big-table-to-a-project.png" caption="Adding a Big Table to a project" /%}

The data editor will create an empty table with a single cell. From here, you can add more rows and columns and configure them as you need for your project.

## Import/Export Big Table data

### Import to a New Big Table

To import data into a new Big Table:

- Right-click the data source from the “tables” menu.
- Select “import.”
- Choose which file to upload for import.

{% figure src="/docs/reference/data-sources/big-tables/importing-data-to-big-table.png" caption="Importing data to Big Tables" /%}

{% callout title="" %}
Glide data imports support .xlsx, .csv, or .ods files.
{% /callout %}

### Import to an Existing Big Table

To import data into an existing Big Table:

- First, make sure the column names on your existing spreadsheet match the column names on the Big Table you want to import to. This helps Glide know where to put your imported data!

- Right click the data source from the “tables” menu.

- Select “import.”

- Choose which file to upload for import.

When you import data into an existing Big Table, Glide will add your rows to the existing table — it will not modify or delete what's already there.

### Exporting from a Big Table

To export data out of a Big Table:

- Right click the data source from the “tables” menu

- select “export”

{% figure src="/docs/reference/data-sources/big-tables/exporting-data-from-big-table.png" caption="Exporting data from big table" /%}

- Choose which columns to export, or export all.

{% figure src="/docs/reference/data-sources/big-tables/choosing-the-date-needs-to-be-exorted.png" caption="Choosing the data to be exported" /%}

- You will receive an email with your Big Table export as a csv.

## Big Tables API

To use an API to add rows, set columns, get all rows, or delete rows from a Big Table:

- Right click on the Big Table you want to connect with.
- Select “Show API.”

{% figure src="/docs/reference/data-sources/big-tables/using-api-with-big-tables.png" caption="Choosing the Big Table for API configuration" /%}

- Select the copy icon to copy the API instructions.

{% figure src="/docs/reference/data-sources/big-tables/copying-the-api-instructions.png" caption="Copying the API instructions" /%}

## Limitations of Big Tables

There are some features in Glide that aren't compatible with a Big Table. We're working to reduce these limitations! For now, those unavailable features are:

- Rollups and lookups into relations
- User-specific columns
- Filtering, sorted, and search in computed columns
- Grouping in components
- Big Tables do not update in real time. A refresh is necessary to update.
- A Big Table cannot be the User Profile data source

## Big Table FAQ

### Can I use Big Tables in my existing projects?

Yes!

### I don't have the option to start with or add a Big Table.

Big Tables are currently in early access. Want access? [Sign up here!](https://www.glideapps.com/p/early-access-glide-big-tables)

### Where is my data export?

When you export data, it will be emailed to the email address associated with your Glide account.
