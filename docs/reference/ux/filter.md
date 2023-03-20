---
title: Filter
description: Filter your lists based on criteria
video:
slug: filter
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

By default, your lists show all the rows coming from your data source (your data source could be a sheet or a Relation). However, you can filter the rows that appear in your list. You can also enable in-app filtering so that users can change the filtering themselves.

## Filtering from the layout

**Filter** allows us to exclude items from our lists based on different criteria. Users will not be able to see items that you filter out of a list. For example, in the app below we add a filter that shows only the employees where the Is Manager column contains 'Yes'.

{% callout type="warning" title="" %}
Please note that filtering is not a security feature. If you use it, the app can still download filtered data. If your app has private or sensitive data then you should use **Row Owners**.
{% /callout %}

![](/docs/reference/ux/filter/2021-10-04%2011.46.03.gif)

The filter is created by checking certain criteria on a column in your sheet. In the above example, we have a list of employees. Some are managers, some are not. We have a column in our sheet that identifies `Top Managers` and then values in that column of `Yes` and `No`.

![](/docs/reference/ux/filter/Screen%20Shot%202020-05-15%20at%205.30.10%20AM.png)

In Glide, we select that column as the **Filter** column and then choose the criteria by which we are filtering.

![](/docs/reference/ux/filter/Frame%2019.png)

We use the same sheet as a source in multiple tabs and then filter each one in different ways. For example, the app below shows the same staff list in three different tabs. Each tab has the same exact source sheet, but each one is filtered to show only those with a different diet.

![](/docs/reference/ux/filter/2021-10-04%2014.10.31.gif)

{% callout title="" %}
You can use Filter with Inline Lists and List Relations
{% /callout %}

## Multiple filters

We can use multiple filters on a list with AND + OR logic. In the following example, we add two filters to our list of cookies to show only items that include 'coconut' or 'coffee' in the `Name` column.

- Name includes 'coconut'
- OR
- Name includes 'coffee'

![](/docs/reference/ux/filter/2021-10-04%2014.46.42.gif)

## In-app filtering

You can also enable in-app filtering for your users so they can change the items that are displayed in the list. This is particularly useful for long lists of items. In the example below, we enable **in-app filter** based on the `Size` column which allows users to see only the drinks with certain sizes.

![](/docs/reference/ux/filter/2021-10-04%2014.53.19.gif)
