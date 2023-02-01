---
title: Button Component
description: Use buttons to trigger actions in your projects
slug: button-components
---

{% callout title="" %}
The Button Component is available in both Glide [Apps](/docs/introduction-to-apps) and Glide [Pages](/docs/introduction-to-pages), but options may differ slightly.
{% /callout %}

Buttons can be configured to trigger different [Actions](/docs/actions) when your users tap or click on them.

## In Apps

### Types of Button Components

- The **Button** component adds a single button to your App.
- The **Button Bar** component adds two buttons side by side, each with its own configurable settings and actions.
- The **Form Button** component adds a single button with the default **Show Form Screen** action pre-configured.
- The **Scan Barcode Button** component adds a single button with the default **Scan Bardcode** action pre-configured.
- The **Buy Button** component allows users to purchase items in your projects.

{% cta title="Buy Button" description="Learn more about configuring the Buy Button here." url="/docs/buy-button" /%}

### Configure a button component

In the **General** tab on the right side of the Layout Editor, locate the **Design** section.

- Select a **Label** for the button. This can be a column from your data source or [Custom Values](/docs/custom-values).
- Select a **Mood** for the button to change its color.
- Choose an **Icon** to appear in front of the label text.
- Choose an option in the **Show as** field to modify the style for your button.

{% figure src="/docs/reference/components/button-component/button-configuration-apps.png" caption="" /%}

{% callout title="" %}
The default color of the Button component is defined by your app’s accent color.
{% /callout %}

### Actions

This is the behavior that will be triggered when users tap on the Button component. You can choose from any of the actions available in Glide, or you can **create a new action**.

1. In **General > Action**, select the menu arrows.
2. In **Configure Action**, select the dropdown menu to view action options.
3. Select the action to be triggered when users tap your Button component.
4. If prompted, apply any additional settings in **Configure Action**.

{% figure src="/docs/reference/components/button-component/action-configuration-apps.png" caption="" /%}

## In Pages

The **Button** (or **Button Block**) component in Glide Pages allows you to add one or several buttons in a horizontal layout. Although it’s very similar to the [Button Bar](/docs/button-bar) component in an Apps, there are unique design options, including **Alignment** and **Size.** The **Label** of your buttons is also controlled within its Action settings**.**

### Options

In the **General** tab on the right side of the Layout Editor, locate the **Options** section.

- Select the **Alignment** for your button. You can choose **Left**, **Center**, or **Right**.
- Select the **Size** of your button. **Auto** will adjust the button’s width depending on the length of the label. **Wide** will give your button extra padding even if the label is short.

{% figure src="/docs/reference/components/button-component/configuring-button-component-pages.png" caption="" /%}

### Actions

Actions can be configured the same way as mentioned above for Apps. The difference with Pages though is that you can include multiple buttons by adding additional actions to the component. Inside each action, **Title** fields act as each button’s label.

{% figure src="/docs/reference/components/button-component/button-component-actions-oages.png" caption="" /%}
