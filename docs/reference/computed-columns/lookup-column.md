---
title: Lookup Column
description: Retrieve values through a relation.
video: https://www.youtube.com/watch?v=_y_db4dg8Iw
slug: lookup-column
---

Lookup Columns give you the ability to pull data from other sheets based on a relation column that you’ve created.

With a lookup column, you can retrieve information from any specified column as long as a relation column exists for that sheet.

To create a lookup column, head to the [Data Editor](/docs/data-editor) and add a new column. Choose “Lookup” from the column types and choose the relation column that best fits your query. Once you’ve chosen a relation column, choose which column you want to pull data from.

​![](/docs/reference/computed-columns/lookup-column/Lookup%20Column%20GIF%201.gif)
​
{% callout %}
Note that if you’re using a multiple relation column, your Lookup Column will also retrieve multiple data.
{% /callout %}
​​
![](/docs/reference/computed-columns/lookup-column/Lookup%20Column%20GIF%202.gif)

{% callout %}
You can also use the lookup column with multi relations.

As an example of how this might be useful, say you wanted to show an Image Carousel of all the employees working in an office. First, you would lookup the Photo column in the Employees multi relation. This would bring back all the employee's images and you could bind the resulting column to an [Image component](/docs/image-component).
{% /callout %}
