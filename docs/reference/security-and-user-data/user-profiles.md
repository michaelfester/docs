---
title: User Profiles
description: Define, store, and use data on your project's users.
video: https://www.youtube.com/watch?v=5lQdJn-bHto
slug: user-profiles
---
User profiles lets you choose a specific table where data about your users (Name, Email, Image etc) lives. When a user profiles table is set, you can use that data in lots of different ways. 

{% figure src="/docs/reference/security-and-user-data/user-profiles/user-in-app-menu.png" caption="The name, email & avatar of the signed-in user also shows up in the app menu" /%}

{% callout type="warning" title="User privacy" %}
User data in a User Profiles table is very often private and needs to be kept secure. You should therefore add Row Owners to your User Profile's table.
{% /callout %}

{% cta title="Row Owners" description="To learn more about Row Owners, check out this article" url="/docs/row-owners" /%}

## Setting the user profiles table
To use user profiles, your app needs to use **Public with Email** or **Allowed Email List**.

By default, no user profile table is set. To set one, create a new table with columns for `Name`, `Email`, and `Image`. You can add more later, depending on the properties of your users.

Next, click the tab **User Profile**. The right panel will now show User Profile settings. Choose the table with your users and connect the `Name`, `Email`, and `Image` to the correct columns. You can also enable or disable the **Allow image upload**. 

{% figure src="/docs/reference/security-and-user-data/user-profiles/setting-up-user-profiles.gif" caption="Setting up user profiles" /%}

We can also enable **Edit Form**, which allows users to edit their profile from the User Profile tab. We can also add editing conditions to this feature.

## Using the user profiles table

A user can have many more properties than Name, Email & Photo. These don't have to show in the app, but can be used in many different ways. Below are some basic examples 👇
### Editing conditions
Let's say you wanted to give users different levels of access in your app. For example, **editors** and **users**. Editors can edit & delete items whereas users can only view items. 
You can achieve this by creating a new column in your users table called (for example) 'Access Level'. Then in this column you can put 'Editor' or 'Viewer' for each user.

![](/docs/reference/security-and-user-data/user-profiles/sample-table.png)

Next, you can add a **condition on editing** which allows only users with 'Editor' in the Access Level column to be able to edit items. 

{% figure src="/docs/reference/security-and-user-data/user-profiles/adding-condition-on-editing.gif" caption="Adding a condition to editing" /%}

### Component visibility
You could also add properties to your User Table which could be used to hide & show components. In this way, you would be able to show some content to some users and hide it from others. 

Instead of using text based conditions, you could create a TRUE or FALSE column. If a user has bought a subscription to your app, you could make this column TRUE and if they haven't, leave it FALSE. 

Next, you could set **visibility conditions** on some of your components using this column. This way, you could hide 'premium' content in your app to free users and unlock it for paying customers

![](/docs/reference/security-and-user-data/user-profiles/visibility-conditions.png)

{% callout title="" %}
Visibility conditions, hidden tabs, and removed components are not security features—they are merely changes to the appearance of your app. Do not rely on changes to the appearance of your app for security.
{% /callout %}

### Computed columns
You can also use User Profile data in computed columns like the **Template Column**. For example, you could create a message that welcomed the user and referred to them by name. 

In the image below, you can see that as we **Preview As** different users, the name in the Template column changes. This column can then be assigned to a **Text component** on a welcome screen. 

{% figure src="/docs/reference/security-and-user-data/user-profiles/preview-as.gif" caption="Preview as" /%}

{% callout title="" %}
If you have enabled User Profiles you will see the user profile columns in many different places in Glide: **Filters**, **Edit Conditions**, **Component Visibility**, **Conditions**, and **Computed Columns**.
{% /callout %}

## Roles
Now that you understand User Profiles, check out our guide to Roles – a way to assign different roles to users and build your app around those roles.

{% cta title="Roles" description="Learn more about Roles here" url="/docs/roles" /%}

## User profile screen

When a user clicks on their profile image in the app menu, they will be taken to their user profile screen. You can configure this screen with components to show and allow the user to edit information. A quicker way to access the configuration screen is by clicking on the tab '**User Profile**', this will redirect you to the User's Profile screen. 

{% figure src="/docs/reference/security-and-user-data/user-profiles/configuring-profile-screen.png" caption="Configuring the user profile screen" /%}
