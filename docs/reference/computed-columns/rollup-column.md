---
title: Rollup Column
description: Perform calculations on columns, such as count, average, and sum.
video:
slug: rollup
---

The rollup allows you to perform a calculation on an entire column or a [Relation](/docs/relations). The most basic computation for the rollup is Count.

For example, in the image below we create a rollup column that counts the number of items in the `Animals` column. The result is a number: the total number of animals that fit that parameter.

![](/docs/reference/computed-columns/rollup-column/Rollup%20simple.gif)

## Column or relation source

For example, in the app below we have a list of people who all have tasks. The `Tasks` column is a relation that pulls in every task assigned to each individual person. We can then create a rollup column that counts the total number of tasks for each person.

![](/docs/reference/computed-columns/rollup-column/2020-03-17%2005.43.51.gif)

To create a rollup column:

- Open the data editor and add a new column. 
- Label your column and select “rollup” as the column type.

{% figure src="/docs/reference/computed-columns/rollup-column/adding-a-new-column.png" caption="Creating a new Rollup Column" /%}
    
- Choose with existing column or relation you want to perform your calculation on.

{% figure src="/docs/reference/computed-columns/rollup-column/choosing-the-values.png" caption="Choosing the values" /%}
    
- Choose which calculation you want to perform.

{% figure src="/docs/reference/computed-columns/rollup-column/choosing-which-calculation-to-perform.png" caption="Choosing the valuesChoosing which calculation to perform" /%}
    
- Specify the precision in decimal points for your calculation, as well as if you want to use a group separator or add units to the calculation. 
   
{% figure src="/docs/reference/computed-columns/rollup-column/configuring-the-display-section.png" caption="Configuring the Display section" /%}
    
- Select Done, and you will immediately see your calculations fill the column. 
   
{% figure src="/docs/reference/computed-columns/rollup-column/example-for-a-rollup-column.png" caption="Example for a Rollup Column" /%}

## Calculations

The Rollup Column can perform different calculations based on the data it finds in the column or relation you select.

### Numbers

The rollup column can calculate the Count, Count Unique, Sum, Average, Range, Minimum, and Maximum of number values.

![](/docs/reference/computed-columns/rollup-column/2020-03-17%2006.07.12.gif)

### Dates

The Rollup Column can calculate the Count, Count Unique, Earliest, and Latest of date values.

![](/docs/reference/computed-columns/rollup-column/2020-03-17%2006.07.49.gif)

### Boolean

The Rollup Column can calculate the Count, Count Unique, Count True, Count False, All True, and Some True.

![](</docs/reference/computed-columns/rollup-column/2020-03-17%2006.13.06%20(1).gif>)

### Text

The Rollup Column can calculate Count or Count Unique.

![](/docs/reference/computed-columns/rollup-column/Rollup%20simple.gif)
