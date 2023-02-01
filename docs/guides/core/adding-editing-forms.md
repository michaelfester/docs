---
title: Adding, Editing, and Forms
description: Let users add and edit your data in different ways. 
video:
slug: add-edit
---

With Glide, you can display your data in beautiful ways. But you can also give access to users to be able to edit specific data while restricting access to fields that should not be changed.

This guide will give you an overview of adding, editing, deleting, and forms in both [Apps](https://www.glideapps.com/docs/apps) and [Pages](https://www.glideapps.com/docs/pages).

{% figure src="/docs/guides/core/adding-editing-forms/add-screen-and-edit-screen.png" caption="Opening an add and edit screen in Glide Apps" /%}

## Glide Apps

### Adding

The **Add Screen** is triggered on a [List Screen](https://www.glideapps.com/docs/screens), and it allows users to add a new item to that list.

By default, all new **List Screens** have adding enabled. You can enable or disable adding on **List Screens** in the list’s configuration.

{% figure src="/docs/guides/core/adding-editing-forms/add-item-is-enabled-by-default-in-all-list-screens.png" caption="Enabling the Add Screen inside the List Screen’s settings" /%}

When you trigger an **Add Screen**, you’ll see the components panel change to show a new set of [Components](https://www.glideapps.com/docs/components). These are your Add Screen components.

{% figure src="/docs/guides/core/adding-editing-forms/add-screen-components.png" caption="The Add Screen components appear in the Screen panel when you open an Add Screen" /%}

If a user puts data in here and then submits using the top right button, a new row will appear in your table.

Glide will create entry components for all the columns it finds in your table. For example, if you trigger the **Add Screen** on a table filled with information on job candidates, you’ll see entry components for every column in that table.

{% figure src="/docs/guides/core/adding-editing-forms/glide-adds-entry-components-for-all-the-columns-in-your-table.png" caption="The Add Screen for a table filled with candidate data" /%}

But you can configure this screen however you like, meaning that you can allow people to add new rows to your table but only add data in certain columns.

You can also mark certain fields as required, meaning that a user will only be able to submit the new item if that field is filled out. You’ll find this option in each component’s configuration.

### Editing

The **Edit Screen** is triggered on a [Details Screen](https://www.glideapps.com/docs/details-layout) — and allows the user to edit that particular item/row. By default, all **Details Screens** have editing enabled. You can enable or disable editing on the **Details Screen’s** configuration.

{% figure src="/docs/guides/core/adding-editing-forms/edit-item-is-enabled-by-default-in-all-list-screens%20(1).png" caption="Enabling the Edit Screen inside the Details Screen’s settings" /%}

When you trigger the **Edit Screen**, you’ll see the components panel change to show a new set of Components. These are your **Edit Screen** components.

{% figure src="/docs/guides/core/adding-editing-forms/edit-screen-and-the-data-row-being-eddited.png" caption="The Edit Screen components allow users to edit the data in that row" /%}

Glide will create entry components for all the columns it finds in your table. For example, if you trigger the **Edit Screen** on an interview candidate, you’ll see entry components for every column in that row. But you can configure this screen however you like, meaning that you can allow people to edit certain columns in your row.

### Deleting

Within the same configuration on your **Details Screen**, you can also enable deleting. When a user deletes a row, it will be cleared from your data source.

{% figure src="/docs/guides/core/adding-editing-forms/delete-option.png" caption="Allowing users to delete items can be found in the same place as the Edit Screen toggle" /%}

You may have noticed in the images above that it’s possible to add conditions on whether someone can Add, Edit or Delete.

## Forms

**Form Screens** are triggered by the [Form Action](https://www.glideapps.com/docs/show-form-screen) — and they can submit data to any table in your project. This is useful if you want to send data to a table without having to navigate to a **List Screen** that’s connected to that table.

For example, say you’re building a [Real Estate Manager](https://www.glideapps.com/templates/property-manager-zi). The details screen for each property could have a button on it called 'Log Issue'. This would trigger a form screen that would send a new record to the **`Issues`** table.

{% figure src="/docs/guides/core/adding-editing-forms/form-screen%20(1).png" caption="The form button can send a new row submitted by the user to any table in your project" /%}

You could then use that **`Issues`** table in another area of your app for another user (like a field service worker) to show a [Checklist](https://www.glideapps.com/docs/checklist-layout) of all properties to visit and fix.

{% figure src="/docs/guides/core/adding-editing-forms/checklist-view.png" caption="" /%}

Building a new screen based on the issues submitted by a Form

The Form Action can be added to [Buttons](https://www.glideapps.com/docs/button-component) and other Components like [Image](https://www.glideapps.com/docs/image-component) and [Action Text](https://www.glideapps.com/docs/action-text).

## Glide Pages

### Easy Configuration Settings

When you create a new tab from Data in a Glide Page — you’ll get a screen with a Collection component on it that looks like this. 

{% figure src="/docs/guides/core/adding-editing-forms/feature-and-components-when-first-creating-a-tab-in-glide-pahes.png" caption="Features and components when first creating a tab in Glide Pages" /%}

On the right hand side, you’ll see the configuration for your collection. On the bottom right, you’ll see options to enable add, edit, and delete. Add and edit are enabled by default. 

{% figure src="/docs/guides/core/adding-editing-forms/collections-configurations-panel.png" caption="Collections configurtion panel" /%}

These are just high-level, easy controls for the collection on this screen. Toggling these actually changes the action settings within the Collection component on that page. 

{% figure src="/docs/guides/core/adding-editing-forms/easy-controls-for-collections.png" caption="Easy controls in Collections" /%}

Mostly, you don’t need to think about these but if you change your Tab’s style to ‘Custom’ or add new components — you will have to edit these settings from within the Collection Component. 

{% figure src="/docs/guides/core/adding-editing-forms/collections-inside-custom-styles-needs-to-beconfigured-seperately.png" caption="Collections inside custom styles needs to be configured seperately" /%}

### Custom Configuration

#### Edit the default actions

You can configure and edit the default add/edit/delete actions that Glide sets for you. To do this, click on the Collection component and navigate to the Actions tab. Here you can enable Advanced Actions.

{% figure src="/docs/guides/core/adding-editing-forms/editing-the-default-actions.png" caption="Configuring and editing the default add/edit/delete actions" /%}

This will show the Action configuration for your collection. If you want to switch back to the default actions, you can reset your collection to the default actions. 

{% figure src="/docs/guides/core/adding-editing-forms/switch-back-to-default-actions.png" caption="Switching back to default actions" /%}

#### Create new actions

The default buttons for adding, editing and deleting are good for most projects, but you may wish to customize this further by adding actions to add, edit, or delete in other locations. 

To do this, you’ll want to add a component that supports actions and then add one of the following actions to it. 

- Show Form Screen — to add new rows to your table
- Show Edit Screen  — to edit existing rows in your table
- Delete Row — to delete rows from your table

For example, here is a details screen that has a button on it with the [Show Edit Screen](https://www.glideapps.com/docs/show-edit-screen) action.

{% figure src="/docs/guides/core/adding-editing-forms/adding-show-edit-screen-action-to-a-list-component.png" caption="The Title Component (at the top) has a button it with the Show Edit Screen action on it" /%}


And here is a Details screen with a button configured with the Delete Row action. 

{% figure src="/docs/guides/core/adding-editing-forms/adding-delete-this-row-action-to-a-title-component.png" caption="The Title Component (at the top) has a button it with the Delete Row action on it" /%}


## Additional Values

Add, Edit, and Form screens also have additional values that you can pass along to your table on the user’s behalf.

For example, say we’re submitting an issue on a property in our Property Manager App. We want to know which property the issue refers to. But we don’t want our user to have to enter that — because it’s obvious to them.

When they are on a specific property and they hit 'Log Issue', they want the app to log which property they are in. They don’t want to have to type that value in the form.

Similarly, it would also be useful to know *when* the issue was logged. But they don’t want to have to type the date and time *every single time* they submit an issue — the app should do that for them.

This is a bit more advanced and we recommend looking at this after you’ve covered everything in Core Concepts. However, if you’re interested in how this works, read the guides below.

- [Special Values](https://www.glideapps.com/docs/introduction-to-values)
- [Column Values](https://www.glideapps.com/docs/column-values)
- [User Profile Columns](https://www.glideapps.com/docsuser-profile-columns)