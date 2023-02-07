---
title: Progress Bar
description: Display the progress of a value between two limits
slug: progress-bar
---

{% callout title="" %}
The Progress Bar Component is only available in [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

{% figure src="/docs/reference/components/progress-bar/progress-bar.png" caption="" /%}

## Configure the Progress Bar component

### Style

The Progress Bar displays a **horizontal line**, **circle,** or **half circle,** which fills up according to a column in your **data source**.

### Data

Select the column that should affect the progress bar's current status. Next, the progress bar needs to know what the **Minimum** and **Maximum** values should be. By default, Glide fills these fields with 0 as the minimum and 100 as the maximum. The progress bar's minimum and maximum can be values from your data source, or you can set [Custom Values](/docs/custom-values). If you choose column values in your data source this means that the max and min for your progress bar can be dynamic.

For example, the user can set their own 'Start' (minimum) and 'Finish' (maximum). These two columns are tied to the max and min of the progress bar.

{% figure src="/docs/reference/components/progress-bar/progress-bar-design.png" caption="" /%}

### Design

Lastly, give your progress bar a **Title** and **Caption**. If you select a circular style, you can also check **Show total in center** to reveal a percentage for the users' progress.
