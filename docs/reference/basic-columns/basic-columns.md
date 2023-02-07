---
title: Basic columns
description: Add and manage basic data like text, numbers, and images
video:
slug: basic-columns
---

Basic columns hold normal data values, just like the data in a spreadsheet. There are different types of basic columns for each data type - like **Image**, **Text**, and **Number**.

They hold only one value as opposed to [user-specific columns](/docs/user-specific-columns) that contain different values for each user. Any changes made to basic columns are synced between your Glide data source and the original data source.

## Available column types

The types of basic columns in Glide include:

- **Text**
- **Number**
- **Boolean**
- **Image**
- **Date & Time**
- **URL**
- **Row ID**
- **Rich Text**
- **Email**
- **Phone Number**
- **Duration**
- **Emoji**

## Add basic columns

In addition to adding new columns in your original data source, you can add basic columns directly to your table in Glide. This allows you to stay in the [Data Editor](/docs/data-editor) and is also beneficial if you want Glide to recognize a column type when that column doesn't have data.

1. In the **Data Editor,** open the table you want to edit.
2. Add a new column by clicking on the plus symbol to the right of the table.

   {% callout %}
   The plus symbol will append the column to the end of the table. To place the new column in a specific order, click on the dropdown button in the column header next to where you want to place it and then **Add column right**.
   {% /callout %}

3. Give the new column a name.
4. In the **Type** dropdown, choose the basic column type you want to add.

   {% figure src="/docs/reference/basic-columns/introduction-to-basic-columns/adding-a-basic-column.png" caption="Adding a basic Number column" /%}

   {% callout %}
   The most commonly used types will appear first in the dropdown. If you don't see the type you want, hover over the **Other** folder for more basic column options.
   {% /callout %}

5. Once finished, click **Done** to add the column to the table.

## Change column type

If you've already created a column in your table, you can change its type by editing it.

1. In the **Data Editor,** open the table you want to edit.
2. Click on the dropdown button in the column header and then **Edit**.
3. In the **Type** dropdown, choose the basic column type you want to change it to.

   {% figure src="/docs/reference/basic-columns/introduction-to-basic-columns/editing-a-basic-column.png" caption="Editing an existing basic column" /%}

   {% callout %}
   The values in the column will automatically adjust based on the type you select. This is just a preview and won't be saved until you click **Done**.
   {% /callout %}

4. Once finished, click **Done** to update the type.

## Configure data formatting options

### Manage Date & Time columns

When adding **Date & Time** columns, you have the option to configure how this information is displayed.

- **Parts** - You can choose to show the date and time, date only, or time only.
- **Date format** - The date can be short (`1/1/1970, 12:00 AM`), medium (`January 1, 1970, 12:00 AM`), or long (`Thursday, January 1, 1970, 12:00 AM`).
  {% callout %}
  💡 The format of date and time values is specific to your location. For example, the date shows `MM/DD/YYYY` in the United States and `DD/MM/YYYY` in the United Kingdom.
  {% /callout %}
- **Time format** - Time can be shown with seconds (`12:00:00 AM`) or without (`12:00 AM`).

{% figure src="/docs/reference/basic-columns/introduction-to-basic-columns/date-and-time-column.png" caption="Adding a Date & Time column" /%}

{% callout %}
If you're using Google Sheets, the original data source will automatically recognize when you enter a date, time, or date and time and apply the correct format to that cell. Glide's **Data Editor** will then recognize this format and automatically assign a **Date & Time** column type. For other data sources, you may need to manually define this column type.
{% /callout %}

### Convert basic columns to user-specific columns

When adding a new column, you can also enable the **Column is user-specific** option to turn the basic column into a user-specific column.

{% figure src="/docs/reference/basic-columns/introduction-to-basic-columns/creating-user-specific-columns.png" caption="Creating a user-specific column from a basic Text column" /%}

{% callout %}
Once a column is set to user-specific, it cannot be reverted back to a basic column. For more information, see [User-specific columns](/docs/user-specific-columns).
{% /callout %}
