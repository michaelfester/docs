---
title: Microsoft Outlook
description: Send emails and add calendar events with Microsoft Outlook
video:
slug: microsoft-outlook
---

[Outlook](https://outlook.live.com/owa/) is an email client and calendar tool that is part of the Microsoft Office and Microsoft 365 product suites. If Microsoft Outlook is a critical part of your workflow, it can be helpful to configure Glide to send emails from your Outlook account or add events to your Outlook calendar.

{% figure src="/docs/reference/integrations/microsoft-outlook/usecase-for-a-outtlook-integration%20(1).png" caption="Usecase for a Microsoft Outlook integration" /%}

## Adding and Configuring the Integration

{% figure src="/docs/reference/integrations/microsoft-outlook/adding-microsoft-outlook-integration%20(1).png" caption="Adding Microsoft Outlook integration" /%}

To start using the Outlook integration, you first need to add it to your project.

- In **Glide**, click the ****************Settings**************** icon in the upper-right corner.
- Click the **Integrations** tab and then select **Outlook**.
- Click the **Add to app** button**.**
- Sign into your Microsoft account.
- Once Glide has access to your Microsoft account, you will be able to send emails and add calendar events with Microsoft Outlook.

## Features

### Send Email with Outlook

The **Send Email with Outlook** action allows you to send an email from your own Outlook account.

| Field | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| To | The recipient of the email | ✅ |  | The integr |
| Cc | You can CC a recipient with this field | ❌ |  |  |
| Bcc | You can BCC a recipient with this field | ❌ |  |  |
| Subject | The subject line of the email | ✅ |  |  |
| Body | The content of the email | ✅ |  | The body can be formatted with HTML. |

{% figure src="/docs/reference/integrations/microsoft-outlook/configuring-microsoft-outlook%20(1).png" caption="Configurin Send Email with Outlook action" /%}

### Add Event to Outlook calendar

The **Add Event to Outlook calendar** action allows you to add an event to your Outlook calendar.

| Field | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Event title | The name of your event | ✅ | Team Sync |  |
| Location | The location of your event | ❌ |  | You can enter a physical address or a meeting link |
| Description | What the meeting is about | ❌ |  |  |
| Start date | Specify both the date and the time | ✅ | January 5, 2023 at 12:00 PM | A Date & Time column in the Data Editor can be used as your Start date  |
| Duration (minutes) | Set the duration of the event in minutes | ✅ | 30 | A Number column in the Data Editor can be used to set the duration of the event |
| Attendees | Separate multiple emails with commas | ❌ | hugo@example.com | You can use comma-separated values to send to multiple recipients. |
| Calendar ID | Choose the calendar you would like to add the event to. If not set, the action will default to your primary calendar | ❌ | Team calendar | Your Calendar ID is the name of your calendar |

{% figure src="/docs/reference/integrations/microsoft-outlook/configuring-microsoft-outlook%20(1).png" caption="Configurin Add Event to Outlook calendar action" /%}

## Notes

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

You can create a dynamic event by first creating a **Template** column in the **Data Editor** and then setting that column as one of your action’s fields.

{% cta title="Introduction to Integrations" description="To learn more about Integrations, check out our Introduction to Integrations article. " url="/docs/introduction-to-integrations" /%}

## FAQs

{% faq question="Does the Microsoft Outlook integration support multiple accounts?" answer="No, you can currently connect only one Outlook account. " /%}

{% faq question="Does the Microsoft Outlook integration support multiple calendars?" answer="Yes, you can add events to multiple calendars by changing the `Calendar ID` field. Make sure that the Outlook account you connected has permissions to add events to the calendar. " /%}

{% faq question="Can I edit a calendar event?" answer="No, the Microsoft Outlook integration currently only allows you to create new events. " /%}
    
{% faq question="Can I create a recurring calendar event?" answer="No, the Microsoft Outlook integration currently does not support recurring events. " /%}    
