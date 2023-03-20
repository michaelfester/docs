---
title: Glide Tables API
description: Explore what you can do with the Glide Tables API
slug: glide-tables-api
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

{% cta title="Glide Tables API for beginners" description="Learn the basics of APIs" url="/docs/glide-tables-api-beginners" /%}

The Glide Tables API is available to anyone with the Pro, Business, or Enterprise plan. Connecting to your [Glide Tables](/docs/glide-tables) via the API allows you to automate your data management and integrate it with your own applications.

## What you can do with Glide Tables API

The API gives you the ability to:

- Add rows to tables
- Set columns in rows
- Delete rows

{% callout %}
If you have the Business or Enterprise plan, you also have access to get all rows.
{% /callout %}

## How to access Glide Tables API

After connecting to your data source, you can take the following steps to show the API calls.

1. In your project, go to the **Data Editor**.
2. Find the table you want to manage using the API.
3. Right-click on the table and select **Show API**.

{% figure src="/docs/reference/data-sources/glide-table-api/how-to-get-the-api-in-glide-tables.png" caption="Opening the API instructions for your table" /%}

The **API Instructions** screen displays the calls to use to take the available actions.

{% figure src="/docs/reference/data-sources/glide-table-api/api-menu.png" caption="Available API calls for tables" /%}

## How to use the API calls

If you're already experienced with using APIs, explore the sections below for specific details about each call.

{% cta title="Glide Tables API for Beginners" description="New to APIs? If you want a step-by-step guide for setting up an API automation tool and using each call, checkout this article" url="/docs/glide-tables-api-for-beginners" /%}

### Mutations

The `mutateTables` call in each Glide curl statement adds one or more mutation operations for tables in an app in Glide's queue. After they're added to the queue, they can be processed anytime after the call returns the actions.

This call takes a JSON body of the following form:

```js
1 {
2     "appID": "APP-ID",
3     "mutations": [MUTATION, ...]
4 }
```

{% callout %}
At least one mutation must be given. Although there is no definite or enforced upper bound on the number of mutations, it is recommended to keep them below 100.
{% /callout %}

The call will succeed if all mutations succeed. It will fail if even one mutation fails. It will return a JSON response that's an array of results - one for each mutation. If a mutation fails, then its result has a property error which is an `error` message.

Keep in mind…

- Actions that are enqueued are not guaranteed to succeed. For example, an action to delete a row that does not exist might successfully be queued. However, it will not be processed successfully since there is nothing to delete against.
- Actions are not guaranteed to be processed in sequence. For example, two added rows will not necessarily be added in the order they are given in the `mutations` array.

{% callout %}
Mutations available in the Glide Tables API include `add-row-to-table`, `set-columns-in-row`, and `delete-row`.
{% /callout %}

### Add rows

The `add-row-to-table` mutation adds one row to your table.

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

If the table has a `Row ID` column and the call is successful, the result will have a property `rowID` with the `row ID` of the row to be added.

{% callout %}
Not all columns have to be specified. Columns that are not set will remain empty or unchanged.
{% /callout %}

### Set columns

The `set-columns-in-row` mutation sets one or more columns in an existing row in your table.

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

The `ROW-ID-OR-INDEX` is one of the following:

- `"rowID": "ROW-ID"`
- `"rowIndex": ROW-INDEX"`

{% callout %}
`ROW-INDEX` should only be used for Google Sheet tables. It must be a number, and it's zero-based, i.e. the first row in the sheet has index `0`.
{% /callout %}

### Delete rows

The `delete-row` mutation deletes an existing row from your table.

```js
1. {
2.     "kind": "delete-row",
3.     "tableName": "TABLE-NAME",
4.     ROW-ID-OR-INDEX
5. }
```

{% callout %}
`ROW-ID-OR-INDEX` is interpreted identically to `set-columns-in-row`.
{% /callout %}

## Queries

{% callout %}
If you have a Business or Enterprise plan, you will also have access to a call that allows you to query your tables. This option is not available to Glide users with the Pro plan.
{% /callout %}

The `queryTables` call takes a list of table names and returns all the rows in those tables.

It takes a JSON body of the following form:

```js
1. {
2.     "appID": "jD5sfkQujM9ywabItn0l",
3.     "queries": [QUERY, ...]
5. }
```

Each query looks like this:

```js
1. {
2.     "tableName": "TABLE-NAME",
3.     "startAt": `CONTINUATION`
5. }
```

`StartAt` is optional, and needs only be sent when continuing a previous query that did not return all rows. For example:

The call returns an array with one element for each query, each of which looks like this:

```js
1. {
2.         "rows": [ROW, ...],
3.         "next": CONTINUATION
5. }
```

Each `row` is a row object, with one property per column. The `next` field will only be sent when there are more rows in the table than Glide sent in the response. To get more rows, make another call and send the `CONTINUATION` in `startAt`.

## Learn Glide Tables API

Want to see the API in action? Explore the resources below.

- Article: [Glide Tables API for Beginners](/docs/glide-tables-api-for-beginners)
- Video: [How to Use the Glide Tables API (Getting Started in 2022)](https://youtu.be/mbtUy6mpbyY)
