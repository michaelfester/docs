---
title: Choice Component
description: Pick options from a list
slug: choice-component
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

The Choice component allows users to select an option from a predefined list.

{% figure src="/docs/reference/components/choice-component/choice-component-in-pages.png" caption="" /%}

## Configure a Choice component

{% figure src="/docs/reference/components/choice-component/configuring-choice-component.png" caption="" /%}

### Data

In the **Write to** field, select the column from your [Data Source](/docs/reference/data-sources) where you want the choices to be recorded. If you are using the choice component within a Form, you'll also be able to set a default value that pre-fills this field. This remains editable by the user.

### Content

Select the source table that contains the options to be displayed. For Values, choose the column that contains the options users will pick from. If you'd like to display an image and/or alternate text in your choice, you can also configure the **Images** and **Display as** options.

### Design

You can add a **Label** to the Choice component to provide direction. You can also select a **Style**:

- Dropdown
- Chips

{% figure src="/docs/reference/components/choice-component/designini-the-choice-component.png" caption="" /%}

If you've selected the **Dropdown** style, and your list of choices is over 9 items, a search bar will automatically be added to allow people to search your choices.

### Options

- You can limit the number of choices displayed.
- If you're using the choice component within a **Form**, you can set the choice to be **Required**. This means that the user will not be able to submit unless they've selected one of the options.
- You can also configure **Allow selecting multiple** to let users select more than one of the options displayed. The multiple selections will be stored in your data source (in the column chosen as the **Write to** column) as a comma-separated value. This is particularly useful when you want to filter list items that include the users' selection(s).

{% figure src="/docs/reference/components/choice-component/chice-component-options.png" caption="" /%}

## Enable Options settings

### **Visibility**

You can define when your choice will be displayed by creating specific conditions. In the **Visibility** section, click the **Add Condition** button to create your conditions.

{% cta title="Component Visibility" description="To learn more about Component Visibility, check out this article" url="/docs/visibility-conditions" /%}

### **Filter data**

You can filter the choices displayed based on their properties. In **Filter Data** section, click the **Add Filter** button to create your filters.

{% cta title="Filter" description="To learn more about Filter, check out this article" url="/docs/filter" /%}

### **Sort data**

By default, choices appear in the same order as they are in your data source. However, you can customize this so that choices are sorted according to specific criteria. In the **Sort** section, click on the **Sort by Sheet order** field to open the menu and configure your sort options.

{% cta title="Sort" description="To learn more about Sort, check out this article" url="/docs/sort" /%}
