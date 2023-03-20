---
title: Row Owners
description: A secure way to restrict access to certain rows.
slug: row-owners
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

{% callout type="warning" title="Restricting access" %}
If your app has data that some users should access, but not all users should access, then you should use **Row Owners** to protect that data.
{% /callout %}

{% video src="https://www.youtube.com/embed/TpejISC2UrY" /%}

Anyone who can sign in to your app can see the data it downloads, either in your app's user interface or by inspecting network traffic with common tools such as a browser's developer console.

Row Owners lets you restrict who can download data based on the email address they sign in with. If a sheet has Row Owners enabled, then the current user can only download rows that they own; Glide's servers will prevent the user from downloading rows that they do not own, so those rows cannot be read by inspecting network traffic or by any other means.

This feature is free to use and available for all Glide apps.

If your app has a **User Profiles** sheet, where each user should access their own profile row but not the profile rows of other users, you should enable **Row Owners** on that sheet. Here are some examples and strategies to help you apply this to your apps. 👇

## Example 1: User Profiles

In the **Employee Template**, there are two tables for staff. One is the Public Profiles, and the other is the User Profiles sheet.

![](/docs/reference/security-and-user-data/row-owners/public-vs-private.png)

The public profiles table is used to display public profiles in the app. None of the data is private here (Name, Title, etc.), so we can just display it in a list layout (below left).

The User Profiles table however has private data on it (Social Security, Date of Birth, etc.) so has Row Owners enabled on it. The app will only access data for the currently signed-in user, and no other user data will be accessed. Therefore, only the row belonging to the currently signed-in user shows.

![](/docs/reference/security-and-user-data/row-owners/public-vs-private-profiles.png)

### Mirroring columns across sheets for different views

So, to summarize – we want a 'My Profile' tab where employees can edit their own private data and then a Directory tab where everyone can see the basic information for each employee.

Because Row Owners protects the entire row, this means we can't use Row Owners in the table powering our Directory tab.

We could manually maintain two separate tables (one with public staff information and the other with User Profiles), but this is arduous and will be prone to errors.

Instead, we can mirror the non-private columns from the User Profiles sheet and display them in a second sheet. Then we can show the data in the non-private sheet without Row Owners.

We can do this using **=ARRAYFORMULA**. In the image below you can see the two sheets. In the top-left cell of the Staff sheet we're using `=ARRAYFORMULA('User Profiles'!A1:H)` to mirror the non-private columns in the User Profiles sheet. The Staff sheet is then displayed as public Company Directory data.

![](/docs/reference/security-and-user-data/row-owners/arrayformula-closeup.png)

## Example 2: Protecting an entire sheet for an admin

You may have an entire sheet that has private information that you only want to be visible by one user – an 'Admin'. To do this, you just need to make sure that every row in that sheet has the admin's email in an email column – and then make that column a Row Owners column.

{% figure src="/docs/reference/security-and-user-data/row-owners/apply-row-owners.png" caption="Applying row owners to a column with the same email in every row" /%}

Now the only person who will be able to download that sheet's data is the person who's email you've added in the Row Owner's column.

{% callout title="Protect a sheet" %}
If you are trying to protect a sheet that has new rows added often, then you'll want to use **ARRAYFORMULA** to automatically add the admin's email to new rows.
{% /callout %}

## Example 3: Assigning multiple Row Owners

You may want multiple owners for certain rows. You can use an **Array Column** containing multiple emails, and assign that as the Row Owner.

We can make more than one column a row-owner column. For example, in the table below, we've made another column that contains an administrator's email in every row. This way, each individual user is a row owner for their row, but the administrator is also a row owner.​

![](/docs/reference/security-and-user-data/row-owners/admin-in-every-row.png)

{% callout title="Enable Row Owners" %}
Above all, enable Row Owners wherever you can. We recommend turning on **Row Owners** for any sheet you can, even if you don't yet have plans to use that data in your app. This will prepare your data to be secure in the event that you decide to use it in your app later.
{% /callout %}
