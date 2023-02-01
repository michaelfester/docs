---
title: Email Anonymization
description: Generate virtual emails to protect your users' privacy.
video:
slug: email-anonymization
---
Glide can generate virtual email addresses for users of your app—users sign in normally, and developers never see their real email. This protects user privacy and minimizes the sharing of personal info.
![](/docs/reference/security-and-user-data/email-anonymization/hide-user-emails.png)

This won't affect existing user emails but will create an anonymous email for any new users that sign up. 
![](/docs/reference/security-and-user-data/email-anonymization/anon-email.png)
We can switch back and forth between the two settings. Real and anonymous email addresses can coexist in the same app. If we turn the feature on or off – existing emails in our app **won't change** – only the new emails that come in will be affected by the current setting. 

{% callout title="User indication" %} Users are not given any indication that their emails are being anonymized so it is up to you to notify them of this – if you wish to do so. {% /callout %}

{% callout title="Anonymous email functions" %} If an email is anonymised, you will not be able to email that anonymous email (through email actions etc). For now, we do not forward emails – but we will do this in the future. {% /callout %}
