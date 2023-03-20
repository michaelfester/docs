---
title: Column values
description: Column values are the values in the tables of your data source.
video:
slug: column-values
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

When you work with any component or list layout, you're usually displaying values from a column in your table. These are therefore referred to as Column Values.

For example, in this app, the list layout is displaying the Column Value 'Item' for each item's title. It is also displaying the Column Value 'Collection' as the header.

![](/docs/reference/values/column-values/Screen%20Shot%202021-01-14%20at%209.11.23%20AM.png)

In the app below, the title component is displaying a mixture of Column Values and Custom Values.

- The title is displaying the 'Item' column value
- The details is displaying the custom value of "Item Details"
- The image is displaying the column value 'picture'.

{% callout title="" %}
If we wanted to change the details to be a column value again, we could click the three-dot menu and select the column.
{% /callout %}

![](/docs/reference/values/column-values/Screen%20Shot%202021-01-14%20at%209.12.18%20AM.png)

## Column values in submission screens

But column values are also used in submission screens – in other words; **Add, Edit** & **Form** screens. They can be used to send values from the current item.

{% video src="https://youtu.be/2XEf6BVYciA" /%}

For example, in the app below the **`Title`** and **`Price`** of the item get passed into the sheet with the form submission without the user having to do anything.

![](/docs/reference/values/column-values/2019-11-21%2010.37.48.gif)

When you submit a **form** you ask users to fill in data and this gets sent to your sheet. Sometimes those forms are within list items that contain data that's relevant to the form that's being submitted and this is where column values are useful.

For example, the app below is an app for a store. Users can browse items and buy them with the **`Buy Button`**. But they can also submit a form to ask questions about the item they are looking at.

When they tap 'Ask a question' a form is triggered and the submissions go to our submissions sheet.

![](/docs/reference/values/column-values/1.gif)

In the example above, this form is obviously not that helpful as the owner of the app won't know which item the user is referring to. The owner of the app could create multiple **`Text fields`** that ask the user which item they are referring to but that is not a great user experience.

Instead, we can pass column values from the item itself into the form so that when a form is submitted, the name, price and any other details about that item gets submitted with the form.

![](/docs/reference/values/column-values/2.gif)

When you customize the components within a form, you will be able to choose normal **`components`**, **`special values`** AND 'Column Values'. The column values will be every column in that sheet and therefore will always be different, depending on the columns in that sheet.

Here we can see that our column values are `Product`, `Description`, `Price` and `Picture` 1, because those are the columns in the sheet that our **`Form button`** is located in.

![](/docs/reference/values/column-values/Group%207.png)

Simply add these columns to your form when you are customizing it and make sure that they are matched with an empty column in your submissions sheet. Then, when your form is submitted, these column values will be passed along with the submission so it's clear which item the form was submitted in.

![](/docs/reference/values/column-values/3.gif)

Adding column values and **special values** to a form can make the experience very simple for your users and also pass a lot of useful information to your sheet.
