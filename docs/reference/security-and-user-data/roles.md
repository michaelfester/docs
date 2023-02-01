---
title: Roles
description: Define roles for your users and build different expereriences and permissions for those groups. 
slug: roles
video:
---
If your app is on a **Private Plan**, you can assign roles to the users in your **User Profiles** table. You can then use these roles with **Row Owner** columns to make certain records only accessible to certain users. 

This allows you to, for example, give many people the role of 'Admin' and then make 'Admin' a Row Owner for certain rows. Now, only people with the role of Admin will be able to access those rows. 

## Does my app need roles?
If each of your rows has only one owner, then you can just use a single column with the emails in and make that a **Row Owner** column. 

{% figure src="/docs/reference/security-and-user-data/roles/row-owners.png" caption="Row Owners" /%}

If you need more than 1 person to own a row, you could use an **Array Column** as a Row Owner column, but that means that – every time you need to give more people access to a row – you have to add another column to your array. 

A much better way of assigning multiple owners to rows is through the use of roles. 
## Set up
To use Roles, your app must be on a **Private Plan**. Private Plan apps will see a new property in their User Profile Configuration called 'Role'. 

{% figure src="/docs/reference/security-and-user-data/roles/set-role.png" caption="Setting up Roles" /%}

A role can be any kind of text string, so long as it's not an email address. You can choose a single column for your role column, or an **Array Column** – and have multiple roles per user. 

| Role 1 | Role 2 | Role 3 | Role 4|
|--------|--------|--------|-------|
|Admin|Editor|Manager|Marketing|

{% callout title="Computed Columns" %}
You cannot at the moment use **Computed Columns** as Roles. Roles have to be manually entered in **Basic Columns**. 
{% /callout %}

## Row owners & roles
You can use Roles in lots of ways, but one of the most important is securing data with Row Owners. 

In the image below you can see that we've added the name of the role in the Row Owners column. This means that anyone who is assigned the role in that row will have access to that row.  

{% figure src="/docs/reference/security-and-user-data/roles/more-row-owners.png" caption="Row Owners" /%}

As you can see, you can have emails or roles in this column 👆🏼. If you make an **Array Column** a **Row Owners** column, you can have emails and roles assigned to the same row. For example:

{% figure src="/docs/reference/security-and-user-data/roles/arrray-columns.png" caption="Array Column & Row Owners" /%}

You can **read more about Array Columns here**, but below is the way this looks in the sheet. 

![](/docs/reference/security-and-user-data/roles/sheet-view-array-columns.png)

{% callout type="warning" title="Changing Roles" %} At the moment, you cannot change somebody’s role via the app. A role can only be changed via the sheet or Data Editor. If you show the Roles column in the app somewhere, users will be able to change the value - but this will not affect the backend and you will see the value change back. {% /callout %}

## Securing new items
If you let your users add items then you may want to automatically secure the row that gets added and make it accessible only to people with the same role as the person who added it.

This is possible with the use of User Profile Columns. Read more below. 👇

{% cta title="User-profile Columns" description="Learn more about User Profile Columns here" url="/docs/user-profile-columns" /%}

## Setting roles within the app
You can allow users of your apps to set the role of new users that they add. However, they can only be assigned roles that the adding user has.

For example, if a user who has the role of `Admin` & `Editor` and adds a new user to the app – they can only assign that new user the role of `Admin` or `Editor`.

Therefore, if you want users in your app to be able to assign all role-types – then they need to be given all role-types themselves.

{% figure src="/docs/reference/security-and-user-data/roles/assign-roles.png" caption="Assigning Roles" /%}

