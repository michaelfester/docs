---
title: Sort
description: Sort your lists and collections based on criteria.
video:
slug: sort
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

By default, our list items show in the same order as the rows in our sheet. However, we can use **sort** to change this order. We can also enable **in-app sort** so that users can change the sorting themselves.

## Default sort

In **Layout / Options** under **Sort** we'll see the following text.

![](/docs/reference/ux/sort/sort-by-sheet.png)

Clicking on this text will allow us to customize the way our list is sorted. When we click on this we will see a dropdown and two direction controls.

{% figure src="/docs/reference/ux/sort/sorting.gif" caption="Sorting" /%}

In addition to the default **Sheet Order** option, this dropdown menu will contain a **Random** sort and then all the columns in your sheet. If we choose another column then our list will be sorted by that column Alphabetically or Numerically - depending on the data in that column. At any time, we can reverse the order of your current sort by clicking the up or down arrows on the right.

Sorting can make more sense of the data in your lists. For example, the app below shows a list of drinks sorted by price in descending order.

{% figure src="/docs/reference/ux/sort/sort-by-price.png" caption="Sort by price" /%}

{% callout title="Sort in Lists" %}
You can also use sort in **Inline Lists** and **List Relations**.
{% /callout %}

## In-app sorting

You can also enable **in-app** sorting for your users so they can change the order of your lists based on different columns. In the example below, we allow users to sort the list by the **Location** and **Price** columns.

{% figure src="/docs/reference/ux/sort/in-app-sorting.gif" caption="In-app sort" /%}
