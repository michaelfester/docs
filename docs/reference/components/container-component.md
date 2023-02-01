---
title: Container Component
description: Group components together
slug: container-component
---

{% callout title="" %}
The Container Component is only available in Glide [Pages](/docs/introduction-to-pages), not Glide [Apps](/docs/introduction-to-apps).
{% /callout %}

The **Container** component acts as a parent, into which you can add child Components. This allows you to style, arrange, and add conditions to groups of [Components](/docs/reference/components). 

{% figure src="/docs/reference/components/container/adding-components-in-to-container.png" caption="" /%}

## Configure the Container Component

### Layout

In the **General** tab on the right side of the **Layout Editor**, locate the **Layout** section. The Container component allows you to create column layouts and arrange components side-by-side. For example, the project below shows a side-by-side layout using two columns. 

{% figure src="/docs/reference/components/container/layout-styles-of-container.png" caption="" /%}

When you choose a layout that is more than one column you’ll see sections underneath the Container with dividers. This shows you the different sections for your container which will change depending on the number of columns you have. 

{% figure src="/docs/reference/components/container/showing-the-number-of-columns.png" caption="" /%}

### Design

In the **General** tab on the right side of the Layout Editor, locate the **Design** section. The Container component allows you to configure the following design options:

- Choose the **Background** for your Container - **None**, **Card**, **Accent**, **Dark**, **Highlight**, or **Image.**
- Choose the **Padding** - **Normal**, **Large**, or **XLarge**
- Choose the **Width** - **Large**, **Medium**, or **Small**
- Set the **Alignment** for the components - **Center**, or **Top**

{% figure src="/docs/reference/components/container/designing-container.png" caption="" /%}

## Conditions

Sometimes you want to set the same [Visibility Condition](/docs/visibility-conditions) on multiple components. Rather than creating the same condition on each one, you can group them all into a container and set one condition on that container. For example, in the project below there are two containers. One container is set to be visible if a user is an admin and the other is visible to all users.

{% figure src="/ocs/reference/components/container/container-conditions.png" caption="" /%}