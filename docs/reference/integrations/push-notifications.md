---
title: Push Notifications
description: Send messages to mobile, tablet, or desktop devices.
video:
slug: push-notifications
---

## Introduction

**Push notifications** are messages sent to a user's mobile, tablet, or desktop device. These notifications can be sent to a user even when they do not have the app open. Push notifications appear in the notification center of the user’s device.

{% callout title="Requirements" %}
**Supported operating systems**
- Apple devices: iOS and iPadOS 16.4 (and higher)
- Android devices: Any Google device running a recent version of Chrome or ChromeOS

**User permissions**
- Your users must first allow push notifications before they can receive them

**Special considerations for mobile**
- On mobile devices, the app must be installed to the user’s home screen before they can receive push notifications. Learn more about installing apps [here](https://www.glideapps.com/docs/guides/core/sharing#installing).
{% /callout %}

## Adding and Configuring the Integration

To start using the Push Notifications integration, you first need to add it to your project.

1. In **Glide**, click the **Settings** icon. 
2. Find the **Integrations** section and then select **Push Notifications**.
3. Click the **Add to app** button.

{% figure src="/docs/reference/integrations/push-notifications/adding-push-notification-integration.png" caption="Adding Push Notification Integration" /%}

## Features

To send a push notification to a user, you first need to request the user for permission. Once the user has enabled push notifications for your app, you can then send them a push notification.

### Request push notification permissions

The **Request push notifications permissions** action is used to ask a user if they would like to allow push notifications. When this action runs, the user will be prompted to allow or not allow push notifications. 

You can add this action to a button or add the action as a step in a sequence of a custom action. If the user chooses to not allow push notifications, you will not be able to send them push notifications.

{% callout title="" %}
On mobile devices, the user must first install the app to their home screen in order to allow push notifications. Learn more about installing apps [here](https://www.glideapps.com/docs/guides/core/sharing#installing).
{% /callout %}

{% figure src="/docs/reference/integrations/push-notifications/examples-for-pn-request-action.png" caption="" /%}

### Send push notification

The **Send push notification** action is used to send a push notification to specific users 

| Field | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Send to | Choose who the push notification should be sent to | ✅ | Send to everyone or Send to specific users |  |
| Email | When sending to specific users, choose which users should be notified | Send to everyone: ❌
Send to specific users: ✅ |  | To message a specific user, make sure to use the email that the user logs in with |
| Title | The title of your notification | ✅ | New Expense Report |  |
| Message | The body of your notification | ✅ | David requested your review of their expense report | You can use a Template column in the Data Editor to send custom messages |
| Link | The screen the user will see when they click the notification | ❌ | https://my app.glide.page/dl/a400f7/s/2911d8/r/eTBVrcd7R86tdLB6uozzlA | This is the URL of the screen where you would like to send the user when they click the notification |

## FAQs

{% faq question="Can I know if a user allowed push notifications?" answer=" No, it is not currently possible to know if a user allowed or did not allow push notifications. However, you can create a custom action combining a **Request push notification permissions** action and a **Set column values** action. The **Set Column values** action can allow you to save a value to the Data Editor when a user clicks a button that runs the **Request push notification permissions** action. " /%}

{% faq question="I did not allow push notifications, but now I want to enable them. How do I do that?" answer=" If you have declined to allow push notifications, you will need to enable push notifications in your device’s settings. For example, on iOS, you will need to go to your Notifications settings and toggle on push notifications for your app. " /%}

