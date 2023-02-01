---
title: Visibility Conditions
description: Visibility Conditions, Hidden Tabs, and Removed Components
slug: visibility-conditions

video:
---

{% callout type="warning" title="Appearance vs. security" %}
Visibility conditions, hidden tabs, and removed components are not security features—they are merely changes to the appearance of your app. Do not rely on changes to the appearance of your app for security.
{% /callout %}

When you use **visibility conditions** or design a screen to show some data but not other data, your app still downloads whatever data it can for the corresponding sheet, even if it is not displayed in your app. It is relatively straightforward to inspect this data with common tools such as your browser's developer console, so you should not rely on hiding information to keep it secure.

Use visibility conditions to customize the display of data that all users should be able to access. For example, use filtering to create a Managers tab in an employee directory, since the manager profiles are already accessible to all employees in the main directory.

Use visibility conditions together with security features such as Row Owners to securely control which data users can access, and how the data is displayed.

## When to use visibility features

### Component visibility

In the app below we have 2x **Text** & **Image** components. Depending on the status, these components are visible or hidden. The data here is not private, it's purely informational, so it's safe to use conditional visibility.

![](/docs/reference/security-and-user-data/visibility-conditions/component-visibility.gif)

### Filters

In an Employee Directory, there is a tab called 'Managers'. This tab uses a **filter** to show only employees where the `Is Manager Label` column is 'Manager'.

In this case, it's ok to use the filter condition as we're already displaying the filtered out information (employees) elsewhere in our app.

![](/docs/reference/security-and-user-data/visibility-conditions/conditional-visibility.png)

## When not to use visibility features

### Component visibility

In the app below we're showing a component with each employee's social security number on it. We're using conditional visibility to only show this component when the logged-in user is an admin.

This is not a secure way of displaying data to Admins as the social security number will still be downloaded by the app, even when it's not visible.

![](/docs/reference/security-and-user-data/visibility-conditions/insecure-visibility.png)

### Tab visibility

In the app below we have a tab for Employee Feedback which contains private submissions from employees to management. You can see we've applied a Tab Visibility condition to only show this tab when the logged in user is a manager.

This is not a secure way of displaying data to managers as the data in this tab will still be downloaded by the app – even if it's not visible to the user.

{% figure src="/docs/reference/security-and-user-data/visibility-conditions/tab-visibility.png" caption="Tab visibility" /%}

### Filters

In the Employee Directory below we have a table with private information in it without Row Owners applied.

![](/docs/reference/security-and-user-data/visibility-conditions/employee-directory.png)

We've then created a new tab with a **Details layout** and filtered that tab to only show items where the email column matches the signed-in user's email. This will show the user only their Row.

However, this is not a secure way of displaying a user their private profile information. Even though they can't see other user's profiles, the other user rows are still downloaded.

![](/docs/reference/security-and-user-data/visibility-conditions/insecure-filter.png)

{% callout title="What if visibility conditions are my only option because I cannot make Row Owners satisfy the requirements of my app?" %}
In this case, you should change the requirements of your app or not make your app with Glide. We would rather you not use Glide than use it to build an unsecured app.
If you find yourself in this situation, please email **support@glideapps.com** explaining your security challenge and we can offer specific suggestions.
{% /callout %}
