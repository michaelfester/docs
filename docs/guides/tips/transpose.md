---
title: TRANSPOSE
description: Turn horizontal data to vertical, and vice versa.
video: https://www.youtube.com/watch?v=04YTjvo8zTA
slug: transpose
---

## Changing horizontal data to vertical

Spreadsheets are incredibly flexible. Within this huge and expandable grid of cells, there are really no restrictions on how you structure your data.

![](/docs/guides/core/organizing-your-data/profit-and-loss.png)

Glide, however, likes data when it's more like a database, with the data organized in rows and columns.

![](/docs/guides/core/organizing-your-data/database.png)

Sometimes, the way data is structured in your spreadsheet will not match this pattern. But that's not a problem.

If the data needs to stay in that format for other people to use, you can transpose or copy it into a new table and use it as the basis for your Glide Project.

## =TRANSPOSE

Transpose is a spreadsheet function that transforms a vertical range of cells to a horizontal range, or vice versa.

![](/docs/guides/core/organizing-your-data/mgmt.png)

Below, we have a set of **reports**. We want our Glide project to treat each month as an item, but currently, our months are laid out in columns and the properties of that month are on the left.

![](/docs/guides/core/organizing-your-data/reports.png)

We can use `=TRANSPOSE` to fix this. We'll create a new table, and type =TRANSPOSE in the top-left cell.

![](/docs/guides/core/organizing-your-data/transpose.png)

Now we can select the range of data we want.

![](/docs/guides/core/organizing-your-data/data-range.png)

Now our rows are columns and our columns are rows — and we can use this data in Glide.

![](/docs/guides/core/organizing-your-data/row-data.png)
