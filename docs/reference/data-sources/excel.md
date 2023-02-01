---
title: Microsoft Excel
description: Connect your project to Excel Workbooks
slug: excel
---

Microsoft Excel is one of the most widely used spreadsheet applications in the world. Your projects can be integrated with your Excel Workbooks, allowing you to build Apps and Pages with a data source you’re familiar with.

## How to use Excel Workbooks with Glide

There are two ways to use Excel files:

- [Option 1](#connect-to-your-excel-file-in-microsoft-onedrive-or-sharepoint) - Connect to your Excel file (`.xlsx` or `.csv`) in your Microsoft OneDrive or SharePoint account.
- [Option 2](#upload-your-excel-file) - Upload your Excel file (`.xlsx` or `.csv`) to connect it to your project.

### Connect to your Excel file in Microsoft OneDrive or SharePoint

Excel files hosted in Microsoft OneDrive and SharePoint can be integrated with Glide. This is especially useful when multiple people need quick access to the original workbook.

{% callout %}
It is recommended to create a copy of your file if you want to maintain its original format. Once connected, a **Row ID** column will be automatically added at the end of every sheet to help keep everything in sync. This column should not be deleted in the original file.
{% /callout %}

1. To create a new project, click on **New project** in your dashboard.
2. Give it a name and choose the type - App or Page.
3. Continue to select your data source.
4. Click on **Excel** and **Continue.**

    {% figure src="/docs/reference/data-sources/excel/choosing-excel-for-your-project.png" caption="Choosing Excel as your data source" /%}

    {% callout %}
    If this is your first time using an Excel data source, click on the **Connect** button under **Excel** to add your account. Microsoft OneDrive will open in a new tab. You’ll be prompted to log in and give Glide access to your files. For more information about permissions, see [Data security for Microsoft OneDrive](#data-security-for-microsoft-onedrive).
    {% /callout %}

5. Click on your drive folder and then **Choose Library**. 

    {% figure src="/docs/reference/data-sources/excel/linking-microsoft-account.png" caption="Connecting to your Microsoft Online account" /%}

    {% callout %}
    If your files are in SharePoint instead of OneDrive, click on the **Authorize SharePoint Access** button and grant Glide extra permissions to connect to it. 
    {% /callout %}

6. Find and select the Excel file you want to use and then click on **Create App**. 
7. Click **Continue** to create your new project!

When the project is created, a new **Row ID** column is added to each sheet in the file at this time. The sheets in your Excel Workbook are added as individual **Tabs** to the **Layout Editor** and individual **Tables** in the **Data Editor**.

{% figure src="/docs/reference/data-sources/excel/when-the-project-is-created-a-new-row-id-column-is-added-to-each-sheet.png" caption="New Row ID column in data source" /%}

### Upload your Excel file

1. To begin, create your project by clicking on **New project** in your dashboard.
2. Provide a name for your project and choose the type - App or Page.
3. Continue to select your data source.
4. Click on **Import a file from your computer**.
5. Select your file (`.xlsx`, `.csv`, or `.ods`) and click **Upload** or simply **drag and drop** to create your new project!

{% figure src="/docs/reference/data-sources/excel/drag-and-drop-an-excel-file.png" caption="Drag and dropping Excel file to upload" /%}

The sheets in your Excel Workbook are added as individual **Tabs** to the **Layout Editor** and individual **Tables** in the **Data Editor**. 

{% callout %}
Unlike when connecting to OneDrive or SharePoint, Glide does not create a new **Row ID** column when uploading an Excel file.
{% /callout %}


## How to connect to multiple data sources

After adding your Excel files to your project, you can connect to other data sources as needed. This allows you to synchronize data across multiple platforms, bringing everything together in one place.

1. Go to the **Data Editor** in your project.
2. Click on the + symbol in the **Tables** panel.
3. Either add a new empty table, import a new Excel file, or choose one of the available options (e.g., Google Sheets) to sync your data.

{% figure src="/docs/reference/data-sources/excel/adding-different-data-sources.png" caption="Adding additional data sources to your project" /%}

## Data security for Microsoft OneDrive

If your OneDrive account is managed by your organization, you may need to get an admin to grant additional permissions before you can connect it to your project.

An IT admin will need to approve Glide permissions for you to:

- Sign in and read the user profile
- Have full access to user files
- Maintain access to data that has given it access to

[Here's a guide](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/review-admin-consent-requests) for your IT admin to approve Glide.

{% callout %}
If your organization is concerned about granting you or other users access to the whole drive, your IT admin could create a Glide-only user account in Microsoft that you can connect to Glide. This way, the necessary files can be shared with only that user. This will firewall Glide to that user's whole drive.
{% /callout %}