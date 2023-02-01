---
title: Inline List Component
description: Show a list of items on a details screen
slug: inline-list-component
---

{% callout title="" %}
The Inline List Component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

An **Inline List** presents lists of items inline - so we can show other components above or below it including other Inline Lists. There are different layout options for inline lists, such as **List**, **Tiles**, **Calendar**, **Map**, **Checklist**, and **Cards**.

{% figure src="/docs/reference/components/inline-list-component/inline-list-component.png" caption="" /%}

{% callout title="" %}
An Inline List can only be added to a [Details Screen](/docs/details-layout).
{% /callout %}

## Configure an Inline List component

You can configure the **data source**, **style**, and **layout** in the **General** tab after adding an Inline list component.

### Data

An Inline List can pull data from a table or a [Multiple Relation](/docs/relations). When you choose a table as a data source, the list will show all the rows in that table by default. When you select a multiple relation as the source, the list will only show the related items.

{% figure src="/docs/reference/components/inline-list-component/choosing-the%20data-source-for-inline-list-component.png" caption="" /%}

### Style

Select a style to determine how your items are displayed. Each style can be useful for various project types. Depending on the selected style, the general settings will vary.

{% figure src="/docs/reference/components/inline-list-component/selecting-an-inline-list-style.png" caption="" /%}

### Content

Next, you can configure the content that is displayed to users. Depending on the list style that is selected, different fields are configurable. 

### Other Options

Each inline list style has additional options you can configure. Depending on your selected style, you can adjust **Design** and **Text Style** settings, such as text size, text wrapping, list orientation, etc. On most inline list styles, under **Options**, you can choose the number of items displayed and when the **See All** button appears. 

{% figure src="/docs/reference/components/inline-list-component/inline-list-options.png" caption="" /%}

### Action

This is the behavior that will be triggered when users tap an item in the list. The default action for an inline list is [Show Detail Screen](/docs/show-detail-screen) for this item. You can change this default action and choose from any of the actions available in Glide, or you can create a new action.

1. In **General > Action**, select the menu arrows.
2. In **Configure Action**, select the dropdown menu to view action options.
3. Select the action to be triggered when users tap an item in your list.
4. If prompted, apply any additional settings in **Configure Action**.

{% cta title="Actions" description="For more information about available actions and how to configure them, see Actions." url="/docs/actions" /%}

## Configure Options settings

In the **Options** tab, you can customize the data displayed in your list by using [Conditions](/docs/conditions) and other options. You can define [Visibility Conditions](/docs/visibility-conditions), [Filter](/docs/filter), [Sort](/docs/sort), or [Group](/docs/group) the data. In the example below, the staff members are grouped by their location.

{% figure src="/docs/reference/components/inline-list-component/inline-list-options-configuration.png" caption="" /%}