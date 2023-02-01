---
title: Rating Component
description: Submit rating values for items.
slug: rating-component
---

{% callout title="" %}
The Rating Component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

The Rating Component lets users rate items in your apps. They can tap and drag through the different values and the rating will be written to your [Data Source](/docs/reference/data-sources/).

## How to add a Rating component

1. Make sure you are on a **Details** or **Custom** screen. Learn more about screens [here](/docs/screens)
2. Click on the plus symbol in the **Screen** panel.
3. Under **Insert Component**, select **Rating**.

## Data

Select which column to store the users’ ratings. The Rating component will write a simple number value to your data source. If you want ratings to be specific for each user then you can use [User-specific Columns](/docs/user-specific-columns).

{% figure src="/docs/reference/components/rating-component/image%20(4).png" caption="" /%}

## Design

Choose which icon to display as the **Unit**. You can select **Stars**, **Hearts**, **$**, **Time**, or **Pizzas**.

{% figure src="/docs/reference/components/rating-component/image%20(5).png" caption="" /%}

Determine the **Max Rating** to accept. This ranges from 3 to 5.

{% figure src="/docs/reference/components/rating-component/image%20(6).png" caption="" /%}

Add a title to your component by typing directly into the **Label** box or selecting a column from your data source as the title.

{% callout title="" %}
The Rating component is especially useful in [Forms](/docs/forms). You can collect the users’ individual ratings for an item. Learn more about [Rollup Columns](/docs/rollup) to then determine average ratings.
{% /callout %}
