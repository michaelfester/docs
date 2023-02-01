---
title: Collection Component
description: Show lists of items from your tables in different layouts
slug: collection-component
---

{% callout title="" %}
The Collection Component is only available in Glide [Pages](/docs/introduction-to-pages), not Glide [Apps](/docs/introduction-to-apps).
{% /callout %}

Glide Pages don't have [List Screen Layouts](/docs/list-layout) like Glide Apps – everything is a [Details Screen](/docs/details-layout) onto which you can add components.

Therefore, when we want to have lists, we need to add a **Collection Component**. This acts much like the [Inline List](/docs/inline-list) in Apps but has more power & versatility.

{% figure src="/docs/reference/components/collection-component/collection-component.png" caption="" /%}

## General

### Data

Choose a **Table** or **Relation** for your Collection's [Data Source](/docs/reference/data-sources). You can also provide a **Title** for your Collection to provide more direction for your users.

### Style

Most collections like **Card**, **List**, **Grid**, and **Table** are roughly the same in the way that you configure them. Some collections have very different configurations, so please reference their specific documentation ([Kanban Board](/docs/kanban-board-pages), [Calendar](/docs/calendar-layout), and Data Grid).

### Items Data

For most styles, you have the option to show a **Title**, **Subtitle**, **Emphasis**, **Meta**, and **Image**. 

### Design

Depending on the style you’ve chosen, your design options may vary. Typically, you’ll have options to select the **Style**, **Size**, and **Alignment**. Configure any additional design options to further customize how your Collection component is displayed. 

### Options

You can limit the number of items in your list, which simply shortens the list to whatever number you choose. But you can also customize the **Page size**. In other words, if the list is very long, it will automatically be grouped into 'pages' and you can click through to the next or previous page.

You can choose how many items appear on a 'Page' - which will affect the overall height of your collection.

{% figure src="/docs/reference/components/collection-component/limiting-the-number-of-items-in-collections.png" caption="" /%}

## Enable Options settings

You can customize the data displayed in your Collection by using **Conditions** and other options. 

### **Visibility**

You can define when your Collection will be displayed by creating specific conditions to be met. In the **Visibility** section, click the **Add Condition** button to create your conditions.

{% cta title="Component Visibility" description="For more information, see Component Visibility." url="/docs/visibility-conditions" /%}

### **Filter data**

You can limit the items displayed in your Collection based on their properties. In **Filter Data** section, click the **Add Filter** button to create your filters.

{% cta title="Filters" description="For more information, see the Filter documentation." url="/docs/filter" /%}

### **Sort data**

By default, Collection items appear in the same order as they are in the data source. However, you can customize the Collection’s sort in many ways. In the **Sort** section, click on the **Sort by Sheet order** field to expand the options and configure it.

{% cta title="Sort" description="For more information, see the Sort documentation." url="/docs/sort" /%}
 
### **Group data**

You can group the data in your Collection based on a specific column in your source. In the **Group** section, click on the **Group by** dropdown to choose the column to group your items by. You can select the long dash option from the dropdown if you don’t want to group your Collection items.

{% cta title="Group" description="For more information, see Group." url="/docs/group" /%}
 
For more information, see **Group**.

### **Search**

In the **Search** section, enable the **Show search bar** option to allow users to search for specific items in the Collection.

Choose a filter in the **Show filter** field to let users filter the pins on the map based on a specific column in your data source.

## Actions

Click **Actions** to adjust the default actions to your collection or **Enable advanced actions** to customize different areas of your collection.

If you choose to enable advanced actions, you can

- Add **Title Bar Actions**, which creates buttons at the top of your collection
- Add an **Item Click** action, which creates a single action for when an item is clicked.
- Add **Collection Item Actions**, which creates buttons within each collection item.

{% cta title="Actions" description="For more information on configuring actions, see Actions." url="/docs/actions" /%}
 

