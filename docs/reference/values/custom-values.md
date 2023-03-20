---
title: Custom Values
description: Custom values that do not live in your data source.
video:
slug: custom-values
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

When configuring your app, you'll often see the option to choose a 'Custom Value' instead of just a column value. The idea of a custom value can be a little confusing so let's look at a few contexts.

![](/docs/reference/values/custom-values/Screen%20Shot%202021-05-26%20at%2010.56%201.png)

## Custom values in components

![](/docs/reference/values/custom-values/Screen%20Shot%202021-05-26%20at%2011.41.27%20AM.png)

Above you can see the settings for a **text component**. Currently, it's bound to the Description column. This means that for every item in that list, the description will be different – because it is coming from the data in that list's table.

However, we can also choose for the text component to have a custom value – in other words – a value that we write within the text component's configuration. When we do this, this custom value will be the same for every component in that list (unless we've changed the list settings to have **independent screen configuration** for each item).

{% callout title="" %}
The Rich Text Component allows you to add custom Markdown within the custom text field.
{% /callout %}

## Custom values in conditions

![](/docs/reference/values/custom-values/Screen%20Shot%202021-05-26%20at%2010.55%201.png)

When you create a condition, the value you test for in the condition defaults to an empty field where you can enter a custom value. Initially, this looks like the only option you have, however, if you click on the three dots you'll get access to a menu with more options. Depending on the condition's context, you may see **Column Values**, **User Profile Columns** or **Screen Values** in this menu.

![](/docs/reference/values/custom-values/Screen%20Shot%202021-05-26%20at%2010.56.01%20AM.png)

If we use a custom value in our filter condition then that condition will evaluate that custom value on every one of our list items. In other words, if we filter our list to show items where Item SKU is 'ERO-LC1' (a custom value we enter in the condition itself) then every one of our list items will have that same condition.

In this case, this will show only one item – the item with the SKU of 'ERO-LC1'.

![](/docs/reference/values/custom-values/Screen%20Shot%202021-05-26%20at%2011.01.59%20AM.png)

This is a slightly unrealistic example. A more realistic use would be filtering a list of employees to show only managers. Here, we know the value we want to match in our filter – so we can just enter it as a custom value.

![](/docs/reference/values/custom-values/Screen%20Shot%202021-05-26%20at%2012.14.35%20PM.png)
