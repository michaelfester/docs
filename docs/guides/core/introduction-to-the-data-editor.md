---
title: Introduction to Data Editor
description: The Data Editor is where you manage your project's data. You can edit in the Data Editor or wherever the data is stored. Everything stays in sync.
video: https://www.youtube.com/embed/UYZ5S8RBEGM
slug: data-editor
---

All software is powered by data. Data may sound like an abstract idea, but it's just the 'stuff' your software is about: customers, staff, locations, etc...

Databases & Spreadsheets are the best way to organize and think about data, so Glide lets anyone build software from Spreadsheets and other [data sources](https://www.glideapps.com/docs/reference/data-sources).

The **Data Editor** is where you manage your project's data. You can edit in the Data Editor or wherever the data is stored. Everything stays in sync.

![](/docs/guides/core/introduction-to-the-data-editor/intro-to-data-editor-1.png)

## Data Structure

Before you start a project in Glide, it's important to consider the structure of your data. In other words: what your project is about.

An Employee Directory may be quite simple and only have two tables; one for `People` and another for `Locations`

![](/docs/guides/core/introduction-to-the-data-editor/intro-to-data-editor-2.png)

But if you're making a project to help with inventory management, it might be more complex.

You'll probably need tables for:

- **Inventory Items**
- **Customers**
- **Suppliers**
- **Orders**

![](/docs/guides/core/introduction-to-the-data-editor/intro-to-data-editor-3.png)

But maybe there's a delivery aspect to it, in which case you might need tables for:

- **Delivery**
- **Drivers**
- **Vehicles**
- **Warehouse**

{% figure src="/docs/guides/core/introduction-to-the-data-editor/adding-multiple-tables-to-an-exsisting-app.png" caption="Adding tables to an exsisting app" /%}

You can add new Tables whenever you want but, it's worth establishing the most important tables upfront.

![](/docs/guides/core/introduction-to-the-data-editor/intro-to-data-editor-13.png)

Within each table, the first row should be column names. These column names should describe the properties of your items.

For example, if you're making a team directory for your company, the first row could contain `Title`, `Phone Number`, `Photo`, and `Email`- because these are the properties that each person has.

![](/docs/guides/core/introduction-to-the-data-editor/intro-to-data-editor-5.png)

After the first row, every following row should have values in each of those columns;

It's ok to leave cells empty. but if you leave big gaps between rows and columns, Glide may not pick up your data correctly.

![](/docs/guides/core/introduction-to-the-data-editor/intro-to-data-editor-6.png)

## Basic Columns

![](/docs/guides/core/introduction-to-the-data-editor/intro-to-data-editor-7.png)

**Basic Columns** are simple columns that just contain Data. They're the same as the ones that live in a data source.

Any new column you make in your data source will become a **Basic Column** in Glide. Glide will look at the data in this column and assign a type to that column.

For example, if you add a **Number Column**, you'll be able to format those numbers - or if you add an **Image Column**, we'll show you the image thumbnails, and you can even upload images or pick royalty-free ones from [Unsplash](https://unsplash.com).

![](/docs/guides/core/introduction-to-the-data-editor/intro-to-data-editor-8.png)

If you want to change the column type, you can click on the dropdown menu, click Edit and change the column type.

![](/docs/guides/core/introduction-to-the-data-editor/intro-to-data-editor-9.png)

You can create new **Basic Columns** at any time with the new column **(+)** button. These will be added to your data source as well.

![](/docs/guides/core/introduction-to-the-data-editor/intro-to-data-editor-10.png)

{% cta title="Computed Columns" description="Read more about Computed Columns" url="/docs/basic-columns" /%}

## Computed Columns

In addition to the **Basic Columns**, Glide adds a special type of column called a **Computed Column**.

Apps & websites need to do things that aren't easy or even possible to do with Spreadsheets alone, so **Computed Columns** introduce new concepts on top of spreadsheets that allow you to structure and connect your Data in powerful new ways.

For example, the [Distance Column](/docs/distance-column) calculates the distance between two locations, and the [Template Column](/docs/template-column) lets you replace parts of your text with unique values for each row.

![](/docs/guides/core/introduction-to-the-data-editor/intro-to-data-editor-11.png)

{% cta title="Computed Columns" description="Read more about the types of Computed Columns" url="/docs/computed-columns" /%}

## Adding and Deleting Columns

To add new columns to your sheet or table, click on the (+) icon on the right-hand side of the **Data Editor**. You can add different types of columns to your table, depending on your data.

![](/docs/guides/core/introduction-to-the-data-editor/managing-columns-2.png)

To delete a column, click on the dropdown button to the right side of the column name and click on Delete.

![](/docs/guides/core/introduction-to-the-data-editor/managing-columns-3.png)

{% callout %}
If you are using a Google Sheet as your data source, note that some columns created in Glide may not be reflected in your original data source. To understand more
{% /callout %}

## Renaming Columns

To rename a column, click on the dropdown button to the right of the column header and click on Edit. You can edit the column's name from there or even edit other properties such as column type.

![](/docs/guides/core/introduction-to-the-data-editor/managing-columns-4.png)

## Reordering Columns

You can reorder columns by dragging the column header toward the right or left side.

## Find All Uses

---

The Find All Uses function allows you to locate all the areas in your project where a specific column is in use. You can locate which **Computed Columns**, [Components](/docs/components), and [Screens](/docs/screens) contain your chosen column.

Click on the "go/arrow" button to jump to that specific column, Component, or Screen.

![](/docs/guides/core/introduction-to-the-data-editor/managing-columns-5.png)

## Go to Column

If you're in a column dropdown menu in the [Layout Editor](/docs/glide-ui) and want to quickly jump to that column in the **Data Editor**, you can click the arrow next to the column's name.

![](/docs/guides/core/introduction-to-the-data-editor/managing-columns-6.png)

## Column Grouping

You can group columns to better manage them in the **Data Editor** and in dropdown menus.

![](/docs/guides/core/introduction-to-the-data-editor/managing-columns-7.png)

To set this up, just rename the columns with the group name, a slash, and then the column name `Group/Column`. For example `Position/Role` , `Position/Department` , etc.

![](/docs/guides/core/introduction-to-the-data-editor/managing-columns-8.png)

If your group names have emojis at the start, these will show up instead as the group icon.

![](/docs/guides/core/introduction-to-the-data-editor/managing-columns-9.png)

## Duplicate Column

To duplicate a column, click on the dropdown button to the right of the column header and click on Duplicate. This will allow you to build more efficiently and quicker.

![](/docs/guides/core/introduction-to-the-data-editor/managing-columns-10.png)

## Data Tab

The Layout area of Glide has its own mini **Data Editor**, which we call the **Data Tab**. Instead of showing you all your app's data, the **Data Tab** just shows you the data for the current screen – which can be very useful.

![](/docs/guides/core/introduction-to-the-data-editor/managing-columns-11.png)

Having the **Data Tab** not only allows us to access our data faster, but it also allows us to drag and drop data from the **Data Tab** straight into our Layout, this creates an [Action Text Component](/docs/action-text). To do this, click and hold the column title and drag it into the Layout as shown below. This is useful for quickly seeing how the data will look in your app.

![](/docs/guides/core/introduction-to-the-data-editor/managing-columns-12.png)
