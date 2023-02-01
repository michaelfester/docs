---
title: Introduction to Values
description: Learn about the different values types you can work with.
video:
slug: introduction-to-values
---

When we configure our app, we're constantly working with values and using them in different ways.

## Column values

For example, in a list layout, Glide asks us to select which **Column Values** we want to display as properties.

![](/docs/reference/values/introdcution-to-values/10.png)

## Custom values

At other times, we're able to enter custom values – for example, below we can configure the **Title Component** with Column Values or a Custom Value.

![](/docs/reference/values/introdcution-to-values/20.png)

## Special values

And at other times, we get access to **Special Values** – like in the **Set Columns** configuration. Below, in the Location value field, we can click the three dots menu and choose from all three value types.

![](/docs/reference/values/introdcution-to-values/30.png)

## User profile columns

If we have enabled **User Profiles** in our app, we can access **User Profile columns** in certain contexts.

![](/docs/reference/values/introdcution-to-values/40.png)

{% callout title="" %}
Column Values, Special Values and User Profile Columns are not just things you pick in value fields, you can also use them in Forms, Add & Edit screens.
{% /callout %}

## Special Values

When a user **Adds or Edits** an item or submits a **Form**, Glide can submit additional data about their submission, like the date and time of the user’s submission or the user’s email address. These are called `Special Values`.

{% video src="https://youtu.be/EPez5vS5sqQ" /%}

**Adding a Special Value**

You can add special values to three types of screens on your app: a form, an edit screen or an add screen. There are three type of special values available on Glide:

![](/docs/reference/values/introdcution-to-values/Group%204.jpeg)

Each of these special values can be added to your app to gather additional data about a submission. However, they won't be displayed in your screen.

If we add the **`Current Date/Time`** special value, we don’t see anything in the app but we do see the value listed on the right under the `Columns` section.

We can then choose which column we want the date and time submitted to or create one for it and bind the `Date Time` value to that column. Now when a user submits data — whether through editing a list item or adding a new list item — our new column will be populated by the date and time that that user submitted the information.

![](/docs/reference/values/introdcution-to-values/1.gif)

Glide will always be able to work out what time and date it is for the user's device, but Glide will only have access to the user's email if you have set your app's sign in to be Public with Email or Allowed Email List (or if they’ve already been prompted to sign in by another action like **`Favorite`**). Otherwise, it will just stay empty. It won't prompt the user to sign in.

## Two things to note about **`Special Values`**:

1. If another user edits that item again, then the Special Value column data will be overwritten, so you will only ever see the last edited special values.

2. Special values only work the add or edit screen. If you haven’t enabled editing or adding items and a user changes an editable component, Glide won’t be able to populate your sheet with the date & time or the user’s email.

{% callout title="" %}
Special values and **column values** are both relevant to the use of **Forms**, so make sure you understand both of them.
{% /callout %}
