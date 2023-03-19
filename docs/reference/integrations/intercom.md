---
title: Intercom
description: Provide live chat support in your published project. 
video:
slug: intercom
---

[Intercom](https://www.intercom.com/) is a messaging platform that connects businesses to their customers. Intercom’s Messenger allows your users to chat with team members from your company. By connecting Intercom to your app, you can chat with your users in real-time and allow them to send messages to your Intercom inbox when you are not available.

{% figure src="/docs/reference/integrations/intercom/live-view-of-intercom-widget.png" caption="Live view of the Intercom integration" /%}

## Adding and Configuring the Integration

Setting up the Intercom integration in Glide takes just a few steps:

- In your Glide project, open the **Settings** menu. 
- In the **Integrations** menu, choose **Intercom** and select **Add to app**. After adding Intercom to your app, you will need to find your `Workspace ID` for your Intercom Messenger to appear in your app.
   
{% figure src="/docs/reference/integrations/intercom/choosing-the-intercom-intergration.png" caption="Adding the Intercom integration" /%}
    
- In Intercom, you can find your workspace ID by navigating to your **Settings**. In your settings, click **Installation** and you can see the option to select **With an integration** as your set-up option. Click **Copy workspace ID** to copy the ID to your clipboard.
  
{% figure src="/docs/reference/integrations/intercom/copying-the-intercom-workspace-id.png" caption="Copying the Intercom workspace ID" /%}
    
- Paste the `workspace ID` under Intercom’s settings to complete your set-up.
  
{% figure src="/docs/reference/integrations/intercom/pasting-the-app-id-in-glide.png" caption="Pasting the app ID in Glide" /%}
    
## Integration Settings

| Setting | Description | Required field? |
| ------------------- | ----------- | --------------- |
| Workspace ID | This ID is found in Intercom. This is an 8-character string with letters and numbers. | ✅ |

## Features

### Add Intercom Chat to your app

When you add Intercom to a Glide app, the Intercom Messenger will automatically appear in your app for users to interact with. To preview the Intercom Messenger, you will need to publish your app.

{% figure src="/docs/reference/integrations/intercom/sharing-an-app-in-private-mode.png" caption="Sharing the app in private mode" /%}

{% cta title="Introduction to Integrations" description="To learn more about Integrations, check out our Introduction to Integrations article. " url="/docs/introduction-to-integrations" /%}

## FAQs
    
{% faq question="Why cannot I see the Intercom Messenger in my published app?" answer="Intercom’s Messenger is only visible in your published app. " /%}

{% faq question="I can’t find my Intercom Workspace ID" answer="It may take a few minutes for your Intercom Messenger to appear in your published app. If it does not appear after 10 minutes, double-check the `Workspace ID` you set in your app’s Intercom integration settings. " /%}

{% faq question="I am having trouble finding my Intercom Workspace ID. How can I find it?" answer="If you need more help, you can refer to Intercom’s documentation [here](https://www.intercom.com/help/en/articles/3539-where-can-i-find-my-workspace-id-app-id). " /%}