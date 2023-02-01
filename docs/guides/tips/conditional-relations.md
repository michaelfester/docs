---
title: Conditional Relations
description: Create relationships only in certain conditions.
video:
slug: conditional-relations
---

When you configure **components**, **computed columns** or **conditions** – you're always dealing with **values**. The most common type of values are **Column Values** and **Custom Values**.

The **If → Then → Else Column** allows you to produce new values based on a set of conditions. You can have multiple 'cases' and each of these cases has a condition and an output value if the condition is met.

![](/docs/guides/tips/conditional-relations/Screen%20Shot%202021-05-26%20at%2012.21%201.png)

The simplest and most common way to use this column is to test for a value and then output a **Custom Value**. For example:

> if the value in the **Price** column is below 10 then output the value 'low'.

However, each case's output value can also be a **Column Value**. There are many reasons and use cases for this, but let's look at two of the most common.

## Outputting a value for a relation

For example, in this app, we have an **If → Then → Else Column** which tests for the custom value of 'true' and then outputs a column value from the row that is being evaluated.

![](/docs/guides/tips/conditional-relations/Screen%20Shot%202021-05-26%20at%2012.19.39%20PM.png)

In other words, if an item is active then the Property ID will be shown. We can then use that value elsewhere – for instance in a further **Relation**. Our new relation will only pull back those rows that have values in them.

{% callout title="" %}
Thanks to Robert Petitto for this technique!
{% /callout %}

## Outputting a value for a calculation

Another example would be in a calculation. Say we had an inventory log – with sales items out and restocking items in – and we wanted to sum the total of all the sold items in the log (but not the restocking items).

To do this, we can create an If → Then → Else column which will show the order total only if the Sale or Restock column contains the value 'Sale' and shows the value of 0 if not. We can then use that column elsewhere in a calculation, rollup or chart.

![](/docs/guides/tips/conditional-relations/Screen%20Shot%202021-05-26%20at%202.35.19%20PM.png)
