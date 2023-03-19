---
title: Google Calendar
description: Add events to your Google Calendar
video:
slug: google-calendar
---

[Google Calendar](https://workspace.google.com/products/calendar/) is a calendar service part of Google’s Workspace platform. When your team shares one calendar, it can be useful to configure Glide to add events to your team calendar.

{% figure src="/docs/reference/integrations/google-calendar/use-case-of-google-calendar.png" caption="Use case for a Google calendar Integration" /%}

The Google Calendar integration allows your app to send new events directly to your team's calendar and invite other attendees.

## Adding and Configuring the Integration

{% figure src="/docs/reference/integrations/google-calendar/adding-the-google-calendar-intergration.png" caption="Adding the Google Calendar Integration" /%}

To start using the Google Calendar integration, you first need to add it to your project.

- In **Glide**, click the **Settings** icon in the upper-right corner.
- Click the **Integrations** tab and then select Google **Calendar.**
- Click **Add to app.**
-. Sign into your Google Workspace account and select **Allow** to approve the integration.
- Once Glide has access to your Google Calendar, you will be able to add events to calendars connected to your account.

## Features

{% figure src="/docs/reference/integrations/google-calendar/google-calendar-configuration.png" caption="Google Calendar configuration" /%}

### Add Event to Google Calendar

The **Add Event to Google Calendar** action allows you to add an event to your Google Calendar.

| Field | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Event title | The name of your event | ✅ | Team Sync |  |
| Location | The location of your event | ❌ |  | You can enter a physical address or a meeting link |
| Calendar ID | Choose the calendar you would like to add the event to. If not set, the action will default to your primary calendar | ❌ | alma@example.com | Your Calendar ID can be found by clicking “Settings and sharing” in your calendar’s triple-dot options menu |
| Description | What the meeting is about | ❌ |  |  |
| Start date | Specify both the date and the time | ✅ | January 5, 2023 at 12:00 PM | A Date & Time column in the Data Editor can be used as your Start date  |
| Duration (minutes) | Set the duration of the event in minutes | ✅ | 30 | A Number column in the Data Editor can be used to set the duration of the event |
| Attendees | Separate multiple emails with commas | ❌ | hugo@example.com | You can use comma-separated values to send to multiple recipients. |

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

You can create a dynamic event by first creating a **Template** column in the **Data Editor** and then setting that column as one of your action’s fields.

{% cta title="Introduction to Integrations" description="To learn more about Integrations, check out our Introduction to Integrations article. " url="/docs/introduction-to-integrations" /%}

FAQ Section

{% faq question="Does the Google Calendar integration support multiple calendars?" answer="Yes, you can add events to multiple calendars by changing the Calendar ID. Make sure that the Google account you connected has permissions to add events to the calendar. " /%}

{% faq question="Can I edit a Google Calendar event?" answer="No, the Google Calendar integration currently only allows you to create new events. " /%}

{% faq question="Can I create a recurring calendar event?" answer="No, the Google Calendar integration currently does not support recurring events. " /%}

{% faq question="I already connected one Google account. How can I add a different account?" answer="You can connect a different Google account by first selecting Remove from app in the Google Calendar integration settings. Then, click Add to app to connect to a different Google account. " /%}

 

