---
title: Computed Columns
description: Transform basic data in powerful new ways.
slug: computed-columns
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

The [Data Editor](/docs/data-editor) is where you edit the data in your [Glide Table](/docs/glide-tables) or external [Data Source](https://www.glideapps.com/docs/reference/data-sources). It's also a place where you can add powerful Computed Columns that enhance your project's data.

In this guide, we'll give you an overview of the six most commonly used types and point you to more in-depth documentation on each of them.

1. Relation
2. Lookup
3. Template
4. Rollup
5. Math
6. If Then Else

## Relation Column

{% figure src="/docs/guides/intermediate/computed-columns/relation-column.png" caption="Configuring the Relation column in the Data Editor" /%}

One of the most important Computed Columns in Glide is the Relation Column.

After making a few [Lists](/docs/list-layout) and [Screens](/docs/screens) in Glide, most people realize that they need to create relationships between things. For example:

- Allow tasks to belong in projects
- Show employees inside of departments
- Put inventory items into categories
- Or make rooms belong inside of buildings

Databases like [Airtable](/docs/airtable) allow us to create relationships like this, but normal spreadsheets don't.

Wherever your data is stored, you can use the Relation Column to create relationships and then use those relationships in lots of different ways.

{% cta title="Relations" description="Learn more about the Relations" url="/docs/relations" /%}

## Lookup Column

{% figure src="/docs/guides/intermediate/computed-columns/lookup-column.png" caption="Configuring the Lookup column in the Data Editor" /%}

The Lookup Column uses a Relation to look through and bring back the values from a single column. For example:

- Retrieve the phone number of a team member's manager
- Show the project name that the current task belongs to
- Lookup the category ID for the current item
- Get the address of the customer assigned to this order

{% cta title="Lookup Column" description="Learn more about the Lookup Column" url="/docs/lookup-column" /%}

## Template Column

{% figure src="/docs/guides/intermediate/computed-columns/template-column.png" caption="Configuring the Template column in the Data Editor" /%}

The Template Column enables you to display dynamic text from data found in other columns. For example, you could write ‘`Welcome NAME, today is DAY`' and replace `NAME` with the User's name and `DAY` with the current day.

{% cta title="Template Column" description="Learn more about the Template Columns" url="/docs/template-column" /%}

## Rollup Column

{% figure src="/docs/guides/intermediate/computed-columns/rollup-column.png" caption="Configuring the Rollup column in the Data Editor" /%}

The Rollup Column helps you to perform a calculation on an entire column or even a Relation. The most basic computation for the Rollup is Count, but depending on what data you're working with, you can also do things like:

- Count Unique
- Sum
- Average
- Range
- Max/Min
- Earliest
- Lates
- Count True
- All True
- And much more

{% cta title="Rollup Column" description="Learn more about the Rollup Column" url="/docs/rollup" /%}

## Math Column

{% figure src="/docs/guides/intermediate/computed-columns/math-column.png" caption="Configuring the Math column in the Data Editor" /%}

The Math Column performs instant calculations on the data in your table — from basic arithmetic functions to more complex ones. You can then bind the formulas in your column to different [Components](/docs/components) in your app and see the output instantly.

{% figure src="/docs/guides/intermediate/computed-columns/math-column-usages.png" caption="The Math Column using in a salary calculator app." /%}

{% cta title="Math Column" description="Learn more about the Math Column" url="/docs/math-column" /%}

## If → Then → Else Column

{% figure src="/docs/guides/intermediate/computed-columns/if-then-else-column.png" caption="Configuring the If → Then → Else column in the Data Editor" /%}

The If → Then → Else Column produces new values based on a set of conditions. For example:

- If the user's age is greater than 18, output the value `Of Age`
- If the Task Relation column is empty, output the value `No Tasks`
- If the `Due Date` is before today, output the value `Overdue`
- If the user's score is greater than 60%, output the value `Pass`

{% cta title="If Then Else Column" description="Learn more about the If Then Else column" url="/docs/if-then-else" /%}
