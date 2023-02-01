---
title: Introduction to Actions
description: Add actions that users can trigger.
video: https://www.youtu.be/RX-snC6BwCE
leadBackgroundColor: "#2C2855"
leadGraphic: /docs/guides/core/graphics/actions-graphic.svg
slug: actions
---

A useful way to think about apps is through the way users interact with them. Two very basic levels of interaction are **viewing** & **editing** data.

But very often, apps need to be able to perform Actions.

For example, in this app, we have a [Button](/docs/button-component) which when clicked will take people to a website. This is because the button has the action [Open Link](/docs/open-link).

{% figure src="/docs/guides/intermediate/actions/Open_link_action_on_button.png" caption="" /%}

You may not have thought of it this way before, but opening a [Form](/docs/forms) is a type of Action. If you look closely in the [Form Button](/docs/form-button)'s configuration, you will see the Action 'Show Form' enabled.

{% figure src="/docs/guides/intermediate/actions/Show_form_screen_action.png" caption="" /%}

Open Link and [Show Form Screen](/docs/show-form-screen) are examples of **Simple Actions**, but Glide also has an Action Editor where you can join Actions together into more complex workflows. We call these **Custom Actions**.

# Types of Actions

There are many different Actions in Glide. Mostly, they fall into four categories.

- Data
- Navigation
- Communication
- Advanced

Data Actions use or change data. These include things like

- [Add Row](/docs/add-row)
- [Set Column Values](/docs/set-column-values)
- [Upload image](/docs/upload-image)
- [Copy to Clipboard](/docs/copy-to-clipboard)

Navigation Actions show or move users to different screens. For example:

- [Go to Tab](/docs/go-to-tab)
- [Go Back](/docs/go-back)
- [Show Notification](/docs/show-notification)
- [View Address on Map](/docs/view-address-on-map)
- [Show Edit Screen](/docs/show-edit-screen)

Communication Actions trigger things like emails, text messages, and phone calls.

Generally, Actions are the same in Apps & Pages, but you'll find some actions only live in certain places.

# Action locations

There are various places where you can add Actions.

## Component actions

{% figure src="/docs/guides/intermediate/actions/Components_actions.png" caption="" /%}

Some [Components](/docs/components) have Actions, and some do not. If a Component has the option for an Action, you’ll see it in the component’s configuration.

## List actions

The default Action for clicking on a list item is to view that item’s [Details Screen](/docs/screens#details-screen). This is such a normal behavior, you might not have thought of it as an Action before.

But you can change this to a number of other Actions. For example, you could have;

- A list of contacts that when tapped, triggers the [Dial Phone Number](/docs/dial-phone-number) Action.
- A list of inventory items that when tapped, changes the number in the inventory.

In Apps, [Lists](/docs/screens###list-screens) have only a single Action, but in Pages, [Collections](/docs/collection-component) have many different Actions.

This table is a good example. It shows a lot of information but is really compact. 

1. There’s search and filtering 
2. At the top of the List, we have our main Actions and a dropdown menu for even more. 
3. Each item has its own Buttons, to edit or contact the landlord 
4. Each item also has its own dropdown menu.

{% figure src="/docs/guides/intermediate/actions/list-actions.png" caption="" /%}

## On Submit Actions

{% figure src="/docs/guides/intermediate/actions/On_submit_actions.png" caption="" /%}

Another type of Action is the On Submit Action.

After users add/edit or submit Forms — you have the option to add Actions that trigger on submit.

# Where can you add actions?

Here is a basic list of the places you can add Actions. This is likely to change over time so may not be comprehensive.

## Apps

- Components
    - Title
    - Buttons
    - Image
    - Action text
    - Rich text
- On submit
- Lists

## Pages

- Collections
    - Title bar
    - Item click
    - Collection item
- Components
    - Title
    - Button
    - Image
    - Action text
    - Rich text
    - Hint
- On submit

## Single Actions

Components like **Button** and [Image](/docs/image-component) allow you to add Actions to them. When these Components are tapped, these Actions trigger different functionalities in your App.

You can also enable Actions on list items. By default, list items have the action [Show Details Screen](/docs/screens#details-screen) which takes the user to the [Details Layout](/docs/details-layout)for that row. However, you can change this Action and have lists of items that perform other Actions when they are tapped.

In the image below you can see an inline list with the default View Details action in place. However, after we change the action to **Open Link** then each list item opens a link instead.

{% figure src="/docs/guides/intermediate/actions/setting-up-open-link.png" caption="" /%}

Simple Actions can be joined together into Custom Actions. 

## Custom Actions

### Creating a custom action

To create a Custom Action, navigate to the Features tab of a Component or List Layout, and under the Action dropdown, click 'Create new action...'. This will open the Action Editor.

{% figure src="/docs/guides/intermediate/actions/custom-actions.png" caption="" /%}

### Sequences

The first part of what makes the Custom Actions powerful is the ability to have **sequences** of different Actions be triggered – as opposed to just a Single Action.

{% figure src="/docs/guides/intermediate/actions/action-sequence.png" caption="" /%}

To add new actions to the flow, hover just underneath an action and click the plus button.

{% figure src="/docs/guides/intermediate/actions/add-a-new-action.png" caption="" /%}

To edit actions, click on the action.

{% figure src="/docs/guides/intermediate/actions/edit-action.png" caption="" /%}

To re-order actions, click and drag the action.

{% figure src="/docs/guides/intermediate/actions/re-order-actions.png" caption="" /%}

To delete actions, open the action, and click the trash icon.
   
{% figure src="/docs/guides/intermediate/actions/delete-actiosn.png" caption="" /%}

### Conditions

You may only want a single sequence of actions to be triggered every time, but often you will want to create different scenarios where different actions happen, depending on conditions you set. Therefore, the second dimension in building custom actions is working with **Conditions**.

To add a condition to one of your sequences, click the plus icon at the top of a sequence.

{% figure src="/docs/guides/intermediate/actions/add-condition.png" caption="" /%}

Whatever conditions you set here will mean that the action sequence below will only run when your condition is met.

If the condition is not met, the action sequence won't run. However, conditions often need other scenarios to determine what will happen if the initial condition is not met.

To do this, we can add an 'Else' to our condition. With an else added, if the first condition in our action editor is not met, then the actions under the else section will be triggered.

{% figure src="/docs/guides/intermediate/actions/add-else-condition.png" caption="" /%}

You can also add many different conditions to your custom action by adding other conditions.

{% figure src="/docs/guides/intermediate/actions/complecated-action-sequence.png" caption="" /%}