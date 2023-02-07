---
title: Forms
description: Control how you allow users to contribute to your app's data
video:
slug: forms
---

Glide's Forms feature captures information submitted by your users and adds that information to your database.

Below you can see that after the user submits a form, Glide automatically populates that user's email and the date/time of the submission.

![](/docs/guides/other/forms/2021-09-09%2009.53.37.gif)

## Setting up a form

### Adding the form button

The `Form Button` opens a separate page where users can submit information to your Google sheet. Glide can also submit data about that user, such as the user's email address and the date/time of submission.

Add the `Form Button` to any details page like you would with any other component. To access and customize the form itself, click on the Form Button and you'll be taken to the forms page with its own list of components and values. Glide will automatically add components based on the data in your sheet.

![](/docs/guides/other/forms/2021-09-09%2012.37.32.gif)

### Collecting submissions

At the top of the components panel on the right, there is a box which allows us to select the sheet that the form will write data to.

![](/docs/guides/other/forms/Forms.png)

If we keep the same sheet that our list items are in, then any form submissions will get populated on that sheet.

![](/docs/guides/other/forms/2021-09-09%2012.13.04.gif)

If you _don't_ want that to happen then create a separate sheet for form submissions and then select that sheet instead.

![](/docs/guides/other/forms/2021-09-09%2012.32.24.gif)

## Configuring forms

### Types of data

Forms can submit three types of data.

1. Data the user enters (`EDIT COMPONENTS`)
2. Data about the submission (`SPECIAL VALUES`)
3. Data from the parent item (`COLUMNS`)

![](</docs/guides/other/forms/6%20(5).png>)

### Default values

You can set a default value for each item in your form. This allows you to pre-fill each entry with data to avoid blank entries in your forms.

![](/docs/guides/other/forms/formdefaultvalue.png)

### Adding special values

In the example below, add the `User's email address` and `Current date/time` special values and make sure they are bound to the correct columns in our sheet.

![](/docs/guides/other/forms/2021-09-09%2010.42.49.gif)

### Adding column values

In the example below, a user clicks on an item (Dog) and submits information about it, but in our sheet, it's not clear which item the user was referring to. We could add a field for them to fill out saying which item they are referring to, but it's a bit annoying for them.

![](/docs/guides/other/forms/2021-09-09%2010.38.21.gif)

Instead, we can get Glide to populate this data for them using column values.

{% cta title="Column Values" description="Learn more about the Column Values" url="/docs/column-values" /%}

### Required fields

You can make certain fields required and force users to add information in them before they can submit the form. To make a field required, click on the edit-component and tick the box 'Required'.

![](/docs/guides/other/forms/2021-09-09%2010.33.29.gif)

## Editing

![](/docs/guides/other/forms/Screenshot%202019-07-11%20at%2011.25.42.png)

Some components are editable by default. In other words, anyone who can access your app can edit them, even if you haven't enabled editing. For example, components like; `Choice`, `Image Picker`, `Notes`, `Number Field` and `Phone Field` are all editable components.

If you want to allow your users to edit _entire_ list items, then you can enable `Allow editing`. To do this, navigate to the details screen of a list item and click `Allow editing`. Now you can allow your users to edit all or some of the data which appears in your app.

![](/docs/guides/other/forms/2021-09-07%2014.40.28.gif)

When you click the edit button in Glide, two things happen

1. Firstly, the app changes to show you the edit page
2. Secondly the components panel on the right changes to show a new set of components that are your edit screen components.

Glide will add these edit screen components automatically, based on the columns in your sheet, but you can customize these to change what data can be edited.

![](</docs/guides/other/forms/Editing%20components%20(1).png>)

Now your users can edit each of your list items and these changes will flow up to your sheet. When they finish editing, their changes will be reflected in the original set of components.

![](/docs/guides/other/forms/2019-07-11%2012.03.57.gif)

If you want users to only be able to edit certain columns, you can delete these from your edit screen component list. For example, if you delete the `Email entry` which is bound to the `email` column - users will no longer be able to change the email of your list items, but can still change all the other data.

![](/docs/guides/other/forms/2021-09-07%2015.34.34.gif)

You can enable editing individually for each tab, so you can allow users to edit certain tabs and not others. You can also use conditions to change what can be edited and who can edit it.

![](/docs/guides/other/forms/2021-09-07%2017.06.14.gif)

Read more here more about conditions here 👇

{% cta title="Conditional Add, Edit & Delete" description="Learn more about the conditional add, edit & delete" url="/docs/conditional-aed" /%}

### Non-edit components

You can add non-editable components in your forms to enhance the form experience. In the form below, a `Text` component simply displays a note to the user and this is not editable and does not get submitted along with the form.

![](/docs/guides/other/forms/Non%20editable%20components.png)

## Adding

![](/docs/guides/other/forms/

When you enable `Add item`, users can add data to your sheet. Like `Allow editing`, `Add item` is tab specific, so you can enable add item for some tabs and not others.

Adding an item brings up the same editable component list that we had on the edit item page. What you change in this component list will be reflected in the edit item list as well. For example, if you delete the `Text Field` which is bound to the `Title` column, this will also be reflected in your edit item screen.

Similarly to editing, you give users access to only certain columns when they add items. For example, if you want to allow users to add places to visit in a city guide app, but don't want them to be able to choose a category for their submissions, you can make sure the `Category` column is not bound to an edit screen component.

If you don't see newly added items in your sheet, scroll all the way to the bottom to check if they are being added after empty rows. By default, new Google Sheets contain 1,000 empty rows, but for a variety of reasons, these rows can appear non-empty to Glide.

![](/docs/guides/other/forms/Delete%20Empty%20Rows.gif)

## Deleting

If you want your users to be able to delete entire list items, open the edit screen in the app, head to the edit components panel on the right and enable allow deleting. When a user deletes an item, this cannot be undone in Glide or in your sheet - so make sure whoever is using your app knows this.

{% callout title="Deleting won't remove rows" %}
Glide _clears_ the row in your sheet, it doesn't delete the row.
{% /callout %}

If you want to restrict your app to only be used by certain people, then you can of course change the **sign in** settings.

![](/docs/guides/other/forms/2021-09-07%2017.00.30.gif)
