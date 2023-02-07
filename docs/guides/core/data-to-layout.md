---
title: Data to Layout
description: Understand the fundamental ways Glide transforms your data to UI.
video:
slug: data-to-layout
---

Projects in Glide can have multiple Data Sources. This means you can have data from [Google Sheets](/docs/google-sheets), [Airtable](/docs/airtable), [Excel](/docs/excel), and more — all in one app.

When you first create a project or add a new tab to an existing project, Glide will build a basic layout based on the data that it finds.

In this guide, you'll learn how to structure your data simply and understand the fundamentals of how your data appears in Glide.

{% cta title="Data Sources" description="Learn more about the different data sources you can integrate with Glide" url="/docs/intro-to-data-sources" /%}

## Structuring your data

Spreadsheets are incredibly flexible and allow you to organize your cells however you want. For your data to work in Glide though, it needs to be tabular — with neat rows and columns.

{% figure src="/docs/guides/core/data-to-layout/rows-and-columns-in-google-sheets.png" caption="Rows and columns in Google Sheets" /%}

Within each table, every column should have a name. These column names describe the properties or attributes of your items. Some Data Sources like Airtable automatically have column names, but in spreadsheets, you'll need to make sure the first row is reserved for this.

For example, if we were making a Team Directory, we might have two tables; one for Staff and another for Locations. In the Staff table, we would have columns for `Name`, `Email`, `Photo`, `Phone Number`, `Role`, `Manager`, and `Location`. In the `Location` table, we would have columns for `Name`, `Address`, and `Image`.

{% figure src="/docs/guides/core/data-to-layout/data-source.png" caption="Structured data in a Google Sheet" /%}

{% callout %}
If your data is not in the right format for Glide but needs to stay in that format for other reasons, you might want to read our guides on [Changing Horizontal Data to Vertical](/docs/transpose), [IMPORTRANGE](/docs/importrange), and [ARRAYFORMULA](/docs/arrayformula).
{% /callout %}

## Understanding how Glide displays your data

When you first import your Data Source, Glide will create a basic app as a starting point. If you've structured your data correctly, you'll see some tabs with lists of items. If you click on one of these items, you'll see more data about that item.

At first, it might be a little confusing to understand how your data and the UI relates. So let's break it down.

- Tables become tabs
- Rows become List Items
- A single row becomes a Details Screen
- Column values (a single cell in a row) are displayed in Components

### Tables → Tabs

When you create an app from a Data Source, Glide will try to make a tab for every table it finds.
You can create new tabs whenever you like, but they have to have a table as a source. You can create multiple tabs with the same Data Source.

{% figure src="/docs/guides/core/data-to-layout/corresponding-tabs-for-the-data-tabs.png" caption="Tables become tabs in Glide Apps" /%}

### Rows → List Items

If your Data Source has multiple rows, you'll see those items in a List or [Collection](/docs/collection-component).

When you click on the List or Collection in the Components panel, you'll be able to configure its settings on the right and show different columns from that table. Modifying your List Layouts is one of the first ways you start designing your project in Glide.

{% figure src="/docs/guides/core/data-to-layout/configuration-panel-of-a-list-layout.png" caption="A List shows a few columns for every item" /%}

### Row → Details Screen

When you click on one of the items in a List, you get taken to a Details Screen. This details screen then represents the whole of that row. Glide adds Components for each column it finds in your table. So if we added a table with team member info, our Details Screens might look like this.

{% figure src="/docs/guides/core/data-to-layout/details-screen.png" caption="The components panel on a Details Screen" /%}

But you don't have to show every single column in a Component. You can display what you want and leave some columns hidden.

{% figure src="/docs/guides/core/data-to-layout/showing-few-column-values-using-components.png" caption="Showing few column values only using the Title component and the Button Bar component" /%}

Most of the time, your table will have multiple rows of data — and therefore, the top level of your tab will be a List Screen. However, if you create a new tab based on a table that has only one row of data, it will create a Details Screen.

{% figure src="/docs/guides/core/data-to-layout/data-sheet-with-a-one-row-becomes-a-details-layout.png" caption="Creating a tab based on a table with a single row creates a Details Screen" /%}

You can also turn a Tab that has a list layout into a details screen. When you do this, the context for the details screen will be the top row of your table.
In other words, the data that ‘feeds' that screen is the top row of your table.

{% callout %}
Leaving components out of your screens is not a security feature as the data is still accessible. Learn more in our [Security Guide.](/docs/security)
{% /callout %}

### Column Values → Components

Details screens show some or all of the data for an entire row. Some Components can display only one column from your row, and some can display more, like the [Title Component](/docs/title-component).

{% figure src="/docs/guides/core/data-to-layout/one-component-with-a-few-column-values.png" caption="The Title Component can show three columns from your table" /%}

While others, like [Action Text](/docs/action-text), only show one.

{% figure src="/docs/guides/core/data-to-layout/one-component-with-a-one-column-value.png" caption="The Action Text component only shows one value from your table" /%}

## Differences between Apps & Pages

While the above principles apply to both Pages & Apps, Pages are slightly different. In Pages, _every_ screen is a Details Screen. If you want to learn more about these differences and get a deeper understanding of screen types, read the article below.

{% cta title="Screen Types" description="Get a deeper understanding of screen types in Glide Apps & Pages" url="/docs/screens" /%}
