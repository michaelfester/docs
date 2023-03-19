---
title: Gmail
description: Send emails from your own Gmail account
video:
slug: gmail
---

[Gmail](https://workspace.google.com/products/gmail/) is an email platform for workplace communication. When emails are a critical part of your workflow, it can be helpful to configure Glide to send emails from your Gmail account.

{% figure src="/docs/reference/integrations/gmail/usecase-for-a-gmail-integration.png" caption="Usecase for a Gmail Integration" /%} 

## Adding and Configuring the Integration

To start using the Gmail integration, you first need to add it to your project.

- In **Glide**, click the **Settings** icon in the upper-right corner.
- Click the **Integrations** tab and then select **Gmail**.
- Select **Add to app.**

{% figure src="/docs/reference/integrations/gmail/adding-gmail-integration.png" caption="Adding the Gmail Integration" /%}

- Sign into your Google Workspace account and select **Allow** to approve the integration.
- Once Glide has access to your Gmail account, you will be able to send emails from your Glide app.

{% figure src="/docs/reference/integrations/gmail/configuring-the-send-email-with-gmail-action.png" caption="Configuring the Gmail Integration" /%} 

## Features

### Send Email with Gmail

The **Send Email with Gmail** action allows you to send an email from your own Gmail account.

| Field | Description | Required field? | Notes |
| --- | --- | --- | --- |
| To | The recipient of the email | ✅ | You can use comma-separated values to send to multiple recipients. |
| Cc | You can CC a recipient with this field | ❌ | You can use comma-separated values to send to multiple recipients. |
| Bcc | You can BCC a recipient with this field | ❌ | You can use comma-separated values to send to multiple recipients. |
| Subject | The subject line of the email | ✅ | |
| Body | The content of the email | ✅ | The body can be formatted with HTML. |

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

You can create a dynamic email by first creating a **Template** column in the **Data Editor** and then setting that column as your **To**, **Cc**, **Bcc**, **Subject**, or **Body** field. 

{% cta title="Introduction to Integrations" description="To learn more about Integrations, check out our Introduction to Integrations article. " url="/docs/introduction-to-integrations" /%}

## FAQ Section

{% faq question="Where can I see all the emails that have been sent?" answer="All emails sent from your Glide app will appear in your Gmail’s **Sent folder**. " /%}

{% faq question="Does the Gmail integration support multiple accounts?" answer="No, you can only connect one Gmail account at a time. " /%}
  
{% faq question="Can I use the Gmail integration to import emails?" answer="No, the Gmail integration in Glide currently only allows apps to send emails. " /%}
    
{% faq question="I already connected one Gmail account. How can I add a different account?" answer="You can connect a different Gmail account by first selecting **Remove from app** in the Gmail integration settings. Then, click **Add to app** to connect to a different Gmail account. You can also manage Glide’s access in your [Google Workspace permissions](https://myaccount.google.com/permissions). 
![Removing access from Google account](/docs/reference/integrations/gmail/removing-access-from-google-account.png) " /%}  


    