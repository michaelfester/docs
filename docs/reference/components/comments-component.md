---
title: Comments Component
description: Let users add comments about specific topics
slug: comments-component
---

{% callout title="" %}
The Comments Component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

The Comments component creates a section in your project where users can interact with each other by adding comments on specific topics.  

{% figure src="/docs/reference/components/comments-component/use-case-of-a-comment-component.png" caption="Example for a use case of the Comment Component" /%}

## Configure the Comments component

### Data

In the **General** tab on the right side of the **Layout Editor**, locate the **Data** section. Use the menu in the **Topic** field to select the value from your data to assign as the topic for the comments. The **topic** must be set to a column where all the values are unique to ensure users’ comments are connected to the appropriate row of data. If you don't have a column with unique values you can use a [Row ID Column](/docs/row-id).

{% figure src="/docs/reference/components/comments-component/selecting-the-data-column.png" caption="Choosing the data column to write the comment to" /%}

## Accessing Comments

If your project uses Google Sheets, Excel, or Airtable as a [Data Source](/docs/reference/data-sources/), after someone leaves a comment in your project, Glide will automatically create a new tab in your data source called **Glide: Comments**. Glide populates each comment with a unique **ID** and the **Topic** we set up earlier so that it can match the comments to the appropriate topic in your project.

{% callout title="" %}
If your project only uses [Glide Tables](/docs/glide-tables) as its data source and you’d like to track all comments in one spot, you can do so by connecting a Google Sheet, Excel, or Airtable file to your project.
{% /callout %}

{% figure src="/docs/reference/components/comments-component/comments-sheet.png" caption="Comments column in a Google Sheet" /%}

## Deleting comments

To delete a comment, follow these steps:

1. Open your project from your **Dashboard** 
2. Navigate to the screen containing the comment you want to delete.
3. Right-click it, and select **Delete comment**.

{% callout title="" %}
Deleting rows from the Glide: Comments tab in your data source will not remove the comment from your project. It must be deleted from the Layout Editor. 
{% /callout %}

{% figure src="/docs/reference/components/comments-component/deleting-a-comment.png" caption="Deleting a comment" /%}