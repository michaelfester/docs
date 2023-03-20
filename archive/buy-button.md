---
title: Buy Button
description: Let users purchase items in your projects.
slug: buy-button
---

{% callout title="" %}
The Buy Button Component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

{% figure src="/docs/reference/components/buy-button/buy-button.png" caption="An use case of the Buy Button" /%}

{% callout title="" %}
To use the **Buy Button** in your projects, you must connect a **Stripe** account. Glide does not charge a fee in addition to Stripe's transaction processing fee.
{% /callout %}

## Tracking your sales

If your project uses Google Sheets, Excel, or Airtable as a data source, after someone completes a successful checkout, Glide will automatically create a new tab in your data source called **App: Purchases**. Glide populates each purchase with all the details of the purchase, including the SKU of the item. Here we will also find the **Processor Link** which will take you to that transaction in Stripe. Here we can issue a refund if necessary.

If your project only uses [Glide Tables](/docs/glide-tables) as its data source and you'd like to track all sales in one spot, you can do so by connecting a Google Sheet, Excel, or Airtable file to your project.

{% figure src="/docs/reference/components/buy-button/app-purchase-example.png" caption="" /%}

'App: Purchases' sheet example

**Restricted Businesses**
Stripe restricts certain categories of businesses from accepting payments, including:

- Investment & credit services
- Money and legal services
- Virtual currency or stored value

Be sure to review the list of [restricted business categories](https://stripe.com/en-pl/legal/restricted-businesses).
