---
title: Twilio
description: Send SMS messages from your Glide app.
video:
slug: twilio
---

[Twilio](https://www.twilio.com/) is a communications platform that enables businesses to send messages to their customers across multiple channels. With the Twilio integration, you can easily send SMS (text) messages from your app to keep your users engaged and informed.  

{% figure src="/docs/reference/new-integrations/twilio/use-case-of-twilio.png" caption="Use case for a Twilio" /%}

## Adding and Configuring the Integration

- In **Glide**, click the **Settings** icon in the upper-right corner.

- In the **Integrations** menu, choose **Twilio** and select **Add to app**. Next, you will to set your Twillio **Account SID, Auth token**, and **From number**.
  
{% figure src="/docs/reference/new-integrations/twilio/adding-twilio-intergration.png" caption="Adding the Twilio integration" /%}
    
- To find this information, open your Twilio dashboard.
  
{% figure src="/docs/reference/new-integrations/twilio/account-info-in-twilio.png" caption="Account info in Twilio" /%}
    
- Input the information into your Glide integration. You are now ready to start using Twilio with Glide. 
    
{% callout title="Verified phone numbers on Twilio" %}
Twilio allows messaging to different numbers depending on what level of account you have. In some cases, you can only text phone numbers that you’ve verified. [Click here](https://support.twilio.com/hc/en-us/articles/223180048-How-to-Add-and-Remove-a-Verified-Phone-Number-or-Caller-ID-with-Twilio) to learn more about verified phone numbers on Twilio.
{% /callout %}

## Integration Settings

| Integration setting | Description | Required field? | 
| ------------------- | ----------- | --------------- | 
| Account SID | Your account string identifier is a 34-digit string that is used to identify your Twilio account | ✅ |
| Auth token | Your Auth token is used as credentials to allow Glide to send messages on your behalf | ✅ |
| Sender number | This is the Twilio number that will be used to send SMS messages from your app | ✅ |

## Features

### Send SMS with Twilio

The [Send Email with Gmail](/docs/send-email-with-gmail) action allows you to send an email from your own Gmail account.

| Field | Description | Required field? | Example | Notes |
| ----- | ----------- | --------------- | ------- | ----- | 
| Recipient |The recipient of the SMS message | ✅ |+1 (234) 567-8900 | You can use the Phone Number column in the Data Editor to properly format numbers. | 
| Message | The message you want to send | ✅ |

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

You can create a dynamic message by creating a **Template** column in the **Data Editor** and then setting that column as your **Message** field. 

To learn more about integrations in Glide, check out our Introduction to Integrations. 

## FAQs

{% faq question="Why did I receive an error message that the number is unverified?" answer="In some cases, Twilio will only let you text phone numbers that you have verified. [Click here](https://support.twilio.com/hc/en-us/articles/223180048-How-to-Add-and-Remove-a-Verified-Phone-Number-or-Caller-ID-with-Twilio) to learn more about verified phone numbers on Twilio." /%}

{% faq question="How can I find my Sender number?" answer="You will need to use the Sender number from your Twilio account. Click here to learn more about Twilio phone numbers and verified phone numbers. " /%}   

