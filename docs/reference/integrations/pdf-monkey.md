---
title: PDFMonkey
description: Transform your raw data into personalized and visually appealing PDFs automatically
video:
slug: pdf-monkey
---

[PDFMonkey](https://www.pdfmonkey.io/) is a platform that allows you to generate PDF files dynamically using templates and data. With the PDF Monkey integration, you can generate PDF documents using data from your Glide app.

## Adding and Configuring the Integration

To start using the PDFMonkey integration, you first need to add it to your project.

1. In **Glide**, click the **Settings** menu. 
2. Find the **Integrations** section and then select **PDFMonkey**.
3. Click the **Add to app** button.
4. Finally, add your API key to start using the PDFMonkey integration. 

## Integration Settings

| Integration setting | Description | Required field? |
| --- | --- | --- |
| API Key | You can find your API key in your account settings. | ✅ |

## Features

### Generate PDF file

The **Generate PDF file** action allows you to create a PDF document using a template from PDFMonkey and data from your Glide app.

| Field | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Template ID | The ID of the PDF Monkey template you want to use | ✅ | F1847B2E-B331-4E0F-AE44-20D93F470C15 | You can find the ID of your template in the Templates section. |
| Filename | The name you want to give to the file. The extension (.pdf) will automatically be appended. | ✅ | inspection_form_submission |  |
| Data (+add value) | This is how you can send data to populate your PDF template |  |  |  |
| File Output | The column where you want the URL to your PDF file to be saved | ✅ |  |  |

The action can be added to a component that supports actions (e.g., a button), added to an action sequence in the Action Editor, or after a form is submitted.

{% cta title="Introduction to Integrations" description="To learn more about Integrations, check out our Introduction to Integrations article. " url="/docs/introduction-to-integrations" /%}

## FAQs

{% faq question="How do I create a PDF Monkey template?" answer="To create a PDF Monkey template, sign in to your **[PDF Monkey dashboard](https://dashboard.pdfmonkey.com/)** and follow the instructions provided. You can use their template editor to design your PDF document and define placeholders for dynamic data. " /%}   

{% faq question="How do I share the generated PDF file?" answer="The `Generate PDF file` action allows you to save the URL to a column in Glide. You can then use this URL to share the PDF with users. " /%}   

{% faq question="How can I ensure the privacy of my generated PDFs?" answer="PDF Monkey offers various security options, such as expiring URLs and password protection, to help you protect the confidentiality of your generated PDF documents. Check out [PDFMonkey’s Privacy and security documentation](https://docs.pdfmonkey.io/frequent-questions/security) for more details on securing your PDFs. " /%}   

    
    

{% faq question="What kind of data can I send from my Glide app to PDFMonkey?" answer="You can only send one value per variable to PDFMonkey. For example, let’s say that the template in PDFMonkey expects data in this way:
    
    ```python
    {
      "property_name": "Park Place"
      "property_inspector": "Alma Malmberg",
      "doors_requested": 5
    }
    ```
    
    You could then send 2 text columns and 1 number column from Glide called `property_name`, `property_inspector`, and `doors_requested` to populate your PDF file. " /%}   

    
    