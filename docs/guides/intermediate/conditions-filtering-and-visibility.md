---
title: Conditions, Filtering, and Visibility
description: Limit the content displayed in your projects.
video: https://www.youtube.com/embed/reeS28W0YXQ
slug: conditions-filtering-and-visibility
---

{% callout type="warning" title="" %}
Filtering & Visibility conditions are NOT security features. When you hide tabs, components, or filter out items in lists, the data is still accessible on your device. Read our [Security Guide](/docs/security) to learn how to protect sensitive data.
{% /callout %}

## Introduction

Conditions appear in many places in Glide and are used in different ways. You can use Conditions to filter lists, control the visibility of components, create actions that only run when a condition is met, and much more.  For example, you could:

- Show all the items with `status` marked as `completed`
- Hide a component if the user is not an admin
- Show a tab only if the user has submitted this form
- Show the add button only if a user has writing priveledges
- Let users edit their own profiles, but not other users’ profiles

### A quick example of creating a condition

Below is a condition on the Edit Screen in Apps that prevents anyone who is not an admin from editing items. 

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/adding-edit-screen-condition.png" caption="Configuring the Edit Screen" /%}

Let’s take a look at how to create this step by step.

### **Step 1:**

Select a column value from your data as the thing that will be tested against the condition. In this example, we’ve selected the User Profile `Role` column. 

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/choosing-a-column-value.png" caption="" /%}

### **Step 2:**

Choose the condition type or ‘operator’. In this example, we have chosen `Is`. 

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/choosing-the-operator.png" caption="" /%}

### Step 3:

Finally, pick the value that your condition will be testing for. In this example, the condition will check if this value matches the first value we added — because we used the operator `Is`. 

This example uses a **Custom Value** that we add manually in Glide. If you click the dropdown menu, you can also select column values. 

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/adding-a-custom-value.png" caption="" /%}

## What values do I have access to in conditions?

### Current Row

Depending on the screen you’re currently viewing, you’ll have access to the data for the current row. 

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/current-row-view.png" caption="" /%}

### User Profile

If you’ve configured a User Profile table for your project, the data related to the currently logged in user is available to use for conditions. For example, you can filter a list so that it only displays information that is relevant to the logged in user based on a column in their user profile. 

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/using-user-profile-values-for-conditions.png" caption="" /%}

### **Containing Screen Context**

When you are creating conditions, you may see another category called 'Screen'.

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/using-screen-condition.png" caption="" /%}

This lets you choose values from the current screen – enabling you to do things like:

- Show items where Category is the same as Category (to show a list of items that relate to this one)
- Show items where Price is equal to Price (to show a list of items which have the same price as the current item)

{% callout title="" %}
We’ll show some more examples of this in the Advanced Conditions section below.
{% /callout %}

## Filtering

By default, lists & collections show all the rows coming from your data source. However, you can filter the rows that appear in your list. You can also enable in-app filtering so that users can change the filtering themselves.

### Filtering a list or collection

To filter items out of a list or collection, visit the component’s options panel. 

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/filtering-items-of-a-list.png" caption="" /%}

To set a filter, click Add Filter. A new filter will be added by default. 

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/adding-a-filter.png" caption="" /%}

The top dropdown shows all the columns in the table that your list is connected to. For example, our list shows products and so the columns we see are all the columns in our Products table. 

Filtering will not be able to see items that you filter out of a list. For example, in the app below we add a filter that shows only the employees where the Is Manager column contains 'Yes'.

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/filtering.png" caption="" /%}

The filter is created by checking certain criteria on a column in your sheet. In the example below, we have a list of employees. Some are managers, some are not. We have a column in our sheet that identifies `Top Managers` and then values in that column of `Yes` and `No.`

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/a-column-used-in-a-filter.png" caption="" /%}

In Glide, we select that column as the **Filter** column and then choose the criteria by which we are filtering.

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/adding-a-filter%20(1).png" caption="" /%}

We use the same sheet as a source in multiple tabs and then filter each one in different ways. For example, the app below shows the same staff list in three different tabs. Each tab has the same exact source sheet, but each one is filtered to show only those with a different diet.

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/different-tabs-with-different-filters-with-the-same-data-table.png" caption="" /%}

### Multiple filters

We can use multiple filters on a list with AND + OR logic. In the following example, we add two filters to our list of cookies to show only items that include 'coconut' or 'coffee' in the `Name` column.

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/adding-filters-with-and-or.png" caption="" /%}

### In-app filtering

You can also enable in-app filtering for your users so they can change the items that are displayed in the list. This is particularly useful for long lists of items. In the example below, we enable **in-app filter** based on the `Size` column which allows users to see only the drinks with certain sizes.

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/in-app-filtering.png" caption="" /%}

## Visibility

### Tab Visibility

You can hide and show different tabs based on [User Profile](https://www.notion.so/all/topics/security-and-user-data/user-profiles) data. For example, if you have a look at this app below, you'll see 3 tabs.

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/an-app-with-three-tabs.png" caption="" /%}

However, to allow administrators to process these feature requests we have two other tabs that have visibility conditions set on them. These tabs only show when the logged-in user's Admin property is TRUE.

You can add conditions in the Options section of each tab 👇

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/visibility-condition%20(1).png" caption="" /%}

### Component Visibility

Component visibility allows you to hide or show components based on certain conditions. In the app below we have set numerous component visibility rules that make our party invitation dynamic, depending on the RSVP of the user.

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/component-visibility.png" caption="" /%}

To set a condition on a component's visibility, head to the Options tab in the component's settings. There you will be able to add a condition based on the data in your sheet. Once you add this condition, the component may disappear from the app's screen, but you can still access it on the right-hand side of Glide.

On the first screen of our form below we can initially see two text entry components and one choice component. However, on the right-hand side image, we can see all our hidden components are visible when their conditions are met.

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/component-visibility-1.png" caption="" /%}

{% callout title="" %}
In Pages, you can use Containers to control the visibility of multiple components at the same time. Learn more [here](reference/components/container-component#conditions).
{% /callout %}

## **Conditional add, edit & delete**

Allowing users to add, edit & delete records can be very powerful, but you’ll almost certainly want to restrict this to only certain items or to certain users.

{% callout title="" %}
In Pages, this is a lot more complex, but we will be making it a lot easier in the future. For now, check out our guide on Filtering & Visibility conditions to learn more.
{% /callout %}

### Conditional adding

To set conditions on whether people can add items to a list, go to the configuration panel of your list and enable the Add Screen. 

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/conditional-adding.png" caption="" /%}

You could set conditions like:

- Only allow adding items if the total number of items is below 100
- Only allow a user to add items if they are an Admin
- Only allow users to add items if they have completed their user profile

### Conditional editing

To set conditions on whether people can edit items in your lists, go to the details screen for an item and enable the Edit Screen. This condition will be set on all items in that list. 

{% figure src="/docs/reference/conditions/conditions-filtering-and-visibility/conditional-editing.png" caption="" /%}

### Conditional Delete

You can also set conditions for deleting items, the same way you set conditions for editing items.
