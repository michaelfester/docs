---
title: Navigation
description: The different ways you can build navigation in projects.
video: https://www.youtube.com/watch?v=7YavG_Mj9N8
slug: navigation
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

You can allow users to navigate to different screens in a variety of ways:

1. Tabs
2. Link to Screen action
3. Using lists as menus

## Tabs

Tabs are the main and most straightforward way you can present screens to users. Tabs can live in two places; at the bottom of your app or in the App Menu.

{% figure src="/docs/reference/ux/placeholder-folder/navigation/nav-at-bottom-of-screen.png" caption="At the bottom of your app's screen" /%}

{% figure src="/docs/reference/ux/placeholder-folder/navigation/nav-in-app-menu.png" caption="In the App Menu" /%}

### Creating tabs

To create a tab, visit the tabs section and click the blue plus icon.

{% figure src="/docs/reference/ux/placeholder-folder/navigation/creating-new-tab.gif" caption="Create new tab" /%}

Next, choose the source sheet for your tab, change the name, and pick an icon.

{% figure src="/docs/reference/ux/placeholder-folder/navigation/choosing-the-source.gif" caption="Choose the source" /%}

### Moving tabs to the App Menu

### Chat tab

Add a new tab to your app where users can chat with each other.

We can enable **Chat** in any app in the **Navigation** settings, just drag it from the hidden tabs section into either the tabs or **app menu**.

{% figure src="/docs/reference/ux/placeholder-folder/navigation/chat-tab.gif" caption="Chat tab" /%}

This adds a **Chat** tab where anyone can post messages and comments:

{% figure src="/docs/reference/ux/placeholder-folder/navigation/adding-a-message.gif" caption="Adding a message" /%}

Everyone using your app sees the same messages. We cannot edit chat messages once they are posted, but you as the administrator of the app can delete them.

#### Deleting messages

To delete chat messages, click and hold on any message. This will allow you to then select multiple messages and delete them. This can only be done in the Glide builder.

{% figure src="/docs/reference/ux/placeholder-folder/navigation/deleting-messages.gif" caption="Deleting messages" /%}

This will delete the messages from the app, but they will remain in the Google Sheet unless you delete them there.

#### Where are chat messages stored?

Chat messages are exported to your sheet in the `App: Comments` sheet where comments are also exported. They are not synchronized with your sheet like other data, so deleting or editing exported chat messages will not have any effect on your app.

### Signing out

If your app uses **sign in** then your users will be able to log out by tapping the log out button in the app menu.

![](/docs/reference/ux/placeholder-folder/navigation/signing-out.gif)

### Showing or Hiding Tabs

You can hide or show tabs based on User Profile data.

{% cta title="Tab Visibility" description="To learn more about this, check out our guide on Visibility Conditions." url="/docs/tab-visibility" /%}

## Link to screen

Instead of using Tabs to navigate to screens, you can use the Link to Screen Action.

{% cta title="Show New Screen" description="This action can be enabled on components like the Button and Image components. " url="/docs/show-new-screen" /%}

## Use lists as menus

By default, list items link to each item's details screen. However, you can change the action to be 'Independent Screen Configuration' and customize each screen individually.

This way – lists can act as custom menus.

{% cta title="Actions" description="Read more about action here" url="/docs/reference/actions" /%}
