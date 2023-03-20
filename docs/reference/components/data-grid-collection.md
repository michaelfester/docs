---
title: Data Grid Collection
description: Display data in a layout that resembles a spreadsheet.
video:
slug: data-grid-collection
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

The **Data Grid Collection** can be used to display your data in a layout that is similar to the way it appears in the [Data Editor](/docs/data-editor). You can even allow users to edit the data straight from the grid view. This can be very useful if you need to display many columns on a single page.

{% figure src="/docs/reference/components/data-grid-collection/usecase-of-the-data-grid-layout.png" caption="Usecase for the Data Grid layout" /%}

## Configuration

{% cta title="Collection Component" description="For more information about the initial setup for Collections, check out our article on Collection Component." url="/docs/collection-component" /%}

### Columns

In the **General** tab on the right side of the **Layout Editor**, locate the **Columns** section. To add columns to your Data Grid, click the **+ Add item** button. You can add as many columns as you like.

{% figure src="/docs/reference/components/data-grid-collection/adding-items-to-data-grid-view.png" caption="Adding items in Data Grid view" /%}

For each item (or column) that you add, you can configure the **Title**, **Value**, and **Display as** properties.

- **Title** is the column header
- **Value** is the underlying value from your [Data Source](/docs/referenc/edata-sources)
- **Display as** can be used to display the Value in a different format.

### Options

In the **General** tab on the right side of the **Layout Editor**, locate the **Options** section. Here, you can **Limit the number of items** in your Data Grid, include **Row markers** (or row numbers for every row that is shown), and configure the **Page Size.**

## Actions

### Adding Items

If you’d like users to add rows to your Data Grid, you can configure an action in the **Title Bar** above your collection. In the **Actions** tab on the right side of the **Layout Editor**, toggle on **Allow users to add items**. This will create a **Show Form Screen** action that you can configure.

{% figure src="/docs/reference/components/data-grid-collection/allowing-the-users-to-add-items.png" caption="Allowing the users to add items" /%}

### Inline Editing

The Data Grid can display static data, but you can also allow users to edit data directly from the grid. This can be done in two ways:

- **Enable editing of all [Basic Columns](/docs/basic-columns):** In the **Actions** tab on the right side of the **Layout Editor**, toggle on **Allow users to edit items.**

{% figure src="/docs/reference/components/data-grid-collection/Frame.png" caption="Allowing the usesr to edit items" /%}

{% callout title="" %}
Only Basic Columns can be edited by users. [Computed Columns](/docs/computed-columns) cannot be edited directly from the Data Grid.
{% /callout %}

- **Enable editing of specific columns, but not others:** In the **Actions** tab on the right side of the **Layout Editor**, **Enable advanced actions**. Once advanced actions are enabled, any Basic Columns that are added as items in your Data Grid will include a checkbox to allow editing on that specific column.

{% figure src="/docs/reference/components/data-grid-collection/enabling-advanced-actions.png" caption="Enabling the advanced actions" /%}

{% callout title="" %}
If the **Editable** checkbox is selected for an item in your Data Grid, it can be edited by any of your users. If you’d like to give editing access for specific items to specific users, you may need to include multiple Data Grid collections with different [Visibility Conditions](/docs/visibility-conditions) so that only designated users can access the editable collection.
{% /callout %}

### Deleting Items

By default, users cannot delete rows from your Data Grid. If you’d like to allow the deletion of rows, you can toggle on **Allow users to delete items**. This will add a checkbox in the far left column of your Data Grid. Once a row is selected, it can be deleted by pressing the **delete key** on your keyboard.

{% figure src="/docs/reference/components/data-grid-collection/allowing-the-users-to-delete-items.png" caption="Allowing the usesr to delete items" /%}

{% callout title="" %}
It’s important to note that if a row is deleted from your Data Grid, it is also deleted from your data source. This includes all the data associated with this row in your data source, not just the columns displayed in the Data Grid.
{% /callout %}
