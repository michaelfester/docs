---
title: List Relation
description: Create a separate screen with a list of items.
slug: list-relation
---

{% callout title="" %}
The List Relation Component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

The **List Relation** creates a link to a separate screen with a list of items. This list can be a [Relation](/docs/relations), but it can also be any table in your project.

It acts and is set up almost exactly like the [Inline List](/docs/inline-list) component. The only difference is that it lists the data on a separate page.

{% figure src="/docs/reference/components/list-relation/use-case-of-list-relation.png" caption="" /%}

## Source

A List Relation can pull its data from either a sheet or a [Multiple Relation](/docs/relations/multiple-relations) column. When you choose a table as a [Data Source](/docs/data-sources), the list will show all the rows in that table by default. When you choose a Multiple Relation as the source, the list will show all of the related items.

{% figure src="/docs/reference/components/list-relation/configuring-list-relation.png" caption="" /%}

## Design

After determining the source of your List Relation, you can give the component a **Title** which will appear above the number of items to provide clarity for your users.

## Group, Filter, and Sort

We can [Group](/docs/group), [Filter](/docs/filter), or [Sort](/docs/sort) the results in the list relation so they're categorized better upon display. To do this, head to the **Options** tab, then group, filter or sort your list according to the different columns found in your data.

{% callout title="" %}
To learn more about customizing the contents of a list screen, see [User Experience](/docs/reference/ux) and [Conditions](/docs/reference/conditions) documentation.
{% /callout %}

{% figure src="/docs/reference/components/list-relation/filtering-grouping-and-sorting-list-relation.png" caption="" /%}

