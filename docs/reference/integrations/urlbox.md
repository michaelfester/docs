---
title: urlbox
description: Render URLs and HTML into images.
video:
slug: urlbox
---

[urlbox](https://www.urlbox.io/) is a platform that enables you to create PDF files and images from HTML. With the UrlBox integration, you can create PDF files and images from your Glide app.

## Adding and Configuring the Integration

1. In **Glide**, click the **Settings** icon in the upper-right corner.
2. In the **Integrations** menu, choose **UrlBox** and select **Add to app**.
3. Next, you will need to set your UrlBox **Publishable Key** and **Secret Key**.
4. To find this information, sign in to your [UrlBox dashboard](https://urlbox.io/dashboard).
5. Input the API Key and API Secret into your Glide integration. You are now ready to start using UrlBox with Glide.

## Integration Settings

| Integration setting | Description | Required field? |
| --- | --- | --- |
| Publishable Key | Your publishable key can be found in your urlbox dashboard | ✅ |
| Secret Key | Your secret key can be found in your urlbox dashboard | ✅ |

## Features

### Generate PDF file from HTML

The **Generate PDF file from HTML** action allows you to create a PDF file from HTML.

| Field | Description | Required field? |
| --- | --- | --- |
| HTML | This is the HTML that will be used to make your PDF file | ✅ |
| CSS | This is the CSS that will be used to style your HTML | ✅ |
| Filename | The name you want to give to the file. The extension (.pdf) will automatically be appended. | ✅ |
| File output | The column where you want the URL to your PDF file to be saved | ✅ |

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

{% cta title="Introduction to Integrations" description="To learn more about Integrations, check out our Introduction to Integrations article. " url="/docs/introduction-to-integrations" /%}

