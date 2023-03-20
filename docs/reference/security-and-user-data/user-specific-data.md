---
title: User-specific Data
description: Show different data to different users.
video:
slug: user-specific-data
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

If you think about the apps you use every day, most of them have data that is specific to you. In other words, when other people log into that app, they don't see your data, they see their own.

When we build apps with Glide, we have a couple of ways to do this.

## Row Owners

If you have entire rows of data in your app that only belong to certain users, then you should use Row Owners. When you assign a Row Owner column, only the users who have been assigned that row will be able to download that data. No other users will get access to it.

{% cta title="Row Owners" description="To learn more about Row Owners, check out this article" url="/docs/row-owners" /%}

## User Specific Columns

Assigning Row Owners is great for restricting access to certain items. But what if you want to show all items to all users - but have data on each item be specific to each user - like a personal rating for that item or personal notes? For that, you need user-specific columns.

Like Row Owners, User-Specific columns are very secure.

{% cta title="User-specific Columns" description="To learn more about User-specific Columns, check out this article" url="/docs/user-specific-columns" /%}

## Conditions

Conditions can be used to hide or show components, tabs, or individual list items. However, this hiding is cosmetic. In other words, the app still downloads the data that is not seen and may still be accessible. **If your app contains sensitive or private data, you should only use Row Owners and User-Specific columns.**

{% cta title="" description="To learn more about Conditions, check out this article" url="/docs/conditions-filtering-and-visibility" /%}

## Preview as

Whether you use Row Owners, User-Specific Columns, or Conditions, you'll want to **Preview As** certain users while you build your app. This will allow you to see what they will see - without having to log in. Just put the user's email in the Preview As box and you'll see exactly what they'll see.

{% figure src="/docs/reference/security-and-user-data/user-specific-data/preview-as.gif" caption="Preview as" /%}
