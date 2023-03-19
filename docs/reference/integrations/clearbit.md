---
title: Clearbit
description: Enrich your contacts with data from Clearbit.
video:
slug: clearbit
---

[Clearbit](https://clearbit.com/) is a data enrichment platform for businesses. With the Clearbit integration, you can enrich contacts with additional data in your Glide app.

## Adding and Configuring the Integration

To start using the Clearbit integration, you first need to add it to your project.

- In **Glide**, click the **Settings** menu. 
- Find the **Integrations** section and then select **Clearbit.**
- Click the **Add to app** button.

{% figure src="/docs/reference/integrations/clearbit/adding-the-clearbit-integration.png" caption="Ading Clearbit Integration" /%}

- You will need your **Clearbit API key** to finish configuring the integration.
- You can find your Clearbit API key in your [Clearbit dashboard](https://dashboard.clearbit.com/api).

{% figure src="/docs/reference/integrations/clearbit/getting-the-clearbit-api-key.png" caption="Getting the Clearbit API key" /%}

## Integration Settings

| Integration setting | Description | Required field? | Notes |
| --- | --- | --- | --- |
| API key | You can find your API key in your https://dashboard.clearbit.com/api | ✅ | Your API key is usually a 35-character string of letters and numbers starting with `sk_` |

{% figure src="/docs/reference/integrations/clearbit/clearbit-integration-settings.png" caption="Clearbit Integration settings" /%}

## Features

### Enrich contact

The **Enrich contact** feature can be used as an action or as a computed column to enrich a contact with Clearbit data.

**Action Configuration**

| Field | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Email | The email of the contact you would like to enrich | ✅ | alma@example.com |  |
| Clearbit result (e.g., company/name) | Choose the column where you would like the data from Clearbit to be saved |  | Glide | If not set, the result from running your Clearbit action will not be saved. |

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

{% figure src="/docs/reference/integrations/clearbit/configuring-the-enrich-contact-action.png" caption="Configuring Enrich Contact action" /%}

**Computed Column Configuration**

| Field | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Email | The email of the contact you would like to enrich | ✅ | alma@example.com |  |
| Result (e.g., company/name) | Choose the data from Clearbit that should be saved to your column | ✅ | Glide | If not set, the result from running your Clearbit action will not be saved. |

You can edit the column’s configuration to save a different result from Clearbit.

{% cta title="Introduction to Integrations" description="To learn more about Integrations, check out our Introduction to Integrations article. " url="/docs/introduction-to-integrations" /%}
 
## FAQ

{% faq question="Why cannot I see the Intercom Messenger in my published app?" answer="When the Clearbit integration is used as a computed column, your team uses updates for each contact that returns data successfully from Clearbit. " /%}

{% faq question="How many updates are used when I change the result from Clearbit for my computed column?" answer="If you have previously enriched a contact, Glide will use the cached data to show the new result. When using the cached data, you will not use any updates. " /%}
