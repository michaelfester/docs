---
title: Microsoft Teams
description: Send messages to your Microsoft Team
video:
slug: microsoft-teams
---

Microsoft Teams is a business communications platform. With the Microsoft Teams integration, you can send messages to channels within your Microsoft Team  from a Glide app. 

{% figure src="/docs/reference/integrations/microsoft-teams/usecase-for-a-microsoft-teams-integration.png" caption="Usecase for a Microsoft Teams Integration" /%} 

## Adding and Configuring the Integration

{% figure src="/docs/reference/integrations/microsoft-teams/adding-the-microsoft-teams-integration.png" caption="Adding the Microsoft Teams Integration" /%} 

To start using the Microsoft Teams integration, you first need to add it to your project.

1. In **Glide**, click the **Settings** icon in the upper-right corner.
2. Click the **Integrations** tab and then select **Microsoft Teams**.
3. Select **Add to app.**
4. Sign into your Microsoft account.
5. Once Glide has access to your Microsoft account, you will need to enter the name of the team that you want to send messages to in the **Team name** field.

## Integration Settings

| Integration setting | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Team name | The name of your Microsoft Team | ✅ | My team | This field is case-sensitive |

## Features

### Send message to Teams channel

The **Send message to Teams channel** action is used to post a message in a channel within your Microsoft team.

| Field | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Channel | The Teams channel where the message should be sent | ✅ | General | This field is case-sensitive |
| Message | The message that will be sent | ✅ |  | You can create a dynamic message by first creating a Template column in the Data Editor and then setting that column as your Message. |

{% figure src="/docs/reference/integrations/microsoft-teams/configuring-the-send-message-to-teams-actions.png" caption="Configuring the Microsoft teams Integrations" /%} 

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

{% cta title="Introduction to Integrations" description="To learn more about Integrations, check out our Introduction to Integrations article. " url="/docs/introduction-to-integrations" /%}

## FAQ Section

{% faq question="Does the Microsoft Teams integration support multiple Teams?" answer=" No, you can only connect one Microsoft account at a time. This means you can only send messages to channels within one team. " /%}
  
{% faq question="Who will be the sender of the message?" answer=" The Microsoft account that was connected to Glide will be the sender of the message. " /%}
   
{% faq question="Can the Microsoft Teams integration import messages?" answer=" No, the Microsoft Teams integration only supports sending messages at this time. " /%}

{% faq question="I already connected one Microsoft account. How can I connect a different account?" answer=" You can connect to a different Microsoft account by first clicking Remove from app in the Microsoft Teams integration settings. Then, click Add to app to connect a different Microsoft account. " /%}   
