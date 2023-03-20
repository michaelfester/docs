---
title: Data Refresh
description: How long it takes for data to sync from projects → data source.
slug: data-refresh
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

If you're curious about Sync modes in your project's Data settings, **jump to the last section**.

## Project → Project

Changes to data made in an **App**, **Page**, or in Glide should show up in other Apps or Pages within seconds. If you're not seeing the speed you expect, then check out our **troubleshooting articles**.

## Projects → External Data Source

Changes to data made in an app, page, or in Glide might take a while to show up in the external data source (in most cases, it will update there within seconds, too).

In other words, if someone is using your app and makes a change to your data — all other apps will see that data within 5-10 seconds. If you're using an external data source, it might take a little longer.

## Data Sources → Projects

The time it takes for data to sync from your source to your projects may vary, depending on your data source.

If your data is stored in Glide Tables, then changes to the data should sync to your project within 10 seconds.

However, if you are using another data source, then Glide needs to fetch that data. Because each source is slightly different, there are differences in the time it takes to sync. Read on to learn more.

By default, we sync data from your data source when:

1. Your project is active
2. Your data source notifies us of a change
3. Glide has just written to your data source
4. You click sync in Glide

### 1. Your Project is active.

‘Active' means that someone currently has the app or page open on their device (or you are working on it in Glide). If your app is not active i.e. it is not open anywhere, we generally don't sync, no matter what.

### 2. Your data source notifies us of a change

When **Google Drive** or **MS OneDrive** tells us that your Google Sheet/Excel Workbook has changed, we sync your data. From the moment that we get that notification, it shouldn't take long for the data to reach your project. The larger your data set — the longer this might take.

**Airtable** currently does not have the ability to send notifications when there are changes to the base. So, Glide checks every three minutes to check.

### 3. Glide has just written to your data source

If Glide has just updated your data source, we will also check and sync any other changes to the data since the last sync. If the updated data triggers any complex calculations, scripts, macros, or code, those changes may be delayed until the next sync of data.

### 4. You click sync in Glide

If you are building your project in Glide and need to see the latest data from your data source, you can click the sync button.

## Sync mode (Normal vs. Extra)

Depending on your project's Sync mode, your project will sync data from your data source at different times.

### Normal mode

If you select "Normal" for your project's Sync mode in Data settings, data from your data source will sync when either (a) **your data source notifies us of a change**, or (b) **Glide has just written to your data source**.

### Extra mode

If you select "Extra" for your project's Sync mode in Data settings, data from your data source will sync as it would in Normal mode. Additionally, your project will sync every few minutes while **your project is active**.

When your project is set to Extra mode, your project will use Syncs (a type of Update) even if no data has changed. These Syncs occur because Glide is checking every few minutes if data in your data source changed.

#### Spreadsheet functions

There are some spreadsheet functions that periodically update your data. However, we don't always get notified of these changes by the source. So if you have your App open and you know that the data has changed in your spreadsheet and you are not seeing it in your App — this is why.

If you use functions like these and need Glide to check your data source periodically, this would be a reason to use Extra mode.

However, if you don't use these functions — there is no need as Glide will automatically sync your data anytime it notices a change.
