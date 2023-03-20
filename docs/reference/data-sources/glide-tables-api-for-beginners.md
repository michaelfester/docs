---
title: Glide Tables API for Beginners
description: A guide to working with the Glide Tables API for non-developers.
slug: glide-tables-api-for-beginners
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

{% cta title="Introduction To APIs: How APIs Work (With Examples)" description="Learn the fundamentals of APIs" url="https://www.glideapps.com/blog/introduction-to-apis" /%}

{% callout title="" %}
If you're unfamiliar with APIs, read this article.
{% /callout %}

## Who has access to Glide API?

For Pro, Business, and Enterprise plans, every Glide Table has its own API. With the API you can:

- Add row to table
- Set columns in row
- Delete row

{% callout %}
If you have the Business or Enterprise plan, you also have access to get all rows.
{% /callout %}

## How do I access Glide API?

To get started:

1. Open the **Data editor**
2. Go to the **Glide Table** > right-click on the table icon on the left > show **API usage**
3. This shows a window with the different text statements you can use.

{% callout type="warning" title="" %}
When working with the API, you will pass a unique API Key, sometimes labelled a **Bearer Token**. It's a long sequence of random numbers and letters that looks like this: `2F2733E2-2B70-4291-8250-633B9E8F16AF`
You should treat this as a password–it's a secret that you should not share.
{% /callout %}

![](/docs/reference/data-sources/glide-tables-api-for-beginners/Glide%20APIs.png)

{% callout title="" %}
If you're already experienced with APIs, you can view the reference doc here. If you're new to working with APIs or just need a step by step guide, read on.
{% /callout %}

{% video src="https://www.loom.com/share/5f777012334f4b2d94fee882be021546" /%}

## How to use the Glide Tables API

For this guide, we're going to use a tool called Clickup. ClickUp is used to manage projects and tasks and we want to sync some data between ClickUp, and our Glide Table.

Let's say that we want to track the data of any active business leads created inside ClickUp. Each lead goes through different stages:

1. New leads are **created**
2. Leads are then marked **qualified**, or
3. Leads are marked **disqualified**

![](/docs/reference/data-sources/glide-tables-api-for-beginners/ClickUp%20Leads.png)

We want our Glide table to reflect the above data to show:

- When new deals are created, adding a new row in our Glide Table
- When existing deals are updated or edited, set column value
- When existing deals are deleted, removing rows in the Glide Table

## Zapier to Trigger API calls

To help us achieve this, we're going to be using Zapier to trigger the API calls whenever things happen inside ClickUp.

{% callout title="" %}
There are alternative platforms that you can use, such as **Integromat** and **Apps Script**. You can also use platforms such as **Postman**, **Rest test test** to test the API, ensuring that you have the parameters configured correctly.
{% /callout %}

We're going to create three API calls inside Zapier to sync Clickup to our Glide Table:

1. **Add row when** new lead is added
2. **Set columns** in a row when the lead is marked qualified
3. **Delete** row when the lead is market disqualified

## Add Row

In order to create a row via the API in the Glide Table, you need to do the following:

1. Create Trigger (new object in Clickup)
2. Using **Webhooks by Zapier** (Custom Request action, aka. Custom API call), copy the Add Row API usage:

```js
1 {
2     "kind": "add-row-to-table",
3     "tableName": "TABLE-NAME",
4     "columnValues": {
5         "COLUMN-NAME": "COLUMN-VALUE",
6         ...
7     }
8 }
```

![](</docs/reference/data-sources/glide-tables-api-for-beginners/Frame%2056%20(6).png>)

## Configuring the Zap

To configure the Zap, we set the following conditions:

1. **Method**: `POST` (request type)
2. **Glide API URL**: [`insert URL from`] (destination)
3. **Data**: [`insert JSON Object`, `from Add Row API Usage`] (data sent to destination)

You can then choose to insert the appropriate data for each field within the JSON Object that you'd like to capture from Clickup, using Zapier's Insert Data field. These data inserts will dynamically be sent to Glide through this API call.

![](</docs/reference/data-sources/glide-tables-api-for-beginners/Frame%2032%20(5).png>)

{% callout title="" %}
Not all columns have to be specified. Columns that are not specified will remain empty or unchanged.
{% /callout %}

## Adding Headers to the Zap

The last thing we need to do is define the “headers”. The “headers” are found within the Add Row API Usage. Within Glide's curl statement, you'll see we have two headers that need to be passed along.

### Header 1

So the first is the content type. You can see that here, “content type” is set to `application/json`. This tells the API what format the data that you're sending through is in.

> JSON refers to what is called JSON format or JavaScript Object Notation.

**Content Type**: `application/json`

![](</docs/reference/data-sources/glide-tables-api-for-beginners/Frame%2032%20(4).png>)

### Header 2

The second header is the authorization or the authentication token (also seen above). This is a security feature that permits you to update this article Glide Table. Without this, Glide would reject the request (API Call). This makes sure that other users outside of your team cannot update your table. Without the authentication token, they don't have access to it within.

**Authentication**: [`insert Authentication Token`]

{% callout type="warning" title="" %}
When working with the API, you will pass a unique API Key, sometimes labelled a Bearer Token. It's a long sequence of random numbers and letters that looks like this: `2F2733E2-2B70-4291-8250-633B9E8F16AF`
You should treat this as a password–it's a secret that you should not share.
{% /callout %}

## ROW IDs

Depending on the platform that you're using, you may need to create a workaround to store the RowID that Glide produces each time a new row is added within the table.

![](</docs/reference/data-sources/glide-tables-api-for-beginners/Frame%2056%20(15).png>)

In this scenario, we need to store the RowID that gets returned whenever a row is created and map it to the ID of the lead inside ClickUp.

{% callout title="" %}
Some platforms do not have an action where you can update a custom field inside of a task.
{% /callout %}

Here, we've created a third step in our Zap to create a new row in a Google sheet to store the Row ID that was added in the Glide Table. In this example, we're mapping this Row ID to the ID of the object inside ClickUp. This helps us to map each lead in ClickUp to a specific row inside of Glide. We'll be needing this when updating or deleting the rows shown below.

![](</docs/reference/data-sources/glide-tables-api-for-beginners/Frame%2056%20(20).png>)

**Turn the Zap on**. Now, when you add a new lead inside ClickUp, you'll see it adds a new row to the Glide Table

## Update Row (Set Columns)

The next Zap is set to update a row based on activity inside ClickUp. Again, using Webhooks by Zapier (Custom Request action), copy the Set Columns API usage:

Just like when adding a row, most details will remain the same. The only thing that has changed is the JSON object.

- The action is now **set-columns** instead of **add row**
- We also need to define the Row ID (we have to define the row ID so that Glide knows which row we want to update)

![](</docs/reference/data-sources/glide-tables-api-for-beginners/Frame%2056%20(18).png>)

## Inside our Zap

1. our trigger is whenever a lead in ClickUp is changed to a qualified status,
2. we have an action to look up the RowID based on the ClickUp ID for that lead, and
3. then we send another custom request (or custom API call):

```js
1 {
2     "kind": "set-columns-in-row",
3     "tableName": "TABLE-NAME",
4     "columnValues": {
5         "COLUMN-NAME": "COLUMN-VALUE",
6         ...
7     },
8
9     ROW-ID-OR-INDEX
10 }
```

**The only things being changed are:**

- any columns we wish to update. (In this instance, we are setting our Glide Table Boolean column to true)
- And we update the RowID value to the value produced by the lookup action that looks up in our Google sheet the Row ID based on the ClickUp ID for that lead.

![](</docs/reference/data-sources/glide-tables-api-for-beginners/Frame%2032%20(6).png>)

{% callout title="" %}
You may see the ROW-ID-OR-INDEX displayed as ROW-ID or rowIndex: ROW-INDEX. ROW-INDEX should only be used for Google Sheet tables. It must be a zero-based number as the first row in the sheet has an index of 0.
{% /callout %}

Now, when you move a lead into “qualified”, you'll see the row gets updated with the values you've configured.

## Delete Row

Just like when updating a row, the Zap configuration will mostly remain the same. Again, the only thing that has changed is the JSON object.

- The action is now **delete-row**
- We only need to define the Row ID (we have to define the row ID so that Glide knows which row we want to delete)

![](</docs/reference/data-sources/glide-tables-api-for-beginners/Frame%2058%20(1).png>)

## Inside Our Zap

1. our trigger is whenever a lead in ClickUp is changed to a disqualified status,
2. we have an action to Lookup the RowID based on the ClickUp ID for that lead, and
3. then we send another custom request (or custom API call):

```js
1 {
2     "kind": "delete-row",
3     "tableName": "TABLE-NAME",
4     ROW-ID-OR-INDEX
5 }
```

We just need to pass through the RowID of the row that we wish to delete.

![](/docs/reference/data-sources/glide-tables-api-for-beginners/Frame%2059.png)

Now, when you move a lead into “disqualified”, you'll see the row gets deleted from the Glide Table

{% callout title="Need help?" %}
Schedule a call with API and Glide Expert, Darren Alderman. [**Book here**](https://calendly.com/darrenalderman/coaching?utm_source=glide&utm_medium=referral&utm_campaign=dwy-coaching&utm_term=expert&utm_content=api&month=2022-07).
{% /callout %}
