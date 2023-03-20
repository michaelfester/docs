---
title: Screen Values
description: Values that you can access from the current screen.
slug: screen-values
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

Occasionally you will see the option to work with 'Screen' values in Glide. This can sometimes seem very similar to **Column Values** – but they are different in a couple of respects.

Screen values are useful when working with Forms or Inline Lists. Let's look at two examples.

## In Forms

For our first example, we'll look at using Screen Values to filter a choice component. We're going to use the **Property Manager** template.

![](/docs/reference/values/screen-values/Screenshot%202021-04-28%20at%2012.05.55.png)

This screen shows a user adding a new inspection. This is a **Form** screen and therefore lives in a state of limbo – it's not yet a row in your table as it has not been submitted – but it still has values.

In this app, there are many properties (houses) and each property has multiple units (apartments). When we pick a property, we only want to have to choose from a list of units _within_ that property. We don't want to pick from a list of _all_ units from _all_ properties.

We can therefore add a **filter** on the **choice component** that says

> Only show units where the property ID matches the property ID selected in the current screen.

## Filtering Inline Lists

Another use case for using Screen Values is when you have inline lists on details screens.

When you have an inline list on a details screen, you have two contexts:

1. The row of the current screen
2. The rows of the inline list

Without screen values, the inline list doesn't know what screen it is being shown on. With screen values, you can use the containing screen's values in your conditions.

For example, showing a list of related items without showing the current item.

![](/docs/reference/values/screen-values/Screenshot%202021-04-28%20at%2012.18.02.png)

In the [**Field Sales**](https://www.glideapps.com/for-work/field-sales) app above, we show a list of similar products at the bottom of each product in the catalogue. This is using an inline list.

When we create a filter on the inline list,

However, to exclude the current item we create a filter condition that says:
Show items where the SKU is not the SKU in the current screen.
