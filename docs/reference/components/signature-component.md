---
title: Signature Component
description: Write and upload signatures to your data source.
slug: signature-component
---

{% callout title="" %}
The Signature Component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

With the Signature component, you can let users sign for things in your project. When someone adds their signature, the Signature component generates an image and writes the link to that image to your project’s [Data Source](/docs/reference/data-sources/). It will then display their signature in the component.

{% figure src="/docs/reference/components/signature-component/an-use-case-of-a-signature-component.png" caption="An use case of the Signature Component" /%}

## Data

After adding a Signature component, you’ll need to select which **Column** to write the user’s signature to.

{% figure src="/docs/reference/components/signature-component/choosing-the-right-column-for-signature-component.png" caption="Selecting the column to write the signature to" /%}

{% callout title="" %}
If you want each user's signature to be specific to them every item, then you will want to create a [User-specific Column](/docs/user-specific-columns) for the Signature.
{% /callout %}

## Design

Next, you can design how the Signature component appears in your project.

- The **Title** is displayed above the signature box.
- The **Hint text** is displayed in the component before a signature exists.
- The **Message** appears under the signature when a user is signing

The Signature component is particularly useful in [Forms](/docs/forms). Bear in mind that it will not write to the sheet until the form is submitted.