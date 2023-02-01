---
title: Make Array Column
description: Combine columns in your data source to create an array
video:
slug: make-array
---

The Make Array column allows you to join multiple values from various columns into an array, regardless of their column names. 

{% callout title="" %}
The Make Array column cannot be assigned as a Row Owner in your project. If you’d like to assign an array as a Row Owner, the array must be created in a Google Sheet data source.
{% /callout %}

{% cta title="Row Owners" description=" Learn more about Row Owners." url="/docs/row-owners" /%}

## About array columns

If you’re familiar with arrays in Glide, you’ll know that Glide will automatically create an array if the columns in your Google Sheet are named sequentially. This is useful for columns with similar data, like creating an image carousel out of an array of images.

{% figure src="/docs/reference/computed-columns/make-array/image-array.png" caption="Array of images" /%}

There may be times when you need to create an array that is based on columns that contain different information or when column names aren’t identical. This is where the capabilities of the Make Array column can provide greater functionality in your project.  

{% callout %}
Array columns combine the data from multiple columns into a single column in the Data Editor.
{% /callout %}

{% cta title="Array Columns" description="To learn more about arrays, check out this article." url="/docs/array-columns" /%}

## How to create Make Array columns

1. In the Data Editor open the table you want to edit.
2. Add a new column by clicking the plus symbol to the right of the table.

{% callout %}The plus symbol will append the column to the end of the table. To place the new column in a specific order, click on the dropdown button in the column header next to where you want to place it, and then click **Add column right.**{% /callout %}

3. Give the new column a name.
4. In the Type dropdown, choose Other from the list of computed columns, then select Make Array.

{% figure src="/docs/reference/computed-columns/make-array/creating-an-aray-column.png" caption="Adding a Make Array column" /%}

5. Under Items, enter a [custom value](/docs/custom-values), or select a column from your data source to use as the first item of your array. 
6. Continue to add items to build out your array as needed. You can select columns of different types for your array.  Once you’ve entered all the items, click Done. 

{% figure src="/docs/reference/computed-columns/make-array/selecting-columns-of-different-types-for-your-array.png" caption="Selecting columns of different types for your array" /%}

{% callout %}The order of the items in the Make Array column cannot be changed after they are entered{% /callout %}.

## Ways you can use the Make Array column

### Combine images from different columns to create an image carousel

If your data source has multiple image columns, you can use the Make Array column to combine them into a single array column that can be used to display an image carousel in your app. This is especially useful if you’re using a data source other than Google Sheets or if your image columns are not named similarly and sequentially. 

{% figure src="/docs/reference/computed-columns/make-array/image-carousel-using-an-array-clumn.png" caption="Image carousel using an array column" /%}

### Combine multiple arrays to form a new array

Your data source may contain multiple arrays. For example, you may have an array of exterior photos of a property and an array of interior photos of a property. Using the Make Array column, you can combine these arrays to create an image carousel that displays all the photos for each property. 

{% figure src="/docs/reference/computed-columns/make-array/linking-mulitiple-array-columns-together.png" caption="Combining multiple array columns" /%}

### Add an item to an array

If you need to include an additional column value as part of an existing array, you can add it as an item in your array. Although you cannot rearrange existing items in a Make Array column, you can add a new item before the first array to display it at the start or after the last to show it at the end.

{% figure src="/docs/reference/computed-columns/make-array/adding-an-item-to-an-array-column.png" caption="Adding an item at the start of an array" /%}

### Create a list of items that ignores empty columns

The Make Array column only includes non-empty data from the columns you assign as items in your array. Because of this, you can create a nicely formatted comma-separated list that automatically ignores any cells without a value.

{% callout %}
You can also combine columns of data using a Template column. However, the Template column does not ignore empty data like the Make Array column. Any cells without a value may be pulled into a comma-separated list as punctuation or gaps.
{% /callout %}

To set up a comma-separated list:

1. Add a Make Array column. 
2. Select the columns from your data source that you’d like to include in the array. 
3. Add a [Joined List](/docs/joined-list) column and select your Make Array column as the source. 

{% figure src="/docs/reference/computed-columns/make-array/joined-list.png" caption="Adding a Joined List column to create a comma-separated list" /%}

### Perform various math functions

Suppose your data source contains multiple columns of numbered values. In that case, you can use the Make Array column to group the data and then perform a variety of math functions. This is especially useful if some of your columns are empty. 

{% callout %}If a numbers column is empty, the [Math](/docs/math-column) column will interpret it as a zero value. This may cause some math functions to give incorrect results if your empty columns are intended to be excluded from the calculations.{% /callout %}

Example: You may have a data source that contains scores for various tests. Some tests may be completed while some are not yet completed. A Math column that calculates the average scores of all tests would not be accurate for each row, as it would assume zero values for each of the empty cells. Use the Make Array column to exclude empty columns from your calculation, then use a [Rollup](/docs/rollup-column) column to calculate the average. 

{% figure src="/docs/reference/computed-columns/make-array/using-an-array-column-in-a-math-function.png" caption="Using a Rollup column to calculate the average of the numbered items in an array" /%}

{% callout  %}You can use a Rollup column to perform other functions, such as determining the minimum and maximum test scores or displaying a count of how many tests were submitted.{% /callout %}