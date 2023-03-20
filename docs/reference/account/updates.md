---
title: Updates
description: An explanation of updates and how they relate to billing.
slug: updates
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

## What are updates?

Glide's pricing is based on how many updates your projects use. Updates happen whenever your published project's data is changed.

## Things that count as updates

- When a user adds an item within your app, that's one update. For example, adding a new task to a to-do list.
- When a user edits an item via an Edit screen, that's one update. For example, editing an employee profile in an employee directory.
- When a user deletes an item in your app, that's one update. For example, deleting an appointment from a scheduling app.
- Syncing data once from an external source like Google Sheets or Airtable is one update. For example, when someone edits a Google Sheet connected to your app and Glide syncs the latest version.
- When a user changes data via a component on a details screen - for example, changing a toggle - that's one update.
- Set Column Values, Increment, Add Row, and Delete Row actions each use one update when they run.
- Glide API operations – for example, adding or updating rows.

As a rule of thumb, every individual change to your project's data counts as one update. Glide works this way because we assume that the more data you change with Glide, the more valuable Glide is to you.

## Things that do _not_ count as updates

- Editing data in the Data Editor
- Testing your project in the builder (i.e., your project is not published)
- Adding tabs, computed columns, or components to your projects
- Actions that do not change data (e.g., Go To Tab, Show Form, Show Notification, Open URL)
- Edits on form screens, add screens, and edit screens are not counted because they don't change any data. They will create an update if the form, add, or edit screen is submitted.

## What types of updates are there?

1. Adds: When a user in your Glide project adds a row to your data source, this counts as an Add.
2. Edits: When a user in your Glide project edits a row in your data source, this counts as an Edit.
3. Deletes: When a user in your Glide project deletes a row in your data source, this counts as a Delete.
4. Syncs: When Glide reloads data from an external data source that has changed (e.g., Google Sheets, Excel), this counts as a Sync.

- Tip: The benefit of using Glide Tables is that you will never incur any Syncs.
- Sometimes Glide will sync your data source and find that no data has changed. In this event, the Sync is not counted (you are not charged for Syncs that don't provide new data).
- **Extra Sync mode**. If you select "Extra" for your project's Sync mode in Data settings, Glide will sync your data on a fixed schedule when your project is active (e.g., every few minutes) instead of only syncing when data changes. These syncs count as updates even if there is no new data.

## How to minimize updates

If you're on a budget and want to use as few updates as possible, here are some suggestions:

- Use Glide Tables if you can because Glide Tables do not use any Syncs.
- Use Add Screens, Edit Screens, and Form Screens instead of editing directly on Detail Screens because Add, Edit, and Form screens group all of their changes into one update (e.g., when the user clicks ‘Submit').
