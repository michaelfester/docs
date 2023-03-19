---
title: Zendesk
description: Streamlines ticketing, self-service, and automation processes.
video:
slug: zendesk
---

[Zendesk](https://www.zendesk.com/) is a platform that connects businesses to their customers. Zendesk’s Chat widget allows your users to chat with team members from your company. By connecting Zendesk to your app, you can chat with your users in real-time and allow them to send messages to your Zendesk inbox when you are not available.

## Adding and Configuring the Integration

Setting up the Zendesk integration in Glide takes just a few steps:

- In your Glide project, open the **Settings** menu.

- In the **Integrations** menu, choose **Zendesk** and select **Add to app**. After adding Zendesk to your app, you will need to find the `Key` for your Zendesk Web Widget.

{% figure src="/docs/reference/integration/zendesk/adding-zendesk-integration.png" caption="Adding the Zendesk Integration" /%}

- In Zendesk’s **Get started** flow, click the **Messaging and live chat** section. Next, click **Add Zendesk to your website**. In the **Embed Web Widget** step, you can find your key in the code snippet. It is the 36-character string following `key=` in the code.

{% figure src="/docs/reference/integration/zendesk/getting-the-zendesk-api-key.png" caption="Getting the Zendesk key" /%}

- Paste the `key` under Zendesk’s settings to complete your set-up.

## Integration Settings

| Integration setting | Description | Required field? |
| --- | --- | --- |
| Key | This key is found in Zendesk. This is a 36-character string with letters, numbers, and dashes. | ✅ |

{% figure src="/docs/reference/integration/zendesk/zendesk-integration-settings.png" caption="Zendesk integration settings" /%}

## Features

### Add the Zendesk Chat widget to your app

When you add Zendesk to a Glide app, the Zendesk Chat widget will automatically appear in your app for users to interact with. To preview the Zendesk Chat widget, you will need to [publish your app](/docs/share).

{% figure src="/docs/reference/integration/zendesk/usecase-for-zendesk-integration.png" caption="Usecase for a Zendesk integration" /%}

{% cta title="Introduction to Integrations" description="To learn more about Integrations, check out our Introduction to Integrations article. " url="/docs/introduction-to-integrations" /%}

## FAQs

{% faq question="Why cannot I see the Zendesk Chat widget in Glide?" answer="Zendesk’s Chat widget is only visible in your published app. " /%}

{% faq question="Why cannot I see the Zendesk Chat widget in my published app?" answer="It may take a few minutes for your Zendesk Chat widget to appear in your published app. If it does not appear after 10 minutes, double-check the `key` you set in your app’s Zendesk integration settings. " /%}