---
title: Send Email
description: Send an email directly from your project with a single click.
video:
slug: send-email
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

{% callout title="" %}
The Send Email action delivers email from a generic email address (i.e. notifications@appuser.io).
{% /callout %}

The Send Email action allows users to tap a [Component](/docs/components) and trigger an email to be sent using prefilled fields for the recipient(s), Subject, and Body fields.

## Configuring the Send Email action

{% figure src="/docs/reference/actions/send-email/send-email-configuration.png" caption="Configuring the Send Email action" /%}

You can send an email whenever an action is triggered in your project. This can be done through button presses, list item selections, and much more.

When using the **Send Email** action, the following configuration options are available:

- **To:** The email address or addresses you want to send the message to.
- **CC:** Send a copy of the email to someone who is not the recipient listed in the **To** field. This can also include multiple email addresses as a comma-separated list.
- **BCC:** Send a copy of the email to someone who is not the recipient listed in the **To** field. This can also include multiple email addresses as a comma-separated list. When using **BCC**, the recipients cannot view the other recipients who may be included in the **BCC** field, but they can view the email addresses that are included in the **To** and **CC** fields.
- **Subject:** The subject of the email message.
- **Body:** The body text of the email message.
- **Reply to:** The email address that the recipient will reply to if they reply to the email they receive.

{% callout title="" %}
The fields above can be columns from your data source or [Custom Values](/docs/custom-values)
{% /callout %}

## Examples

### Send Email to Attendees

The **Send Email** action can be used as an action in the components of your project (like [Buttons](/docs/button-components), [Collections](/docs/collection-component), and much more), or it can be triggered along with other actions as part of a [Custom Action](/docs/actions). One thing you could do is add an action that sends an email to users that have signed up for an event. The custom action below checks if a user’s email is included in a list of event attendees. If they have signed up, they’ll receive an email when the button is pressed. If they haven’t signed up, they’ll be presented with a sign-up form for the event.

{% figure src="/docs/reference/actions/send-email/custom-action-using-send-email.png" caption="Using the Send Email action in a Custom Action" /%}

### Dynamic Email

You can create a dynamic email by first creating a [Template Column](/docs/template-column) in the [Data Editor](/docs/data-editor). By using a Template column for something like the body of an email, you can personalize the message to each user, and the values will update as your data changes. Once you’ve created a template column, you can select it as the source for the fields in your Send Email action.

{% figure src="/docs/reference/actions/send-email/creating-a-dynamic-email-using-the-template-column.png" caption="Creating a dynamic email using the Template Column" /%}
