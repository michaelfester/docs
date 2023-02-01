---
title: Basic Table component
description: Display multiple values in a compact table.
slug: basic-table-component
---

{% callout title="" %}
The Audio Component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

The Basic Table component is a great way to display long lists of information found in your project. Instead of displaying data vertically, we can summarize all the information in one single table.

{% figure src="/docs/reference/components/basic-table-component/basic-table-comparison.png"" /%}

Tables are perfect for displaying purely informational data. You cannot merge or display action texts, buttons or images with a table.

## Configure a Basic Table component

### Title

You can select a column to display as the title or give it a [Custom Value](/docs/custom-values).

### Data

In the **General** tab on the right side of the Layout Editor, locate the **Data** section. For each row, you can display two columns in the Basic Table component. You can use custom text or display columns in your project’s [Data Source](/docs/reference/data-sources/). You can add another row to display additional columns or custom text.

{% figure src="/docs/reference/components/basic-table-component/configuring-the-basic-table.png" caption="" /%}

You can also choose a Relation as the source for one of the rows. For example - below, we add a relation showing orders of the related products.

{% figure src="/docs/reference/components/basic-table-component/adding-an-inline-list-to-basic-table.png" caption="" /%}

### Footer

The Basic Table also has a Footer field where you can provide more information about the table. Type a custom footer or select a column from your data source to display.

### Text Style

You can check the “Allow text wrapping” box if your row content is longer and you want to display it on multiple lines.

## Re-ordering rows

We can re-order basic table rows by clicking and dragging on the left-hand side of each row in the configuration panel.

{% figure src="/docs/reference/components/basic-table-component/re-ordering-rows.png" caption="" /%}

{% callout title="" %}
Looking for similar functionality in Glide Pages? Check out the [Fields Component](/docs/fields-component).
{% /callout %}