---
title: joined List
description: Join multiple values together into a single value.
video:
slug: joined-list
---

The Joined List computed column joins or concatenates many values into a single text value. For example, it could join a list of names into text like "Alice, Bob, Susan" using the separator `", "`.

![](/docs/reference/computed-columns/joined-list/Joined%20List.gif)

Here we can see the column gathering all the values in the Name column and joining them into one long string of text.

But often joining the values of a multi-relation may make more sense. In the image below the Joined List column is pulling values from a relation and bringing back a simple list of ingredients. With all these values in one cell, we can now display this list simply in a [Text Component](/docs/text-component).

{% figure src="/docs/reference/computed-columns/joined-list/Screen%20Shot%202020-08-11%20at%204.40.21%20PM.png" caption="Using the Joined List column to join ingredients for a recipe" /%}

The Joined List column also allows you to choose how you separate these different values. By default, all values are separated by ", " but you can add whatever you want as a separator – including a value from another column.
