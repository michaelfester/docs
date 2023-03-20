---
title: User profile columns
description: Work with user data from anywhere in your project.
video:
slug: user-profile-columns
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

If you have enabled **User Profiles** in your app, you can submit User Profile _columns_ in **Form** & **Add screens**.

For example, in the app below, we're **Previewing As** a user called Marie. When we configure our Add Screen's components, we can also submit values from the current user's profile. For example – we could add the Name of the person that added this item, their title, and their photo.

![](/docs/reference/values/user-profile-columns/Group%2022.png)

Now, when a user submits a new item, their `Name`, `Title` and `Photo` properties will be added to the row.

![](/docs/reference/values/user-profile-columns/Screen%20Shot%202020-10-09%20at%2012.59.57%20PM.png)

{% callout title="" %}
You can of course compute these values with **Relations** and Lookups. In other words – you could just submit the user's email, relate that email to the user profiles table and then lookup the necessary information.
However, User Profile columns may be a simpler option for your use case – with the added benefit that the values get written to **Basic Columns** – which means they appear in your sheet!
{% /callout %}

## Assigning the user's Role column

Submitting User Profile column values is particularly useful when it comes to **Roles** as it allows you to automatically secure the row that gets added and make it accessible only to people with the same role as the person who added it.

Confused? 😉

Let's say that Marie has the role of 'Management'. When she submits a new row, we can make sure that her 'Management' Role value gets added to our **Row Owners** column in whatever table we're submitting to. We just need to add a User Profile column in our Add or Form screen.

Now, automatically, the row she added will populate the Row Owner's column with 'Management'. This means that this row is now secure and only visible to those with the Role of 'Management'.

You can of course use **Array Columns** if you want the row you're adding to be accessible to multiple roles.
