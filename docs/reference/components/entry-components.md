---
title: Entry Components
description: Enter text, numbers, email addresses, or phone numbers
slug: entry-components
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

Entry components can be used in [Forms](/docs/forms) or [Details/Custom screens](/docs/screens) to allow users to add or edit data in your project. Depending on the type of entry component that you select, users will be limited to the type of data they are able to input.

## Types of entry components

- The **Text Entry** component allows users of your project to add or edit text.
- The **Number Entry** component allows users of your project to add or edit a number value.
- The **Phone Entry** component allows users to input a phone number in your project.
- The **Email Entry** component allows users to enter email addresses in your project.
- The **Notes** component (in [Apps](/docs/introduction-to-apps)) allows users to enter and update multiple lines of text in a full-screen editor.
  ![Alt text](../../../)
  {% figure src="/docs/reference/components/entry-components/entry-components.png" caption="" /%}

{% cta title="Components" description="For information on other entry components, like Signature, Comments, and more, check out the Components section." url="/docs/Components" /%}

## Configuring entry components

### Data

In the **General** tab on the right side of the Layout Editor, locate the **Data** section. In the **Column** field, select the destination to store the inputted value.

{% figure src="/docs/reference/components/entry-components/text-entry-configuration.png" caption="" /%}

{% callout title="" %}
For the Text Entry component, you can also set a minimum and/or maximum length. Similarly, for the Number Entry component, you can set a minimum and/or maximum value.
{% /callout %}

If you are using an entry component within a Form screen, you can designate a **Default Value**. This allows you to select and automatically fill the entry component with a value from the current screen.

### Design

In the **General** tab on the right side of the Layout Editor, locate the **Design** section.

- Select a **Label** and **Placeholder** for the component. These can be columns from your data source or [Custom Values](/docs/custom-values).

{% figure src="/docs/reference/components/entry-components/designing-the-text-component.png" caption="" /%}

{% callout title="" %}
For the Text Entry component, you can also configure the size of the entry field, making it larger for times you'd like to capture multiple lines of text from users.
{% /callout %}

### **Options**

In Forms or Add/Edit Screens, you can make Entry components required before the user can submit or save their changes.

{% figure src="/docs/reference/components/entry-components/number-entry-options.png" caption="" /%}
