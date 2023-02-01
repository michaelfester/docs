---
title: Construct URL
description: Create URLs based on the different values in your table.
video:
slug: construct-url
---

The Construct URL column lets you create a URL using custom and/or column values.

For example, in the table below we have a list of speakers at a conference and each of them has a column for their Twitter handle. 

To create a unique URL for each of them we can use the Construct URL column. You can see we've added  twitter.com as the hostname and the Twitter handle as the path. This creates a working link to their Twitter profile. 

![](/docs/reference/computed-columns/construct-url/Screen%20Shot%202021-02-01%20at%201.15.12%20PM.png)

{% callout %}
The protocol defaults to https:// if you leave it blank, but you can change this to anything you like.
{% /callout %}

There are many other ways you might want to use this and many of them will require a small amount of knowledge of URL anatomy. To learn more, [check out this guide](https://www.w3schools.com/tags/ref_urlencode.ASP). 