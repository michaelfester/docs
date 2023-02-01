---
title: Big Numbers
description: Display a single value in a block with two additional values
slug: big-numbers
---

{% callout title="" %}
The Big Numbers Component is only available in Glide [Pages](/docs/introduction-to-pages), not Glide [Apps](/docs/introduction-to-apps).
{% /callout %}

The **Big Numbers** component displays a single number value in a large font and two smaller, optional text values. The Big Numbers component is ideal for showing top level reporting numbers. You can combine it with the [Chart Component](/docs/charts) and data grid layout to create useful dashboards in your projects. 

{% figure src="/docs/reference/components/big-numbers/big-numbers.png" caption="" /%}

## Configure a Big Numbers component

### Options

In the **General** tab on the right side of the **Layout Editor**, locate the **Options** section. Use the menu in the **Value** field to select the value from your data to display, or select **Custom** to enter a [Custom Value](/docs/custom-values) for this field. This is the ‘big number’. The value can be any column from your table; a basic number column, rollup, lookup, math column or anything else. 

{% figure src="/docs/reference/components/big-numbers/configuration.png" caption="" /%}

The other two values for **Name** and **Description** are defaulted to custom values that you add directly within the component. However, you can also make these dynamic and link them to a column in your table. 

You can add multiple Big Number blocks inside of a single Big Number component. Just click **Add item** to add a new Big Number to your list and click and drag on the three dots in the top left to re-arrange.

{% figure src="/docs/reference/components/big-numbers/add-item.png" caption="" /%}