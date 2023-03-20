---
title: Airtable
description: Integrate Airtable databases with your project
video: https://youtu.be/StRizGWBqtA
slug: airtable
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

Airtable is a spreadsheet-database hybrid with the features of a database but applied to a spreadsheet. Your projects can be integrated with Airtable bases, offering you a more robust approach to data management that you may not find in simple spreadsheets.

{% callout %}
If you're new to Airtable or need a refresher, check out the resources in [Learn Airtable](#learn-airtable).
{% /callout %}

## How to use Airtable with Glide

### Find your Airtable API key

Your Airtable API key is required to connect your account to Glide.

1. Go to your [Account > Overview](https://airtable.com/account) in Airtable.
2. In the **API** section, either copy the existing key or click **Generate API key** to create a new one.
3. Click inside of the key field to view and then copy it.

{% figure src="/docs/reference/data-sources/airtable/finding-the-airtable-api-key.png" caption="Copying the API key from your Airtable account" /%}

Once you have this key, you can return to Glide to begin building projects from your Airtable bases!

### Connect to Airtable

1. To create a new project, click on **New project** in your dashboard.
2. Give it a name and choose the type - App or Page.
3. Continue to select your data source.
4. Click on **Airtable** and **Continue**.
5. Enter your Airtable account API key and click **Connect**.

{% figure src="/docs/reference/data-sources/airtable/connect-to-airtable.png" caption="Entering your API key in Glide" /%}

6. Select the Airtable base you want to use.

{% figure src="/docs/reference/data-sources/airtable/choosing-an-airtable.png" caption="Choosing an Airtable base for your data source" /%}

7. Click **Create App** to create your new project!

The sheets or tables in your base are added as individual **Tabs** to the **Layout Editor** and individual **Tables** in the **Data Editor**.

{% figure src="/docs/reference/data-sources/airtable/different-view-of-data.png" caption="Viewing your data in Glide and Airtable" /%}

## Changing the Airtable API Key

To change the Airtable API key and connect to a different table, first make sure the new table is owned by the same email address you use with your Glide account. Then:

1. Open the settings of your app. Then open the **Integrations** menu and select **Airtable.**
 
{% figure src="/docs/reference/data-sources/airtable/choosing-the-airtable-under-intergrations.png" caption="Choosing the Airtable to edit the API key" /%}
    
2. Select **edit** next to the API key and paste in your new key. 
   
{% figure src="/docs/reference/data-sources/airtable/editing-the-api-key.png" caption="Editing the API key" /%}
    
3. Select **save**.  

{% callout type="warning" title="" %}
Changing with Airtable account is integrated will change the data in your data editor and could change the behavior of your app.
{% /callout %}

## Sync data between Airtable and Glide

There are several differences in the way Glide and Airtable manage data that may impact how it syncs across both platforms.

### Views

Airtable allows you to create different ways to view your information. This means you can switch seamlessly between looking at your data as rows in a grid, cards on a kanban board, or even events on a calendar. Each view has its own layout, sorting, filtering, grouping, and more.

{% figure src="/docs/reference/data-sources/airtable/different-view-of-airtable.png" caption="Airtable data in Gallery view" /%}

When connecting your bases to Glide, keep in mind that any filters applied to a view will not be transferred to your project. For example - If you have a filter in Airtable that hides empty rows, those empty rows will appear in your data in Glide.

{% figure src="/docs/reference/data-sources/airtable/empty-rows-in-the-airtable-will-still-be-shown-in-your-project.png" caption="Empty rows in Glide caused by Airtable data filters" /%}

{% callout %}
It's best practice to keep at least one view in your Airtable base that has no filters or customizations. This way, you can see all the records in that base and know what will be brought into Glide.
{% /callout %}

### Columns vs. fields

In Glide, data is arranged in **columns**. In Airtable, these are called **fields**. Airtable allows you to create many different types of fields. However, not all types are supported in Glide.

{% callout %}
All field types transfer to Glide, except for the **Button** type.
{% /callout %}

### Basic vs. user-specific columns

The Airtable API does not allow Glide to add new fields to your Airtable base. Because of this, any new basic columns (e.g., **Text**, **Number**) you create in Glide will not appear in Airtable. Instead, they will become user-specific columns that are only accessible in the **Data Editor** in Glide.

{% figure src="/docs/reference/data-sources/airtable/new-basic-columns-you-create-in-glide-will-become-user-specific-columns.png" caption="Adding new columns in Glide" /%}

{% callout %}
It's recommended to add new basic columns directly to Airtable rather than Glide if you want to keep both data sources in sync. Once you add a new column to the Airtable base and save, you will be automatically prompted to refresh your project's data to update it.
{% /callout %}

### Links vs. Relations

In Glide, data is connected using **Relation** columns. In Airtable, these same connections are called **Links**. When you create a link in your Airtable base, it will show up in Glide as a **Relation** column.

You can use that data just like you would a normal relation. However, you will not be able to configure it in Glide since the configuration for the link/relation is set in Airtable.

{% figure src="/docs/reference/data-sources/airtable/relations-columns-created-in-airtable-can't-be-edited-in-glide.png" caption="Connecting columns between data sources" /%}

### Attachments

Starting November 8th, 2022, Airtable will introduce expiring links for all attachments stored in Airtable. This means that URLs for attachments stored in Airtable will expire every few hours. You can read Airtable's full announcement [here](https://support.airtable.com/docs/changes-to-airtable-attachments).

As a result of this change, attachments stored in Airtable bases connected to Glide will be automatically stored in Glide, so that these attachments remain accessible to users of Glide projects. **These attachments count toward your Glide team's file storage quota.**

Exceeding your file storage quota can result in your Glide projects becoming inaccessible to users until you upgrade to a higher plan. Removing an Airtable base from your Glide team (e.g. by deleting projects that use it) will free up storage space within minutes, and unused attachments are removed from Glide within 72 hours.

On your team's dashboard, you can navigate to the **Usage** page to check how much file storage your team is currently using.

## Learn Airtable

If you're new to Airtable, check out the resources below to get you started.

- Article: [Airtable vs Traditional Spreadsheets](https://zapier.com/blog/what-is-airtable/)
- Video: [Meet Airtable](https://www.youtube.com/watch?v=POgkE-YjAJo&ab_channel=Airtable)
- Course: [Intro to Airtable](https://www.youtube.com/playlist?list=PLkcBLUN49n2F2XtXMWWfWsOx2D6W3sWn-)
- Support: [Airtable Support Center](https://support.airtable.com/)
