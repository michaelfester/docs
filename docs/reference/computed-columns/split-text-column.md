---
title: Split Text Column
description: Take a string and split it up into an array.
video:
slug: split-text-column
---

The Split Text column splits up text by a value of your choosing. For example, say we have a list of people separated by commas.

`Marie Rao`, `Tamsin Woodward`, `Alan Eijk`, `Fo Lambert`, `Christina Wallace`, `Ryan Holbert`

Because this value lives in a single cell, Glide sees it as a single value. However we can split it up by the commas. 

![](/docs/reference/computed-columns/split-text-column/go.glideapps.com_app_6L1m67xelmQ0opYkjebs_data.png)

When we do this, we end up with a new column with multiple values. 

![](/docs/reference/computed-columns/split-text-column/Screen%20Shot%202020-09-18%20at%208.27.59%20AM.png)

Because this is a computed column, we can't then show that column in our [Google Sheet](/docs/google-sheets), however, we can, for example, use it in a [Relation](/docs/relations).

In the image below we have created a relation column with the joined list column which relates all employees who are attending this meeting. 

![](/docs/reference/computed-columns/split-text-column/Screen%20Shot%202020-09-18%20at%208.28.59%20AM.png)

We can now create an [Inline List](/docs/inline-list) inside a meeting which shows all the participants, and all we had to start with was a single cell of data! You can even show this cell in your app and allow people to add new values. 

![](/docs/reference/computed-columns/split-text-column/Untitled.gif)



 