---
title: User-specific columns
description: User-specific columns allow cells to hold unique data for each user. This means each user can experience their own data for a particular part of your project.
slug: user-specific-columns
video: https://www.youtube.com/embed/PK5eovZGne0
---

User-specific columns allow cells to hold unique data for each user. This means each user can experience their own data for a particular part of your project.

{% callout %}
💡 These columns live in the **Data Editor** only. They aren’t synced between Glide and your original data source.
{% /callout %}

## How to use user-specific columns

User-specific columns can be used anytime you want to collect data that’s unique to a user.

For example, adding a column named `User Notes` allows users to write their own notes and feedback on each item in the app. In order to collect this data, the column is configured as user-specific and tied to the [Notes Component](/docs/notes-component).

{% figure src="docs/reference/basic-columns/user-specific-columns/user-specific-columns-0.png" caption="Example of the Notes Component data in the Data Editor" /%}

Without user-specific columns, data entered in the `User Notes` column would appear to everyone and could be changed by anyone. Now, any notes entered will be specific to the user. In other words, a single cell will contain a unique value for each user.

{% figure src="docs/reference/basic-columns/user-specific-columns/user-specific-columns-2.png" caption="Editing the Notes Components in app" /%}

## Add user-specific columns

User-specific columns are created from basic columns.

1. In the **Data Editor,** open the table you want to edit.
2. Add a new column by clicking on the plus symbol to the right of the table.

   {% figure src="docs/reference/basic-columns/user-specific-columns/adding-a-new-column.png" caption="Adding a new basic column" /%}

   {% callout %}
   The + icon will append the column to the end of the table. To place the new column in a specific order, click on the dropdown button in the column header next to where you want to place it and then **Add column right**.
   {% /callout %}

3. Give the new column a name.
4. In the **Type** dropdown, choose the basic column type you want to add.
5. Enable the **Column is user-specific** option.

   {% figure src="docs/reference/basic-columns/user-specific-columns/creating-user-specific-columns.png" caption="Enabling the user-specific option for a column" /%}

6. Once finished, click **Done** to add the column to the table.

## Preview data

Since user-specific data is unique to each user, the only way to access another user’s data is by previewing the data as the other user. You can preview it by changing the **Viewing as** setting in your project.

1.  In the **Data Editor** or **Layout Editor**, click on the name next to **Viewing as**.
2.  Choose the user whose data you want to preview.

        {% figure src="docs/reference/basic-columns/user-specific-columns/preview-as.png" caption="Previewing user-specific data as another user" /%}

    The data in the column or related component will automatically adjust to show what was entered by that user.
