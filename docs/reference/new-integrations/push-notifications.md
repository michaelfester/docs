---
title: Push Notofications
description: Send alerts and updates directly.
video:
slug: push-notifications.md
---

Push Notifications allow you to send alerts and updates directly to your users' devices from your Glide app. With the Push Notifications integration, you can create customized notifications to enhance user engagement and improve communication.

## Adding and Configuring the Integration

To start using the Push Notifications integration, you first need to add it to your project.

1. In **Glide**, click the **Settings** menu.
2. Find the **Integrations** section and then select **Push Notifications.**
3. Click the **Add to app** button.

## Integration Settings

| Integration setting | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Notification icon | You can use a URL of a publicly accessible image for the icon | ❌ | https://example.com/icon.png | If not set, the notification icon will default to your app's logo |
| Notification sound | Select a custom sound for the notification or use the default sound | ❌ | Default or Custom | If not set, the notification sound will use the device's default notification sound |

## Features

### Send Push Notification

The **Send Push Notification** action is used to send a notification to a specific user or a group of users.

| Field | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Recipient | The user(s) who will receive the push notification | ✅ | User's email or a list of emails |  |
| Title | The title of the push notification | ✅ | New Order Received |  |
| Message | The message that will be sent in the push notification | ✅ | Your order is now being processed | You can create a dynamic message by first creating a Template column in the Data Editor and then setting that column as your Message |

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

To learn more about Integrations in Glide, check out our [Introduction to Integrations](https://docs.glideapps.com/all/reference/integrations).