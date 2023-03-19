---
title: Docusign
description: Send a document to sign with DocuSign.
video:
slug: docusign
---

[DocuSign](https://www.docusign.com/) is a platform that allows users to electronically sign documents. With the DocuSign integration, you can send documents to sign from your Glide app.

## Adding and Configuring the Integration

To start using the DocuSign integration, you first need to add it to your project.

1. In **Glide**, click the **Settings** menu. 
2. Find the **Integrations** section and then select **DocuSign.**
3. Click the **Add to app** button.
4. You will then need to log into your DocuSign account.

## Features

### Send a document to sign

The **Send a document to sign** action is used to send a DocuSign document to sign via email.

| Field | Description | Required field? | Example |
| --- | --- | --- | --- |
| API Account ID | Your API ID can be found in your account’s https://admin.docusign.com/apps-and-keys | ✅ |
| Account Base URI | Your Base URI can be found in your https://admin.docusign.com/apps-and-keys | ✅ |
| Template ID | This is the ID of the template you would like to send for signature | ✅ |
| Signer Email | The email of the primary signer | ✅ | alma@example.com |
| Signer Full name |  | ✅ |
| CC Email | If role is not configured, this person will be asked to sign the document |
| CC Full name |
| CC Role |

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

{% cta title="Introduction to Integrations" description="To learn more about Integrations, check out our Introduction to Integrations article. " url="/docs/introduction-to-integrations" /%}

## FAQ

{% faq question="Why cannot I access my Apps and Keys page?" answer="The admin of your DocuSign account has access to the [Apps and Keys page](https://admin.docusign.com/apps-and-keys). " /%}
  
{% faq question="Why is my document not sending?" answer="Make sure that your DocuSign account has not used its Sends quota. " /%}
