---
title: Relations
description: Create relationships and link rows together.
video: https://youtu.be/PN1xxatjmF0
slug: relations
---

Relations can be used in Glide to create relationships between rows, linking together their data across tables.

## About relations

In a Glide Project, every row in your tables represents an item that then appears in the lists and components in your project.

Each **item** has its own **properties**. These are represented as columns in the same table. For example:

- A `Room` can have a: `Number`, `Floor`, `Extension`, `Desks`, `Image`
- An `Employee` can have a: `Name`, `Number`, `Email`, `Image`
- A `Product` can have a: `Name`, `SKU`, `Image`, `Price`, `Description`

In some cases, an **item** has its own **item**. These are represented as columns across multiple tables. For example:

- A `Room` has a `Floor`
- An `Employee` has a `Manager` and an `Office`
- A `Product` has a `Category`

When an item has its own item, they each have their own set of properties and exist as independent rows in tables. They can then be connected by building relations.

{% callout %}
Relations fall into two categories - single relations and multiple relations.
{% /callout %}

### Single relations

Single relations show a _one-to-one_ relationship. This is where one item relates to one other item.

{% video src="https://www.youtube.com/embed/jUWP_Lula8E" /%}

Here are three examples of apps where items in one area relate to items in another.

{% video src="https://www.youtube.com/embed/bIrWH_CdFB0" /%}

- In the company app (left), `Staff` have `Locations`.
- In the conference app (middle), `Talks` have `Speakers`
- In the blogging app (right), `Articles` have `Authors`.

### Multiple relations

Multiple relations show a _one-to-many_ relationship. This is where one item relates to a list of other items.

{% video src="https://www.youtube.com/embed/0QGbNsAPhLw" /%}

For example:

- In the staff directory (`Staff` table), each `Location` lists all of the `Staff` that work there.
- The `Manager` shows a list of all the `Staff` they manage.

{% video src="https://www.youtube.com/embed/J-Rk9a-N0Jg" /%}

## How to create relations in Glide

In Glide, you can create relations between values using a **Relation** column. With this column, you specify the type of relation you want - single or multiple. Your project then applies the relation to the values and tables specified.

### Check for matching values

Before adding a **Relation** column, you must first check that the values match in the columns that will be connected. Items cannot be linked together unless they match.

In this example, a relation can be created for an employee directory that has a `Staff` table and `Locations` table. Each employee in `Staff` has a `Location` they work in.

{% figure src="/docs/reference/computed-columns/relations/check-for-matching-values.png" caption="" /%}

{% callout %}
By connecting this information, you can integrate it into components or even link to their location in their profile.
{% /callout %}

1. In the `Staff` table, make sure there’s a column for the name of the employee’s `Location`.
2. In the `Locations` table, make sure there’s a column for the name of the location that can be tied to the `Staff` table.

{% figure src="/docs/reference/computed-columns/relations/checking-for-matching-values.png" caption="" /%}

{% callout %}
Even though these columns have different names in each table, the values in them are shared.
{% /callout %}

After determining that there are matching values, you can build single or multiple relations using the **Relation** column.

### Build single relations

In this example, you can create one-to-one relations by bringing the `Location` for each employee into the `Staff` table.

- In the **Data Editor**, go to the table you want to add the column to.
- Add a new column by clicking the plus symbol to the right of the table.
  {% callout %}The plus symbol will append the column to the end of the table. To place the new column in a specific order, click on the dropdown button in the column header next to where you want to place it and then click **Add column right.**{% /callout %}
- Enter a name for the column.
- In the **Type** dropdown, select **Relation** from the **Computed** section.
- In the **Configuration** section, specify the values to be matched. The relation is made when the value in the first dropdown matches the value in the second dropdown.

{% figure src="/docs/reference/computed-columns/relations/creating-a-relation-column.png" caption="" /%}

{% callout %}Values must match exactly to create a relation. The values in the column will automatically populate when a match is found. If they still appear empty after selecting both columns, the values in the columns do not match and a relation cannot be established.{% /callout %}

- Click on **Done** to add the new column to the table.

### Build multiple relations

In this example, you can create one-to-many relations by bringing each employee from the `Staff` table into the `Location` table next to their matching locations.

- Add a new **Relation** column using the instructions in Build single relations.
- In the **Configuration** section, specify the values to be matched.
- Enable the **Match multiple** option.
  {% figure src="/docs/reference/computed-columns/relations/creating-match-multiple-relation-column.png" caption="" /%}
- Click on Done to add the new column to the table.

## Using relations

The most common use for a **Relation** column in Glide is to display a single related item or list of items.

- In Apps, this is done with the Relation component, Inline List, and List Relation.
- In Pages, this is all done with Collections.

With that said, you may find more advanced ways to use multiple relations - such as in Choice components or as the source for the data displayed in Charts.

Learn more about this in the video below.

{% video src="https://www.youtube.com/embed/2lZ75iPXc2E" /%}
