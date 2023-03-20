---
title: Screen Types
description: Understand the different types of screens.
video:
slug: screens
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

In our core guide on [Data to Layout](/docs/data-to-layout) — we said that ‘Tables become Tabs'. This is, in fact, a bit of a simplification.

Every tab has a top-level screen — which is often a List Screen, but it can also be a [Details Screen](/docs/details-layout). It's better to think of Tabs as windows through which you can visit many screens.

For example, below, there is a team directory with only two tabs (Employees and Locations). It's possible to visit a location in the locations tab (right image), but we can also visit a location in the team members tab by navigating to a team member and then clicking their location (left image).

Notice on the left image, we're still _inside_ the Employees tab, but we're on a different screen.

{% figure src="/docs/guides/intermediate/screen-types/same-tab-different-screens.png" caption="Navigating to different screens from tabs" /%}

When you're building simple Apps & Pages, you don't need to think too much about what type of screen you're on. Observing how the components panel changes when you move from screen to screen will help you orient yourself.

But when you're building more complex projects, it's important to know all the different types of screens and how they relate to your data, particularly as Apps & Pages are slightly different.

{% callout %}
In the future, Apps & Pages will become more unified, but for now, it's important to know the differences.
{% /callout %}

## Screens in Apps

### List screens

When you create a new tab in Apps and choose a table with multiple rows, Glide will choose a List Screen layout. A List Screen shows all the rows in your table in a configurable layout.

{% figure src="/docs/guides/intermediate/screen-types/list-layouts.png" caption="List layouts in Glide" /%}

On a List Screen, the components panel on the left shows the [Favorite Component](/docs/favorite-component), search bar, and a list.

{% figure src="/docs/guides/intermediate/screen-types/list-screen-items.png" caption="List screen items" /%}

Beyond these three components, a List Screen is not editable in Apps. If you want to have a list and other components on the same screen, you'll need to turn your tab into a Details Screen.

### Details Screen

When you click on a list item, you get taken to that item's Details Screen. A Details Screen represents an entire row, whereas a List Screen represents the entire table.

{% figure src="/docs/guides/intermediate/screen-types/list-and-details-layouts.png" caption="A List Screen showing data in a whole table (left) and a Detail Screen showing the data in a row from a table (right)" /%}

But Details screens can also be the top-level layout for your tabs. You'll see ‘Details Screen' as a choice in the set of Layout Options.

When you set this as your tab's layout, the screen will only show the top row of data in your table.

{% figure src="/docs/guides/intermediate/screen-types/detail-screen-explained.png" caption="Data from a single row displayed in a Details screen" /%}

If you are on a Details Screen, the Data Panel appears. When you click on this, you'll see the underlying data for the screen. We'll cover more about this below.

{% figure src="/docs/guides/intermediate/screen-types/data-panel.png" caption="Data panel" /%}

### Add Screen

When you trigger an add screen, you'll see the components panel change to show a new set of components. These are your add screen components.

Glide will create entry components for all the columns it finds in your table. For example, if you trigger the add screen on a table filled with employee data, you'll see entry components for every column in that table.

{% figure src="/docs/guides/intermediate/screen-types/add-item-explained.png" caption="Adding an item in your project will add a new row to your data source" /%}

But you can configure this add screen however you like, meaning that you can allow people to add new rows to your table, but only add data in certain columns.

{% figure src="/docs/guides/intermediate/screen-types/using-only-few-columns.png" caption="Add screen with specific columns provided" /%}

### Edit Screen

By default, all details screens have editing enabled. You can enable or disable adding on list screens in the detail's screen configuration.

{% figure src="/docs/guides/intermediate/screen-types/editing-is-enabled-by-default.png" caption="Editing is enabled by default" /%}

Just like adding, you can configure this screen however you like, meaning that you can allow people to edit only certain columns and leave others protected from editing.

{% cta title="Adding, Editing, & Forms" description="Learn more about adding, editing and deleting" url="/docs/add-edit" /%}

## Actions trigger screens

It's important to realize that, in Apps, most screens you navigate to are triggered by an action.

By default, the action for a list is to ‘Show Details Screen for Current Item'.

{% figure src="/docs/guides/intermediate/screen-types/default-action-of-inline-list.png" caption="Default action for Inline Lists" /%}

And when you add a Form Button, the default action is to ‘Show Form Screen'.

{% figure src="/docs/guides/intermediate/screen-types/default-open-form-action-in-apps.png" caption="Default action for Form Buttons" /%}

This is even more important to consider with Pages, where most screens are triggered by Actions.

## Screens in Pages

{% callout %}
Apps and Pages are very similar but have some differences in the way you work with Screens. We will be unifying Apps and Pages into a single experience in the near future, but for now, it's important to understand the differences.
{% /callout %}

### Collection Screen

When you create a new tab in Pages and choose a table with multiple rows, Glide will choose a Collection Screen layout. A Collection Screen is a top-level screen that shows all the rows in your table, and you can choose between different list styles.

{% figure src="/docs/guides/intermediate/screen-types/collection-screen.png" caption="Collection screen" /%}

On a Collection Screen the components panel on the left shows a single Collection component.

### Custom Screen

The other type of top-level screen you can have for a tab is a Custom Screen. A custom screen can have as many components as you like, as opposed to a Collection Screen, which can only have a Collection. (Click and zoom in on the image below to see this comparison clearly)

{% figure src="/docs/guides/intermediate/screen-types/comparison-of-a-collection-screen-and-custom-screen.png" caption="Comparison of a Collection screen and Custom screen" /%}

If you switch a Tab from a Collection Screen to a Custom Layout, the Collection will remain, but you will be able to add other components.

Similarly, if you add Components to a Collection Screen, the layout will change to a Custom Layout automatically.

{% figure src="/docs/guides/intermediate/screen-types/adding-components-to-a-collection-will-convert-the-collection-into-a-custom-screen.png" caption="Adding components to a Collection screen" /%}

### Details Screen

When you click on a Collection Item, you get taken to that item's Details Screen. A Details Screen represents an entire row, whereas a Collection Screen represents the entire table.

Details screens are like Custom Screens in that you can add multiple components to them, but they are sub-pages. They are not at the top level of your tab. You can see this reflected in the breadcrumb navigation in Glide and the Breadcrumb Component if you have it added on a Page.

{% figure src="/docs/guides/intermediate/screen-types/breadcrumbs.png" caption="Breadcrumb component" /%}

### New Screen Templates

In Pages, the New Tab menu has pre-built Screens you can add to your project.

{% figure src="/docs/guides/intermediate/screen-types/adding-a-new-tab.png" caption="Adding a new tab" /%}

Most of these will create a Custom Screen that has pre-configured components and also add the necessary pre-built Glide Tables to the Data Editor.

This is a really easy way of creating forms and other screen types. However, you may also want to add a component that triggers a form screen with an action.

### Form Screen Action

For example, say you're working on a Property Manager project and on the details screen of a property, you want a button called ‘Log Issue.' This will trigger a new form screen that will submit a new issue to the `Issues` table. You can add a button to that screen and assign the Show Form screen action.

{% figure src="/docs/guides/intermediate/screen-types/form-screen.png" caption="Form screen adding a new row to the data source" /%}

When you add the form screen action, you configure which table it will populate.

{% figure src="/docs/guides/intermediate/screen-types/choocing-a-table-for-a-form.png" caption="Choosing a table for the form to populate" /%}

When you open that form screen, you can add fields that map to the columns of that table. As always, Glide will add all of these for you, but you can customize this screen however you like.

### Edit Screen Action

You can enable add and edit screens simply in Pages by toggling the switches in a collection.

{% figure src="/docs/guides/intermediate/screen-types/edit-scree-action.png" caption="Enabling actions in a Collection" /%}

However, you can also configure other components with the Edit Screen action to trigger an edit screen.

{% figure src="/docs/guides/intermediate/screen-types/edit-screen-action.png" caption="Edit screen action" /%}

## Targets

Often, a new screen will pop out and display over the main content you're working with. This is called an overlay.

{% figure src="/docs/guides/intermediate/screen-types/layout-view.png" caption="Overlay in Glide Pages" /%}

By default, Details Screen opens in Current, and Edit Screen opens in overlays in Pages. But you can change this behavior.

Whether your action is Show Details, Show Form Screen, or Show Edit Screen – in the action configuration, you'll see four options for the ‘Target': Current, Main, Small overlay, and Large overlay.

{% figure src="/docs/guides/intermediate/screen-types/overlay-options.png" caption="Target options" /%}

### Small and Large Overlay

**Small overlay** and **Large overlay** will open the new screen as a small or large overlay. These are the simplest to understand. The new screen is ‘overlayed' on the old screen.

{% figure src="/docs/guides/intermediate/screen-types/small-vs-large-overlay.png" caption="Small overlay and Large overlay" /%}

### Current

Current replaces the current screen with the new screen. For example;

- If the current screen is an overlay, and you trigger an open screen action like Show Form Screen — then the overlay will change to show that new Form Screen.
- If the current screen is the main screen (not an overlay), and you trigger an open screen action like Show Form Screen, — then the new screen will replace that main screen.

### Main

Main, replaces the main screen with the new screen. For example;

- If the current screen is an overlay, and you trigger an open screen action like Show Form Screen, then the overlay will close, and the main screen (the screen behind the overlay) will be replaced by the new form screen.
- If the current screen is the main screen (not an overlay), and you trigger an open screen action like Show Form Screen, then the main screen will be replaced by the new form screen.

## User Profile Screen

The user profile screen is a details screen showing a row in the user profile's table. You can configure it exactly like a normal details screen. This screen can be accessed by the user by clicking on their profile image, or triggered by the Show User Profile Screen action.

{% figure src="/docs/guides/intermediate/screen-types/user-profile-screen.png" caption="User profile screens" /%}

## Other Screens

There are lots of other new screens that appear, but they don't have components on them and are therefore not configurable in the same way. They are:

- Open link opens a web browser
- The chat screen in apps lets users chat with each other
- The cart screen in apps lets people purchase items
- The Notes component in apps has its own full-screen writing area
- The Event Picker component opens its own full-screen calendar
- The sign-in screen is where people sign into and out of the app.
