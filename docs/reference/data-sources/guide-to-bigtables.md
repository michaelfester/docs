---
title: Guide to Big Tables
description:  Some ideas to help you get started with Big Tables
video:
slug: guide-to-bigtables
---

If your project needs to scale beyond 25,000 rows of data, Glide Big Tables are the perfect solution. With support for up to 10 million rows, Big Tables can let your projects grow without worrying about row limits or storing your data in multiple places. 

## Use Cases

### Inventory Apps

Businesses that manage inventory can easily exceed 25,000 products. While some of those products may no longer be available for customers, the business may still want the ability to maintain records of past customers and SKUs. 

With **Big Tables**, you can easily create a repository of an entire inventory of products and search for products that may no longer be referenced in your app.   

**Configure a Big Table for your Inventory App**

If you’d like to move items from your primary data source to a Big Table, you have a few options:

- Export your data from the primary [Data Source](/docs/intro-to-data-sources) to a CSV file, then import the data into a Big Table.

{% figure src="/docs/reference/data-sources/guide-to-bigtables/importing-an-existing-data-and-uploding-to-bigtable.png" caption="Importing exisiting data and exporting to Bigtables" /%}

- Use the [Glide API](/docs/glide-tables-api) to add rows to your Big Table.

{% figure src="/docs/reference/data-sources/guide-to-bigtables/getting-the-glide-api-key.png" caption="Getting the API key for Add Row" /%}

- Create an [Action](/docs/actions) to add a row to your Big Table based on a user interaction. This action could also remove the row from the primary data source, if desired. 

{% figure src="/docs/reference/data-sources/guide-to-bigtables/creating-an-action-to-add-row-to-bigtable.png" caption="Configuring an Add Row Action to deposit values in Bigtables" /%}

### Audit Logs

If your project has many users and you’d like to keep track of their actions while they interact with your project, you can create an audit log. Everything from button clicks to form submissions can be incorporated into a custom audit log using an **Add Row** action. 

While this type of audit log may be informative, it will also use many rows quickly. By using Big Tables for this audit log, you’re able to store and maintain these records for a longer period of time, giving you more data to analyze and more insight into how your app is being used. 

**Configure a Big Table as an Audit Log**

If you have an existing action in your project, you can update it to include an Add Row action. This row can be added to your Big Table, which can include values such as the current user’s email address, a timestamp of the interaction, and values from the current screen to provide a detailed record of each time the action is performed.  

{% figure src="/docs/reference/data-sources/guide-to-bigtables/configuring-bigtable-as-an-audit-log.png" caption="Configure a Big Table as an Audit Log" /%}

### Historical Archive

Sometimes your project can start small, but over time its data set may grow and approach the 25,000-row limit of regular data sources. If you’d like to preserve all your data without impacting your project’s ability to capture new data, you can move its older data to a Big Table. This can be done by exporting the data from your primary data source and importing it into a Big Table or by using actions to add rows to a Big Table and deleting them from the original table. 

**Configure a Big Table as a Historical Archive**

If you expect a new project to capture millions of rows of data, you can start by simultaneously adding data to a regular data source and a Big Table. With this approach, all your data can be found in the Big Table, and you can perform regular maintenance on your primary data source by removing data as needed. 

This can be done by adding an **AFTER SUBMISSION ACTION** to your forms. You can capture data in the primary data source and the Big Table by including an Add Row action. 

{% figure src="/docs/reference/data-sources/guide-to-bigtables/adding-an-on-submission-action.png" caption="Configure a Big Table as a Historical Archive" /%}

{% callout title="" %}
**Forms** will automatically add the submitted data to a new row in the selected data source. Forms don’t require an Add Row action on submission unless you need to capture an additional row of data in one of your tables.
{% /callout %}
