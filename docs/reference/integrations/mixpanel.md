---
title: Mixpanel
description: Track user behavior with Mixpanel.
video:
slug: mixpanel
---

[Mixpanel](https://mixpanel.com/) is a business analytics platform. With the Mixpanel integration, you can track user behavior in your Glide app.

## Adding and Configuring the Integration

To start using the Mixpanel integration, you first need to add it to your project.

- In **Glide**, click the **Settings** menu. 
- Find the **Integrations** section and then select **Mixpanel.**
- Click the **Add to app** button.
- You will need your Mixpanel project’s **Project token** to track events.
- You can find your **Project token** in your project settings.

## Integration Settings

| Integration setting | Description | Required field? | Notes |
| --- | --- | --- | --- |
| Project token | Your project token be found in your project settings | ✅ | This should be a 19-character string of numbers |

## Features

### Send event to Mixpanel

The **Send event to Mixpanel** action is used to send an analytics event to your Mixpanel project.

| Field | Description | Required field? | Example |
| --- | --- | --- | --- |
| Event name | The name of your analytics event | ✅ | click-button |
| Event parameter (+add value) | Optional event parameters you can send with your event | ❌ | First field: user-email
Second field: User Profile > Email | The first field is used to name your event parameter. The second parameter is the value of the event parameter. |

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

{% cta title="Introduction to Integrations" description="To learn more about Integrations, check out our Introduction to Integrations article. " url="/docs/introduction-to-integrations" /%} 

## FAQ

{% faq question="Can I connect more than one Mixpanel project to my app?" answer="No, each Glide app can connect to only one Mixpanel project. However, different apps in your team can connect to different Mixpanel projects. " /%}
   
{% faq question="How do I connect my app to a different Mixpanel project?" answer="You can connect a different Mixpanel project by changing your `Project token` in your Mixpanel integration settings. " /%}    

    
    