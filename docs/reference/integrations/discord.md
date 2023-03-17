---
title: Discord
description: Send discord messages to a channel.
video:
slug: discord
---

[Discord](https://discord.com/) is an instant messaging and voice call platform similar to Slack or Microsoft Teams. With the Discord integration, you can send messages to channels in your Discord server from a Glide app.

{% figure src="/docs/reference/integrations/discord/discored-intergration-use-case.png" caption="Use case for a Discord integration" /%}

## Adding and Configuring the Integration

To start using the Discord integration, you first need to add it to your project.

- In **Glide**, click the **Settings** icon in the upper-right corner.
- Click the **Integrations** tab and then select **Discord**.
- Click the **Add to app** button.
- Sign into your Discord account.
- Once you are signed in, select which Discord server you would like to connect to.
   
{% figure src="/docs/reference/integrations/discord/choosing-the-server.png" caption="Choosing the server" /%}
    
- Confirm which permissions you will give Glide. Select **Authorize**.
 
{% figure src="/docs/reference/integrations/discord/confirming-which-permission-to-allow.png" caption="Confirming the access permissions required." /%}
    
- Finally, give your Discord bot a name and choose an image for it. We recommend using a publically accessible image that is hosted online.
   
{% figure src="/docs/reference/integrations/discord/adding-an-image-for-the-bot.png" caption="Adding an image to the bot" /%}
    
- You’re ready to send messages from your Glide app to Discord!

## Integration Settings

| Integration setting | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Bot name | The display name of your Discord bot | ✅ | Community app | If not set, the Discord bot’s name will default to Glide |
| Bot avatar | You can use a URL of a publicly accessible image | ❌ |  | If not set, the Slack bot’s avatar will default to the Glide logo |

## Features

### Send Discord Message

The **Send Discord Message** action can send a message to your Discord server.

| Field | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Bot name | The channel ID where the message should be sent | ✅ | 19-character string of numbers | Your channel ID can be found by clicking Copy Link after right-clicking the channel. It is the 19-character string of numbers at the end of the link |
| Bot photo | The message that will be sent to the channel | ✅ |  | You can create a dynamic message by first creating a Template column in the Data Editor and then setting that column as your Message. |

{% figure src="/docs/reference/integrations/discord/adding-the-channel-id.png" caption="Adding the channel ID" /%}

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

To learn more about Integrations in Glide, check out our Introduction to Integrations.

## FAQ Section
 
{% faq question="Can I use the Discord integration with any Discord server?" answer="No, you must have **manage server** permissions in the Discord server you want to add. [Read more](https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ) about Discord permissions here. " /%}

{% faq question="Can I make more than one bot for my app?" answer="No, you can only have one Discord bot per app. " /%}

{% faq question="How do I connect my app to a different Discord account or server?" answer="You can connect a different Discord server to your app by first disconnecting the connected Discord server. To do that, navigate to the Discord integration in your app’s settings. Click Remove from app. Next, click Add to app to connect a different Discord account and/or server. " /%}