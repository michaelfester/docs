---
title: Independent Screen Configuration
description: Have different components on every details screen in your lists.
slug: independent-screen-config
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

With lists – the default behavior is that each details screen within that list shares the same set of components. If we delete one component from one item, all the items will no longer have that same component. This saves a huge amount of time and allows us to design for new items that aren't in our lists yet.

However, we can enable independent configuration for each screen, meaning we can have a totally unique layout of components for each item.

{% figure src="/docs/reference/ux/independent-screen-configuration/isc-per-item.png" caption="Independent screen configuration per item" /%}

This checkbox 👆🏼can be found when we add an action.

Below we can see two items that are on the same list – but have a completely different set of components.

![](/docs/reference/ux/independent-screen-configuration/same-list-diff-components.png)

There are many different reasons why we might want to do this, but one of the most compelling ones is to turn normal list layouts into menus. In the app below, each item takes users to a unique screen and therefore acts like traditional app tabs.

![](/docs/reference/ux/independent-screen-configuration/layout-with-items.png)
