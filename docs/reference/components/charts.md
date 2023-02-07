---
title: Charts
description: Visualize data in colorful charts.
slug: charts
---

{% callout title="" %}
The Charts Component is available in both [Apps](/docs/introduction-to-apps) and [Pages](/docs/introduction-to-pages), but configuration options may differ slightly.
{% /callout %}

Charts are a great way to quickly add eye-catching graphics to your projects to help the user see their data visually and from a different perspective. Glide provides many chart options, whether your project is a [Glide App](/docs/introduction-to-apps) or a [Glide Page](/docs/introduction-to-pages).

## In Apps

When you add a **Chart** component in Apps, you can select between several styles and options.

{% video src="https://www.youtube.com/embed/APIR0eiZIME" /%}

### Data

Select a source for your chart's data. This could be a table in your [Data Source](/docs/reference/data-sources) or a [Multiple Relation](/docs/reference/computed-columns/relations/multiple-relations). You can also give the chart a **Title** and **Caption** to provide more clarity. As soon as you choose the source, the chart will automatically present your data, but further customization is almost always needed.

### Style

In Apps, you can select from the following styles:

- Donut
- Pie
- Bar
- Stack

{% figure src="/docs/reference/components/charts/image%20(7).png" caption="" /%}

### Contents

Next, configure the **Label** and **Quantity** properties so the chart displays the data as intended. The **Label** determines how the data is grouped in the legend, and the **Quantity** is used to calculate the totals for each group.

{% callout title="" %}
Bar charts allow you to add multiple quantities so that you can provide more insight to your users.
{% /callout %}

### Design & Options

Select a **Color Theme** for your chart to make trends stand out. You can also uncheck **Show legend by default** if you'd like the legend to only appear when the Info icon is tapped. Other design options include:

- **Show labels on bars**
- **Show total in center**

If consistent branding is ideal for your project, consider using the **Turrell** color theme. It automatically matches the Color you've selected in your project's Appearance settings.

For each chart style, you can check **Limit number of items** if you're wanting to show top trends or need to save screen space.

## In Pages

In Pages, charts are larger and more powerful than in Apps. You can even present them side by side using a [Container](/docs/container-pages).

{% figure src="/docs/reference/components/charts/charts-in-a-container-side-by-side.png" caption="" /%}

### How to add a Chart component

1. In the **Layout Editor**, select the page from the **Pages** panel you want to include a chart on.
2. Click on the plus symbol in the **Screen** panel.
3. In the **Insert Component** panel, select the desired chart style (**Bar Chart**, **Line Chart**, or **Radial Chart)** from the **Content** section.

{% figure src="/docs/reference/components/charts/20.png" caption="" /%}

### Data

Select a data source \***\*for your chart. This could be a table from your project's data source \*\***or a **Multiple Relation**. You can also give your chart a **Title** to provide clarity for your users.

{% figure src="/docs/reference/components/charts/charts-data-in-pages.png" caption="" /%}

{% callout title="" %}
If you've selected a **Bar** or **Line** chart, you'll see a **Style** section that allows you to change the chart type.
{% /callout %}

### Content

Select a column to use as the **Label** or **X-Axis.** This determines what data is grouped by (similar to the **Label** property for charts in Apps). This will appear at the bottom of the screen and in the floating hints that appear when users hover over the chart.

Select a column to use as the **Value**. This determines the bar height or line direction (similar to the **Quantity** property for charts in Apps).

Click the **+ Add item** button to display additional values from the chart's data source next to or stacked with the first Item (or value).

{% figure src="/docs/reference/components/charts/chart-content-in-pages.png" caption="" /%}

### Design

Depending on the style you've chosen, you can customize what is displayed on the chart (i.e. **Show x labels**, **Show y labels**, **Show grid lines**, **Graph Style**, **Line Weight**, etc.).

For each chart style, you can also **Limit number of items** displayed or adjust the **Page size**.

## Options

You can customize the data displayed in your chart by using [Conditions](/docs/reference/conditions) and other options.

### Visibility

You can define when your chart will be displayed by creating specific conditions to be met. In the **Visibility** section, click the **Add Condition** button to create your conditions.

{% callout title="" %}
For more information, see [Visibility Conditions](/docs/visibility-conditions).
{% /callout %}

### Filter data

You can limit the items displayed in your chart. In the **Filter Data** section, click the **Add Filter** button to create your filters.

{% figure src="/docs/reference/components/charts/23%20(1).png" caption="" /%}

For more information, see the [Filter](/docs/filter) documentation.

### **Sort data**

By default, chart data will appear in the same order as they appear in its data source. However, if you are using a **Bar** chart, you can customize the legend's sort. In the **Sort** section, click on the **Sort by Sheet order** field to expand the options and configure it.

{% callout title="" %}
For more information, see the [Sort](/docs/sort) documentation.
{% /callout %}

### Other Options

In **Pages**, you can enable the **Show Search bar** option so users can search the chart items more quickly. You can also configure the **Show Filter** property to allow users to view the chart information differently.

## Walkthrough

Suppose you have a table which shows orders for a shop. You've added a Donut style chart and selected **Orders** as the **Label**. You've left the **Quantity** blank.

| Customer       | Orders           | Count |
| -------------- | ---------------- | ----- |
| Sam Smith      | Apple Pie Muffin | 20    |
| lana Del Ray   | Bread Pudding    | 1     |
| Barry Manilow  | Honey Chia       | 8     |
| freddy Mercury | Apple Pie Muffin | 3     |

If the **Label** property is the only option configured, the chart will display the _total number of orders_, grouped by the values in the **Orders** column.

{% figure src="/docs/reference/components/charts/image%20(8).png" caption="" /%}

If you select the Count column as the **Quantity** property, then the chart changes significantly. Now the chart shows how many of that particular item was ordered.

{% figure src="/docs/reference/components/charts/image%20(9).png" caption="" /%}
