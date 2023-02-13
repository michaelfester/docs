---
title: Format Duration
description: Format a duration from seconds into hh:mm:ss
video:
slug: format-duration
---

If your project displays durations in seconds, you can use the Format Duration computed column. 

{% cta title="Math Column" description="To perform calculations on date and time values, check out the Math column." url="/docs/math-column" /%}

## How to create Format Duration columns

- In the **Data Editor**, open the table you want to edit.

{% figure src="/docs/reference/computed-columns/format-duration/choosing-the-data-table-to-edit.png" caption="Choosing the data table to edit" /%}

- Add a new column by clicking the plus symbol to the right of the table.

{% figure src="/docs/reference/computed-columns/format-duration/choosing-the-data-table-to-edit.png" caption="Choosing the data table to edit" /%}

{% callout title="" %}
The plus symbol will append the column to the end of the table. To place the new column in a specific order, click on the dropdown button in the column header next to where you want to place it, and then click **Add column right.**
{% /callout %}

- Give the new column a name.

{% figure src="/docs/reference/computed-columns/format-duration/naming-the-column.png" caption="Naming the column" /%}

- In the Type dropdown, choose Other from the list of computed columns, then select Format Duration under the Date & Time section.

{% figure src="/docs/reference/computed-columns/format-duration/choosing-the-format-duration-column.png" caption="Choosing the Format Duration column" /%}

- Under **Seconds**, enter a **custom value**, or select a column from your data source to use as the value for the number of seconds you’d like to format. 

{% figure src="/docs/reference/computed-columns/format-duration/adding-a-custom-value-to-seconds.png" caption="Configuring the Seconds field" /%}

- Under **Format**, enter a **custom value**, or select a column from your data source to use as the format style. 

{% figure src="/docs/reference/computed-columns/format-duration/adding-a-custom-value-to-format.png" caption="Configuring the Format fiels" /%}

{% cta title="Date Formatting" description="Learn about date formatting in luxon's documentation." url="https://moment.github.io/luxon/#/formatting?id=table-of-tokens" /%}

