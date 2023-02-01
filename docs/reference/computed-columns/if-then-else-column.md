---
title: If → Then → Else Column
description: Produce different values based on conditions.
video: https://youtu.be/W-hsgR0qyzs
slug: if-then-else 
---

The If → Then → Else Column allows you to produce a new set of data for your app based on a set of conditions. 

This is great for assigning a status for an item in your app once it meets a certain criteria. 

Take a look at this example: 

Once an interviewer assigns a score to an applicant in this app, the If → Then → Else column will automatically assign a status for the applicant - passed or failed.

![](/docs/reference/computed-columns/if-the-else-column/If%20Then%20Else%20GIF%201.gif)

To create an If → Then → Else, head to the [Data Editor](/docs/data-editor) and add a new column. Choose “If → Then → Else” from the column type and configure as follows: 

- IF: Your condition or criteria
- THEN: the result you want to show if your condition is true
- ELSE: the result you want to show if your condition is false (or the default if you have multiple conditions).

![](/docs/reference/computed-columns/if-the-else-column/If%20Then%20Else%20GIF%202.gif)

{% callout %}
While setting the conditions or criteria, you can use any of the column values as the data source for any part of the computation.
{% /callout %}

{% callout %}
It’s also possible to add more than one case in the event that you have multiple criteria to fulfill. 
{% /callout %}

