---
title: Email Component
description: Create a fully configurable mailto button.
slug: email-component
---

{% callout title="" %}
The Email Component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

The **Email** component creates an email link in your project that allows users to compose an email in the default email application on their device.

## Configuration

Once you add the Email component, link the '**To**' field to the column that contains your email addresses. You can also use a [Custom Value](/docs/custom-values).

{% figure src="/docs/reference/components/email-component/choosing-the-to-value.png" caption="" /%}

The Email component creates a rich email link. So in addition to the '**To**' field, you can also pre-populate additional fields in your email like the S**ubject**, **Body**, **CC**, and **BCC**.

{% figure src="/docs/reference/components/email-component/email-component.png" caption="" /%}

- **Subject:** sets the subject text of the email
- **Body:** the main text of your email
- **CC:** copy the email to another address
- **BCC:** secretly copy the email to another address

For each of these additional fields, you can either bind them to specific columns in your table or use custom values.

## Sample Configuration

Check out this sample configuration using the data found on this Google Sheet:

{% figure src="/docs/reference/components/email-component/email-content-sheet.png" caption="" /%}

And after all the columns are bound to the right properties in Glide, the email link that people would be visiting would be:

**[mailto:hello%40company.com?subject=Hey%20there!&body=From%20a%20form%20submitted%20on%20www.website.com%3A&cc=enquiries%40company.com&bcc=secretemail%40company.com](mailto:hello%40company.com?subject=Hey%20there!&body=From%20a%20form%20submitted%20on%20**www.website.com**%3A&cc=enquiries%40company.com&bcc=secretemail%40company.com)\*\*
