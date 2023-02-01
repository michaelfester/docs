---
title: Subcategories + Hierarchies
description: Learn how to create deeply nested categories in Glide.
video:
slug: heirarchies
---

When we link items together with relations, we are in a sense *categorizing* those items. If we relate all employees to locations, then we could say that our employees belong in different categories of locations. 

But what happens when we want to have subcategories? Well we don’t need to do anything different in the data editor, we just need to think clearly about hierarchy and more specifically, 'parents' & 'children'. 

## Parents & children

When working with multiple categories, it’s important to realize that each level of category will have a parent or child, or both. In the example below, we have a list of food types. A parent is the item 1-level-above in the hierarchy and a ‘child’ is an item 1-level-below in the hierarchy. 

![](/docs/guides/tips/subcategories-hierarchies/Group%209%20(1).png)

{% callout title="" %}
- Level 1 has a child of level 2, level 2 has a child of level 3 etc
- Level 6 has a parent of level 5, level 5 has a parent of level 4 etc
- Level 1 doesn't have a parent and level 6 items don't have children
{% /callout %}

In a spreadsheet we don’t visually nest items like we do in documents with bulleted lists (above). Instead, we have a column where we indicate the item’s parent. 

![](/docs/guides/tips/subcategories-hierarchies/Screenshot%202019-12-03%20at%2014.45%201.png)

{% callout title="" %}
'Food types' (level 1) doesn't yet have it's own row. We will come to this later.
{% /callout %}

{% callout title="" %}
Note that the title of the ‘parent’ column doesn’t need to be “parent” - we just named it that for demonstration purposes. The name of this column can be whatever you want. [**Copy the sample sheet here**](https://docs.google.com/spreadsheets/d/10TsTGUfOMnelMQuu2bpmroqVhE_V1SSsbGv-Rs43bs0/copy). 
{% /callout %}

If we were to look at ‘Red Cardinal’ (row 25) - the parent of this item would be ‘Smooth Leafed’. The parent of ‘Smoothed Leafed’ would be ‘Spinach’ etc… if we follow the hierarchy all the way up we get to ‘Food Types’. The full path to 'Red Cardinal' would therefore be:

- Food types 
- Vegetable
- Flowers & leaves
- Spinach
- Smooth leafed
- Red cardinal

When we create a **relation column** using our **Parent** column (in other words a relation that relates items to their parents) and we have a number of ‘levels’ then the result will be that we can tap through deeper and deeper into the hierarchy and give the user a clear experience of this nesting of categories.

![](/docs/guides/tips/subcategories-hierarchies/2021-09-20%2015.16.14.gif)

## Relations & inline lists

### First relation - children

We've indicated the parent of each item in our sheet, but we need to set up a relation that uses that column to relate the children of each item. 

To do this, we create a new relation column that relates items where the value in **`Category`** matches the value in **`Parent`** and we make sure that it's a **multiple relation**.

![](/docs/guides/tips/subcategories-hierarchies/CleanShot%202021-09-20%20at%2015.18.03@2x.png)

Now we can add an inline list to each of our items and connect the new **`Children relation`** column. 

![](/docs/guides/tips/subcategories-hierarchies/2021-09-20%2015.19.41.gif)

## Second relation

Our first relation allows us to link all our items together in a parent/child relationship. However, our top level screen still shows the whole list of items. We actually only want to see level 2 items (vegetables, fungi etc) initially and then dig into that level and explore the subcategories. 

To show only level 2 items we need to create another relation on a separate sheet. This new sheet will act as our home screen and will be where the list of level 2 items sit. This screen will have a **details layout** so only needs one row with one cell of data that we can relate to - the name of the top level.

![](/docs/guides/tips/subcategories-hierarchies/Screenshot%202019-12-03%20at%2016.35%201.png)

The reason we use this is that we want to relate level 2 items to their parent - which in our case is 'Food types' - the top level of the hierarchy. 

All we need to do then is create a relation column that relates all the items with 'Food types' as their parent. This results in relating level 2 items - vegetables, fungi, fruit etc...

![](/docs/guides/tips/subcategories-hierarchies/CleanShot%202021-09-20%20at%2015.21.26@2x%20(1).png)

## Inline list for level 2 items

Now we can add an inline list on our home screen and connect it to our new relation! We should now be able to visit all items within our hierarchy from our top level. 

![](/docs/guides/tips/subcategories-hierarchies/2021-09-20%2015.23.05.gif)