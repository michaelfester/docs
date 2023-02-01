---
title: Array Columns
description: Combine multiple values into a single value.  
video: https://www.youtube.com/watch?v=x_vKwWrK9wE
slug: array-columns
---

Array columns combine the data from multiple columns together into a single column in the [Data Editor](/docs/data-editor). To make an Array Column, we create columns with the same name and then number each one sequentially. It’s important that each column has the same exact text and then the next number in each column. For example:

![](/docs/reference/basic-columns/array-columns/array-columns-1.png)

In the Data Editor, we can see that our 5 columns have become a single column with all the values from all 5 columns.

![](/docs/reference/basic-columns/array-columns/array-columns.png)

​
We can use this Array Column in a variety of ways. One example is creating an Image Carousel.

If we add an [Image Component](/docs/image-component) and choose this new Array Column as the source, our image component turns into an image carousel displaying all the images in our Array Column.

You can use array columns in other ways, for example in [Relations](/docs/relations), per user filtering and [Row Owners](/docs/row-owners).