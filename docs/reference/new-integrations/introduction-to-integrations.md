---
title: Introduction to Integrations
description: 
video:
slug: introduction-to-integrations
---

## What are integrations?

Integrations allow your Glide app to connect with the most important tools for your business. They extend Glide’s functionality as actions, computed columns, widgets, or analytics providers. With integrations, you get powerful, out-of-the-box functionality in minutes. 

## Adding integrations to your app

If you click the Integrations tab in your app’s settings, you can view all the integrations available in Glide. Click on an integration to learn about the features it provides and to add it to your app.

Screenshot from Alpha phase. These settings will be improved ahead of Open Beta.

After adding an integration to your app, you must configure it. Depending on the integration, you may need to grant permissions or enter secrets such as an API key. Details on each integration are documented in this section of the documentation.

### Permissions

When integrating certain tools, you may be prompted to grant Glide certain permissions to access and control your app. This is necessary for the integration to work properly. These screens are safe and you can revoke the permissions at any time from within your third-party tool, either through a settings panel or by contacting that tool’s support team. 

Granting Glide access to your integration (example Slack)

### Secrets

Some integrations may require you to provide "secrets" such as an API key to work properly. These secrets are private and should not be shared with anyone who should not have access to them. An API key is a unique identifier that allows an application to access a service's functionality. The location of your API key may differ based on the settings and interface of your third-party tool.

{% callout title="" %}
It is incredibly important to keep your API key secure and not to share it publicly as it can be used to access sensitive data or perform actions on your behalf.e
{% /callout %}

Note that not all integrations will require granting permissions or providing secrets. This varies depending on the integration and its functionality.

Adding secrets for an integration (example Clearbit)

## Using integrations

Once you have added and configured an integration, you can begin using its functionality in your app. Integrations in Glide can provide different features that can be used in various ways. These features include actions, computed columns, or widgets.

While many integrations come with just one or two features, some, like OpenAI, have many. These features are listed in the integration's settings, and the different icons represent whether they are actions, integration columns, or both.

### Actions

Actions are a way to trigger events or functions within your app based on user interactions or other conditions. Actions can be used to perform a wide variety of tasks, such as updating data in your sheet or triggering a notification. 

Glide comes with many native actions like Open Tab, Add Row, and Show Notification. Integrations bring their own Actions that you can use just like normal Glide actions. 

If an integration has a feature that includes an action, you can pick that action in the Action Editor. To learn more about actions, read our guide here. 

### Computed Columns

Some Integrations have features that can be used as computed columns in the Data Editor. For example, the ‘Summarize’ column from the OpenAI Integration will take a prompt and summarize that text. 

[]()

When you add a computed column to a table, it will run for all the rows that are visible in the Data Editor. Double-check that you would like to compute the results for the viewable rows in your table before adding the column to your table.

To learn more about computed columns and how to use them in the Data Editor, read our guide here. 

### Widgets

Some integrations do not have actions or computed columns but appear as a widget or window in your app. One example of this is the Intercom integration. After you enable it and set up the integration, it will allow your users to interact with the Intercom Chat widget.

### Analytics

If you are interested in adding more detailed event and behavior tracking to your app, you can integrate a third-party analytics tool like Mixpanel or Google Tag Manager. After one of these integrations is added to your app, you will be able to track custom events like specific button clicks in your app.

## Updates from integrations

{% callout title="" %}
During Glide Actions Open Beta, updates from integrations will not count towards your team’s updates quota. You can see the updates used by integrations in your Beta Usage screen.
{% /callout %}

### Actions

Actions from integrations will use updates each time they are successfully run. When you are configuring the action, you will be shown how many updates the integration uses.

### Computed Columns

Computed columns from integrations will use updates for each row they are successfully run. The number of updates used for one row by a computed column from an integration is the same as if you had used the feature as an action.

If a row in the Data Editor has cached values from a previous run of a computed column, your team will not use any updates for that row.

### Errors and Unsuccessful Runs

If an action or computed column returns errors or cannot run successfully, your team will not use any updates for that action or computed column from an integration.