---
title: Single Value Column
description: Retrieve a single value from a column or relation.
video:
slug: single-value-column
---

{% video src="https://youtu.be/h31dASRgd1k" /%}

{% callout %}
The video above doesn't contain the latest updates to the Single Value column. We will update the video soon – but you can read about these below. 
{% /callout %}

The Single Value column lets you display the same value displayed for every single item. The source of that value can be from any table in your app or any multiple relation in the current table. 

The first dropdown allows you to choose where in that source the single value will be retrieved. You have the options of:

- **First** = get the first or topmost value from the source
- **Last** = get the last or end value from the source
- **Random** = get a random value from the source
- **From start** = get a value X number of places from the start of the source
- **From end** = get a value X number of places from the end of the source

​![](/docs/reference/computed-columns/single-value-column/Screen%20Shot%202020-10-05%20at%209.22%201.png)
​
## From start + From end

With From start and From end, you can add a row value, such as '2' rows from the start👇
​
![](/docs/reference/computed-columns/single-value-column/Screen%20Shot%202020-10-05%20at%209.53%201.png)

Or you can choose a column value for the row and therefore the single value will become dynamic. In the image below you can see on the far left, we have a number column. In the Single Value Column we've chosen this column for the Row number. 

Anywhere the value is 0, the Single Value chooses the top row from the source. Anywhere the value is 1, the Single Value chooses the second row from the top... etc.  

![](/docs/reference/computed-columns/single-value-column/Screen%20Shot%202020-10-05%20at%2010.07%201.png)
​
## Whole row

The Single Value column can also bring back the Whole Row as opposed to just a single value. This allows it to act somewhat like a Relation Column. When we change the option to Whole row – we can then display that 'value' in a [Relation Component](/docs/relation-component). 

![](/docs/reference/computed-columns/single-value-column/Screen%20Shot%202020-10-05%20at%2010.11%201.png)