---
title: Keys & unique IDs
description: Use unique values to make your projects more reliable.
video:
slug: keys-unique-ids
---

In Google Sheets, rows don't really have an identity apart from their row number. In the image below we can see that the talk `State of UX` is located in `row 4`.

![](/docs/reference/values/keys-and-unique-ids/10.png)

This is fine, but if you add, move or delete rows, that row's location will change. In the image below `State of UX starts` off in `row 4` and ends up in `row 3`.

![](/docs/reference/values/keys-and-unique-ids/20.gif)

In some circumstances this is fine, but if you have components like **`Comments`** and **`Favorite`** or use **`Relations`** (that need to know the exact location of a row) and then the row number changes, these components will be confused as they are only looking at row numbers.

In the image below, you can see this happen with the `Favorite` component after we delete some rows from our sheet. After we delete them, the item we favorited changes to a totally different talk.

![](/docs/reference/values/keys-and-unique-ids/30.gif)

## Unique Identifier

The way to solve this issue is by giving each row a `Unique Identifier`. In other words, a value in a column that will always be different for each row. And the easiest way to do this in Glide is by using the [Row ID](/docs/row-id) column in the data editor.

If you don't have a Row ID column in your table, components like `Comments` and `Favorite` will ask you to set a Key or a Topic. This is a manual way for you to connect that component with a column of unique values in your sheet so it can keep track of that row. The Row ID column is the best way of doing this. 
