---
title: Slack
description: Send custom messages to Slack.
video:
slug: slack
---

[Slack](https://slack.com/) is an instant messaging platform for business collaboration. With the Slack integration, you can send messages to channels in your workspace from a Glide app.  

{% figure src="/docs/reference/integrations/slack/use-case-of-a-slack-intergration.png" caption="" /%}

## Adding and Configuring the Integration

To start using the Slack integration, you first need to add it to your project.

- In **Glide**, click the **Settings** menu. 
- Find the **Integrations** section and then select **Slack.**
- Click the **Add to app** button.

{% figure src="/docs/reference/integrations/slack/adding-the-slack-intergration.png" caption="" /%}

- Sign into your Slack workspace and select **Allow** to approve the integration. Make sure that you are connecting the correct Slack workspace by checking the name of the workspace in the upper-right corner.

{% figure src="/docs/reference/integrations/slack/allowing-the-access-on-slack.png" caption="" /%}

- Confirm that **Glide** is listed under **Apps** in your Slack workspace. 

{% figure src="/docs/reference/integrations/slack/confirming-glide-is-listed-under-apps-section.png" caption="" /%}

- To send messages to a Slack channel, you need to first add the Glide integration. Click **View all members** at the top right and then select **Integrations**.

{% figure src="/docs/reference/integrations/slack/adding-the-glide-into-slack-channel.png" caption="" /%}

- Click **Add an app**, and choose Glide.

{% figure src="/docs/reference/integrations/slack/choosing-the-glide-inside-slack.png" caption="" /%}

Next, we need to customize the Slack bot’s name and avatar to personalize the integration.

- In **Glide**, click the **Settings** menu. 
- Find the **Integrations** section and then select **Slack.**
- Under **Settings**, you can set **Bot name** and **Bot avatar.**

## Integration Settings

| Setting | Description | Required field? | Example | Notes |
| ------------------- | ----------- | --------------- | ------- | ----- |
| Bot name | The display name of your Slack bot | ❌ | New Customer Orders app |If not set, the Slack bot’s name will default to your app’s name |
| Bot avatar | You can use a URL of a publicly accessible image or an emoji supported by Slack | ❌ | Using :rocket: will show the 🚀 emoji as the bot’s avatar | If not set, the Slack bot’s avatar will default to your app’s logo |

{% figure src="/docs/reference/integrations/slack/adding-a-bot-name-and-an-avatar.png" caption="" /%}

## Features

### Send Slack Message

The **Send Slack Message** action is used to post a message in a channel in your Slack workspace.

| Fields | Description | Required field? | Example | Notes |
| ------------------- | ----------- | --------------- | ------- | ----- |
| Channel | The Slack channel where the message should be sent | ✅ | `#general` or `general` |If not set, the Slack bot’s name will default to your app’s name |
| Message | The message that will be sent to the Slack channel | ✅ |  | You can create a dynamic message by first creating a [Template Column](/docs/template-column) in the [Data Editor](/docs/data-editor) and then setting that column as your Message. |

{% figure src="/docs/reference/integrations/slack/configuring-the-slack-action.png" caption="" /%}

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

To learn more generally about Integrations in Glide, including how they affect your app’s usage, check out our Introduction to Integrations.

To learn more generally about Integrations in Glide, including how they affect your app’s usage, check out our Introduction to Integrations. 

## FAQ

{% faq question="Why is my message not being sent to my Slack channel?" answer=" Make sure the Glide bot is added to the Slack channel you would like to send messages to. (See Setting up Slack integration.) " /%}

{% faq question="How can I format my messages?" answer="You can find Slack’s text formatting documentation [here](https://api.slack.com/reference/surfaces/formatting). " /%}

{% faq question="Can I connect more than one Slack workspace to my app?" answer="No, each Glide app can connect to only one Slack workspace. However, different apps in your team can connect to different Slack workspaces. " /%} 

{% faq question="How do I connect my app to a different Slack workspace?" answer="You can connect a different Slack workspace to your app by first disconnecting the connected Slack workspace. To do that, navigate to the Slack integration in your app’s settings. Click Remove from app to your connected workspace. Next, click Add to app to connect a different Slack workspace. " /%}

