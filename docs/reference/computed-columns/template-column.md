---
title: Template Column
description: Display dynamic text that can change with the values in other columns.
video: https://youtu.be/lJ8a0aMU2ds
slug: template-column
---

Template Columns allow you to display dynamic text from data found in other columns.

For instance, you can use template columns to create messages where you need to display user-specific information. Check out this example:

**“Welcome, {NAME}!”** is the message and **NAME** is a user-specific information extracted from a column source.
​
![](/docs/reference/computed-columns/templare-column/Template%20Column%203.png)
​
To create a template column, start by adding a column in the **Data Editor** and select 'template' as the column type.

Enter your template and assign values to the parts of your text that you want to be replaced with data from other columns.
​
​![](/docs/reference/computed-columns/templare-column/Screenshot%202021-04-24%20at%2016.40%201.png)

In this example, 'NAME' in the template is replaced by the contents of the 'Name' column.
​
​![](/docs/reference/computed-columns/templare-column/Template%20Column%201.gif)

If you plan to display user-specific information, such as names, make sure to set up User Profiles in your app. This way, data specific to that user in your template column is displayed properly in your app.

![](/docs/reference/computed-columns/templare-column/Template%20Column%202.gif)
