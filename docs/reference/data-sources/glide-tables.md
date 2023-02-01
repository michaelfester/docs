---
title: Glide Tables
description: Use Glide’s built-in spreadsheet for optimal integration
video:
slug: glide-tables
---

Glide Tables are like Google Sheets, but they live in Glide and have some exciting properties:
- They can hold much more data than a Google spreadsheet.
- You can share Glide Tables among projects using the Link Table feature.

## How to create a project with Glide Tables

If you select Glide Tables as the data source for your new project, Glide will build a starter project for you using default table names and placeholder data.
1. In the Layout Editor, select **New project**.
2. Name your project, select **App** or **Page**, then **Continue**.
3. Select **Glide Tables** as the data source, then **Create Project**.
{% figure src="/docs/reference/data-sources/glide-tables/choosing-glide-table-as-the-data-source.png" caption="Select Glide Tables as the data source" /%}
### Change the default name of the table
1. Select the **Data Editor** icon.
2. On the left side of the Data Editor, click on the name of a table, make changes, and enter.
{% figure src="/docs/reference/data-sources/glide-tables/changing-the-name-of-a-table.png" caption="Change the name of a table" /%}
### Change the default data in the table
You can make changes to the placeholder data in your new Glide Table using the **Data Editor.** Below are some basic ways to make changes and input data for your new project. 
- To edit a column, hover over the column you want to edit, select the dropdown menu icon, and select **Edit** to change the name and type of the column. You can also duplicate, add, or delete a column with this menu.
{% figure src="/docs/reference/data-sources/glide-tables/editing-a-column.png" caption="Edit a column" /%}
- To change the data in a cell, select it with your cursor, then edit or enter new data.
- You can add multiple cells of data at one time by copying cells from another data source and pasting the data into your Glide Table.
- To add a row, select the plus icon located under the final row.
- To add a column, select the plus icon located to the right of the final column.

{% callout %}
To add a full database of existing information as a table, you can upload an Excel or CSV file. Glide will create and populate a new Glide Table using the data from your file. For steps and details, see [Create a new Glide Table from existing data](/docs/glide-tables#create-a-new-glide-table-from-existing-data) below.
{% /callout %}
## Add a new Glide Table to your project
If you would like an empty database where you can input new data, you can add a new table. 
1. In the Layout Editor, select the **Data Editor** icon.
2. On the left side of the Data Editor, select the plus icon and **New empty table**.

{% figure src="/docs/reference/data-sources/glide-tables/adding-a-new-table.png" caption="Add a new table" /%}

Glide creates the new table for you with an auto-generated name. To change the table’s default name, click on the name and edit.

## Create a new Glide Table from existing data
If you already have a full database of information that you want to add to your project, you can upload your data as an Excel or CSV file. Glide will convert the data from your file into a new Glide Table.
1. In the Layout Editor, select the **Data Editor** icon.
2. On the left side of the Data Editor, select the plus icon.
3. Select **Import File > Excel or CSV**.{% figure src="/docs/reference/data-sources/glide-tables/importing-excel-or-csv.png" caption="Import an Excel or CSV file and Glide creates a table" /%}
1. When prompted, click on the arrow in **Import Data From a File**.
2. Select the file you want to use for your new table or simply drag and drop.

{% figure src="/docs/reference/data-sources/glide-tables/import-a-csv-file.png" caption="Drag and drop the file" /%}

Glide converts your data file into a Glide Table and adds it to the list of tables available in the Data Editor of your project.
## Link an existing Glide Table to your project
To share information across projects, you can use Glide’s **Link Table** feature. When you link a table from one project to another, any changes made to that table’s data will also be reflected in your other projects that use the same table. 

{% callout %}
To reuse information contained in a Glide Table without syncing updates across each project, see [Duplicate a Glide Table](/docs/reference/data-sources/glide-tables#duplicate-a-glide-table) below.
{% /callout %}

To link a Glide Table to your project:
1. In the Layout Editor, select the **Data Editor** icon.
2. On the left side of the Data Editor, select the plus icon.
3. Under **Sync Data**, select the Glide Tables data source.{% figure src="/docs/reference/data-sources/glide-tables/link-an-exsisting-glide-table.png" caption="Link an existing Glide table" /%}
1. When prompted, select the Glide Table you want linked to your project and **Link Table**.

{% figure src="/docs/reference/data-sources/glide-tables/choose-the-desired-table.png" caption="Link the table" /%}

Your linked Glide Table will now appear in the **Tables** panel of the Data Editor.

{% callout type="warning" %}
Only the data in a table’s Basic Columns can be shared and updated interactively across projects. Computed Columns are not affected. When you link an existing Glide Table to a project, Computed Columns will not appear in the Data Editor of your project. For more information, see [Computed Columns](/docs/reference/computed-columns).
{% /callout %}

### How to unlink a Glide Table from your project
1. In the Glide Layout Editor, select the **Data Editor** icon.
2. On the left side of the Data Editor, under **Tables**, right click on the name of the table.
3. Select **Unlink**.

{% figure src="/docs/reference/data-sources/glide-tables/unlinking-a-table.png" caption="Unlink a table" /%}

## Duplicate a Glide Table

If you want to reuse the data from an existing Glide Table but don’t want the data to be synced across projects, use Duplicate.
1. In the Glide Layout Editor, select the **Data Editor** icon.
2. On the left side of the Data Editor, under **Tables**, right click on the name of the table.
3. Select **Duplicate**.

{% figure src="/docs/reference/data-sources/glide-tables/duplicate-a-table.png" caption="Duplicate a table" /%}

Glide creates a copy of the selected table and lists it in the **Tables** panel of the Data Editor.

{% figure src="/docs/reference/data-sources/glide-tables/copy-of-the-table.png" caption="Glide creates a copy" /%}




