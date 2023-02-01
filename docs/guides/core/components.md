---
title: Introduction to Components
description: Learn what components can do and how you can work with them.
video:
leadBackgroundColor: "#B1C3E6"
leadGraphic: /docs/guides/core/graphics/components-graphic.svg
slug: components
---

## Everything is a Component

When you're designing in Glide, everything is a [Screen](/docs/screens), and every Screen has Components on it. Components display and let your users interact with your data in powerful ways.

Some Components like [Lists](/docs/screens/#list-screens) & [Collections](/docs/collection-component) show multiple rows of data. Some Components like [Action Text](/docs/action-text) display only a single value, and others like the [Container](/docs/container-pages) help you arrange your Components into groups.

You can always see what Components are on a screen in the **Screen Panel** on the left.

{% figure src="/docs/guides/core/components/components-section.png" caption="The **Screen Panel** shows the different components on the current screen" /%}

Some screens (like list screens in [Apps](/docs/introduction-to-apps) shown above) may limit you from adding new components. But most screens, especially in [Pages](/docs/introduction-to-pages), let you add Components wherever you like.

{% figure src="/docs/guides/core/components/adding-a-new-component-in-pages.png" caption="Dragging a new component into the **Screen Panel** will add it to your screen" /%}

Even if you can't add/remove Components on a screen, you can always edit them. To edit Components; click one on the left, and configure the component's settings on the right.

{% figure src="/docs/guides/core/components/component-configuration%20(1).png" caption="Clicking on a component in the **Screen Panel** will open its configuration settings on the right" /%}

{% callout %}
**Apps** and **Pages** share many Components, but sometimes you will find one that isn’t available in the other. For example, the [Kanban Layout](/docs/kanban-board-pages) is only available in Pages, and **Floating Button** is only available in Apps.
{% /callout %}

## Configuring Components

Some Components are very simple, while others are much more complex. However, most Components have one or more of the following areas in their settings.

1. **Data**
2. **Design**
3. **Action**
4. **Options**

### Data

Data (sometimes called 'Content' or 'Items Data') is where you configure what the Component is displaying. Some Components can only display a single value from your data, and others let you show multiple properties.

{% figure src="/docs/guides/core/components/data-shown-in-a-page-collection.png" caption="The configuration for the Collection Component (on the left) can show four columns from your table (right)" /%}

### Design

Design lets you tweak a Component to style it how you like. With Lists and Collections, the settings here can be quite extensive. But with simple Components like the [Text Component](/docs/text-component), the settings are very minimal.

{% figure src="/docs/guides/core/components/designing-a-component.png" caption="Configuring the design options in the Container Component" /%}

### Action

Many Components have the option to add [Actions](/docs/actions). Sometimes you can add only a single action (like the [Button Component](/docs/button-component) in **Apps**), and sometimes you can add many (like the [Title Component](/docs/title-component-pages) in **Pages**).

{% figure src="/docs/guides/core/components/actions-in-components.png" caption="The Action settings in the Button Component’s configuration panel" /%}

### Options

Most Components have only two sections. The General tab and the Options tab. Most Components have only Visibility settings here, but **Lists** & **Collections** have many other options.

{% figure src="/docs/guides/core/components/component-settings.png" caption="The Options tab within a component’s configuration" /%}

## Editing Components

### Deleting

When you delete Components, they don't affect the data in your table. If you accidentally delete a Component, you can hit Command Z (Mac) or Control Z (PC) to bring it back. This also works for many of the other Actions you take while building your app. Alternatively, you can click the Undo or Redo buttons in the bottom left of your screen.

{% figure src="/docs/guides/core/components/deleting-a-component.png" caption="Deleting a Rich Text component" /%}

### Duplicating

To duplicate a Component, click the duplicate icon. Bear in mind this will result in multiple Components being connected to the same column - which in some circumstances could cause issues for your data.

{% figure src="/docs/guides/core/components/duplicating-a-component.png" caption="Duplicating a Title component" /%}

### Copying & Pasting

You can copy & paste Components within the same project by using commands or by right-clicking to view the dropdown menu with the different options. This allows us to save time when it comes to recreating screens.

{% figure src="/docs/guides/core/components/copying-&-pasting-components.png" caption="Right-clicking a component brings up a contextual menu where you can copy/paste" /%}

### Renaming

You can rename Components in Glide to help you organize and see them better. Just double-click on the Component and rename it. This only affects how you see that Component in Glide and does not affect your project.

{% figure src="/docs/guides/core/components/renamng-a-component.png" caption="Renaming a component" /%}
