---
title: Troubleshooting
description: Solutions if you're experiencing issues when using Glide.
video:
slug: troubleshooting
---

If you're experiencing issues when signing in to or using Glide, follow the troubleshooting steps below to diagnose the problem. If you're still experiencing issues, let us know through the forum.

**community.glideapps.com/**

1. Make sure your browser is supported
2. Check your connection is stable
3. Check Glide status → **status.glideapps.com/**
4. Open Glide in private/incognito mode
5. Clear your browser's cache
6. Remove plugins

## Make sure your browser is supported

Glide only supports some browsers and devices. Check our **system requirements** page to make sure your device and browser are supported.

## Check your connection is stable

Make sure you're not having network issues. You can do this by visiting another website like Wikipedia or Google and see if you experience the same problems.

If you do encounter the same issues, then you're likely experiencing network issues. You may have to test your local network/router, contact your internet service provider, or wait until the network connection is resolved.

## Check Glide's status

If Glide is not working at all for you, then there is a slight chance we may be experiencing service errors. You can **check whether Glide is down for everyone or just you here**. If it's just down just for you, then you may need to troubleshoot further. If it's down for everyone, then we will be working swiftly to resolve the issue.

## Open Glide in private/incognito

Most browsers have a private or incognito setting. This temporarily disables browsing history and the web cache. This allows a person to browse the Web without storing local data that could be retrieved at a later date.

- **Private browsing in Chrome**
- **Private browsing in Safari**
- **Private browsing in Firefox**

## Clear your browser's cache

Clearing your cache resets your browser and can often help with sign-in issues with Glide.

- **Clear cache in Chrome**
- **Clear cache in Safari**
- **Clear cache in Firefox**

## Remove plugins

Many people install ad blockers and other plugins that change the way that websites appear. These can interfere with tolls like Glide. If none of the above has worked, try temporarily disabling or removing plugins in your browser to see which one/s might be causing the issue.

- **Remove plugins in Chrome**
- **Remove plugins in Safari**
- **Remove plugins in Firefox**

## Project reload issues

Sometimes you may receive an email from us explaining that Glide is having problems accessing your data source or reloading your project. Below is some more detail about these potential issues and what you can do about it.

### No access

Unless you use **Glide Tables** you have to pick your data source when you create a new project. This gives Glide access. However, sometimes Glide may lose this access. To remedy the problem, you can go to your settings and replace the data source with the same file to re-enable permissions. If the data in your source hasn't changed since you lost access - this should restore things to normal.

![](/docs/reference/faq/troubleshooting/no-access.gif)

### Incompatible

Sometimes you might be informed that your data source has become incompatible with your project. In other words, columns and data that were tied to components no longer exist in your source and so Glide cannot display them accurately.

When you open your project in Glide and click "Reload sheet", you'll be able to review the issues. Here you can 'Remove features & sync' – which will remove the components tied to those columns.

![](/docs/reference/faq/troubleshooting/incompatible.png)

Alternatively, if you remember or can restore the structure of the data exactly – do so and then reload the your data source. Glide should be able to find those columns and sync as normal.

### Timeout

Sometimes reloads of projects will timeout when the data source is very large. Generally speaking, 25,000 rows is the upper limit of performance for Glide projects — although we are working on increasing this. Try to delete data in the data source that's not used in the app, as well as empty rows and columns.

### Too many requests

The cause of this is that Glide may be hitting your data source's request limits. This could be temporary and caused by a variety of things. If it persists, please get in touch with us.

### Oh Sheet! error

There are times when you may also encounter an Oh Sheet! error. When this happens, you can follow the steps below:

#### Delete empty rows and columns

To solve this problem, log out of your Glide account. Open your Data Source and delete all empty rows and columns from each tab linked to the app. Log back into Glide and try the reload again.

#### Other fixes

For unknown reasons to us, sometimes a Data Source may revoke access permissions to one of your files. This will mean that your project can't get at it via the API.

There are two ways to fix this:

1. Make a copy of the data source file, go into Glide and go to Settings/Data Sync Data Sources and change it to that new file.
2. Create another project selecting that data source. This should reset the permissions on that file. Your original project should now be able to access the data and you can delete that temporary project that you just created.

### Unknown

It's not clear what the cause of this issue is. If it persists, please get in touch with us at support@glideapps.com.

## Oh Sheet! Your app is too large to publish

Sometimes Glide can fail to publish your app if it has too many screens or columns. If you get the “Your app is too large to publish,” try these steps to lower your app’s size:

1. Check if your app has any long custom value entries not coming from your database. Big data URLs can considerably affect the size of your app.
2. Check for HTML code in custom rich text components that embeds images, i.e. if you have any HTML like this (data:image/png;base64,iVBORw0KGgoAAAANSgAAAAQAAAA...etc..), or CSS code in rich text components.
3. Check the number of screens you have, independent screens configurations for specific rows, the number of computed columns.

The issues you may be having can be caused by any combination of all of these factors, so significantly reducing as many of these items will allow the Glide engine to more efficiently load and publish your app and improve performance for the users of your apps.

{% callout title="title" %}
Our team is constantly working to improve your experience.
{% /callout %}

## Rows are added to apps when users login

Glide apps can be configured to add rows with user's email addresses to your sheets when users login for the first time. The sheet that gets new rows is configured in the user profile settings:

![](/docs/reference/faq/troubleshooting/unselecting-user-profiles-sheet.gif)

To prevent this from happening, unselect the user profiles sheet as shown here.
