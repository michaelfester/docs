---
title: Relation Component
description: Display the result of a single relation
slug: relation-component
---

{% callout title="" %}
The Relation component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

A [Relation](/docs/relations) is a link to another row in your sheet.

In the [Interviews template](https://go.glideapps.com/app/sample-interviews), each candidate has a **`Relation`** to the **`Position`** they're applying for so interviewers can quickly review the information:

{% figure src="/docs/reference/components/relation/use-case-of-a-relation-cmponent.png" caption="An use case of a Relation Component" /%}

To add a Relation component, you need to create a [Single Relation](/docs/relations).

A Relation component can only be used when a one-to-one relationship exists between two tables. This is accomplished by creating a single Relation column. If you've checked the Match Multiple box when creating your Relation column, you'll need to use an [Inline List](/docs/inline-list) to display the multiple results.
