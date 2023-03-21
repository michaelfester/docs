---
title: Google Tag Manager
description: Track user behavior with Google Tag Manager.
video:
slug: google-tag-manager
---

[Google Tag Manager](https://tagmanager.google.com/#/home) is a tag management system for web analytics. With the Google Tag Manager integration, you can track user behavior in your Glide app.

## Adding and Configuring the Integration

To start using the Google Tag Manger integration, you first need to add it to your project.

1. In **Glide**, click the **Settings** menu. 
2. Find the **Integrations** section and then select **Google Tag Manager**.
3. Click the **Add to app** button.
4. You will need the Google Analytics 4 (GA4) **Measurement ID** to send events to Google Tag Manager and see them in Google Analytics.
5. If you have not created a GA4 property or configured it in Google Tag Manager, continue following the steps below.

### Creating a Google Analytics 4 Property

1. If you have not already created a GA4 property, you can create one in [Google Analytics](https://analytics.google.com/).
2. Once the GA4 property is created, you will need to create a web data stream.
3. The website URL for your web data stream is your app URL.

### Configuring your GA4 Property in Google Tag Manager

1. If you have not created a Google Tag Manager account, you can create one in [Google Tag Manager](https://tagmanager.google.com/).
2. During the account creation process, select web as the container type.
3. Once the container is created, click **New Tag** and then click **Google Analytics: GA4 Configuration** as the tag type to configure your GA4 property.
4. Paste in your GA4 measurement ID when prompted.
5. For the trigger, choose **Initialization - All pages** as the trigger type.
6. For detailed instructions, you can read more in Google Tag Manager’s [docs](https://support.google.com/tagmanager/answer/9442095?hl=en).

### Set up GA4 Events in Google Tag Manager

1. If you have not created a Google Tag Manager account, you can create one in [Google Tag Manager](https://tagmanager.google.com/).
2. If you have not configured your GA4 property, read the section above.
3. Click ***New Tag** and **Google Analytics: GA4 Event** as the tag type.
4. Select the configuration tag. If you have already configured your GA4 property, the default name is **Google Analytics GA4 Configuration**
5. Set the name of the event you would like to send in the **Event Name** field.
6. To set the trigger, click the **`+`** button on the upper right and choose **All Elements**.
7. **Save** your tag to finish the tag creation process.
8. Make sure to **publish** to push your changes.
9. For detailed instructions, you can read more in Google Tag Manager’s [docs](https://support.google.com/tagmanager/answer/13034206).

## Integration Settings

| Integration setting | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| GA4 Measurement ID | This is the measurement ID of your Google Analytics 4 property | ✅ | G-ABC1234567 | This should be a 12-character string of numbers and letters |

## Features

### Send Google Tag event

The **Send Google Tag event** action is used to send an analytics event to your Google Analytics 4 property via Google Tag Manager.

| Field | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Event name | The name of your analytics event | ✅ | click-button |  |
| Event parameter (`+add value`) | Optional event parameters you can send with your event | ❌ | First field: `user-email` Second field: `User Profile > Email`| The first field is used to name your event parameter. The second parameter is the value of the event parameter. |


The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

{% cta title="Introduction to Integrations" description="To learn more about Integrations, check out our Introduction to Integrations article. " url="/docs/introduction-to-integrations" /%} 

## FAQ

{% faq question="I ran the `Send Google Tag event` action in the Layout Editor and the Action Editor, but I do not see any events in Google Analytics. What’s wrong?" answer="The `Send Google Tag event` action will only fire when you open your app in a browser. " /%}
   
{% faq question="I opened my app in a browser, and I am clicking a button that runs the `Send Google Tag event`, but I do not see any events in Google Analytics. What’s wrong?" answer="Make sure that your event name matches what you have configured in Google Tag Manager. If the tag was not created, the event will not be sent to Google Analytics. " /%}
