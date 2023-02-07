---
title: Row ID Column
description: Let Glide generate unique IDs for your rows
video: https://www.youtube.com/watch?v=CHYC4nuTotA&t=5s
slug: row-id
---

To keep track of each row and its associated data while you and your users make changes in your App or Page, you need to create a unique identifier for each row. Although some row values may be unique, such as a person's email, the most reliable method is to use a key, a unique ID, for each row. Glide can add a unique ID to each row in your data source with the Row ID column.

To learn more about what a key is and how it relates to your data, see [Keys and Unique ID](/docs/reference/values/keys-and-unique-ids).

{% callout %}
When new rows are added through forms or custom actions, you can use the Unique Identifier component. The Unique Identifier gives you additional control over relations between items in your app. For a more detailed explanation, see [Unique Identifier](/docs/reference/values/unique-identifier).  
{% /callout %}

## How to add a Row ID column

Add the Row ID column to your project in the Data Editor, and Glide will handle the management of your unique ID keys.

1. In the Layout Editor, select the **Data Editor** icon.
2. In the Data Editor, select the plus icon to add a new column.
3. For the column **Type**, select **Other > Row ID**. {% figure src="/docs/reference/computed-columns/row-id-column/adding-a-row-id-column.png" caption="Select the plus icon to add a Row ID column" /%}
4. Glide sets the new column's **Name** and **Type** as **Row ID**. Confirm these by selecting **Done**.

Glide generates a unique key for each row and adds the new Row ID column to your table. The lock icon in the column reminds you not to make changes to this column. You can move the Row ID column anywhere in your table and it will still work.
{% figure src="/docs/reference/computed-columns/row-id-column/lock-in-row-column.png" caption="View of a Row ID column" /%}

When you use Glide's Row ID column, project components like Comments and Favorite will no longer ask you to provide a key or a topic. Instead, your project's components will use the Row ID column to locate a row.

When you add, delete, or re-order rows in your sheet, Glide will maintain the Row ID column and make sure each row keeps its unique ID key.
