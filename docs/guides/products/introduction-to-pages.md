---
title: Glide Pages
description: An introduction to building web apps with Glide Pages
slug: introduction-to-pages
---

{% video src="https://www.youtube.com/embed/qhGbbUUFzVk" /%}

Glide Pages is a new tool that extends the software you can make; from mobile – to desktop and the web. Pages are powered by your Data, just like Glide Apps – but their design and functionality are more attuned to desktop use.

With Pages, you can build beautiful, standalone websites or create multi-app scenarios with numerous Apps and Pages sharing the same database.
If you are totally new to Glide, we suggest learning how to build [Glide Apps](/docs/introduction-to-apps) first. The concepts are slightly easier and this guide assumes you have prior experience with building simple apps.

## Differences with Layout

Glide Pages does not have Layouts in the same way as Apps have List Screen Layouts. In other words, every screen in Pages is a Details Screen, and within that screen, we can add all our Components.
So when you create a new Page within your Pages project, it will always be a Details Screen and you have to add Collections to create lists.

However, that Page will still be connected with a table in the Data Editor – even if none of the Components you eventually use on that page reference the data in that table.

![](/docs/guides/products/introduction-to-pages/glide-page-connected-to-table.png)

## Pages in Pages

In Apps, top-level screens are called 'Tabs'. But within your Page you have Pages. (Yes.. we know it's a bit awkward 😉)

![](/docs/guides/products/introduction-to-pages/top-level-pages-in-pages.png)

## Pages settings

Under each Page's settings, there are two new settings that we can adjust.

![](/docs/guides/products/introduction-to-pages/glide-pages-slug.png)

### Page slug

The Slug is our Page URL. A Slug is the part of a URL that identifies a particular page on a website in an easy-to-read form. In other words, it’s the part of the URL that explains the page’s content. Bear in mind if you change this, any previous links you have shared to a nested Page in your Pages Project will break.

### Show in menu

Each Page in a Pages Project shows a checkbox for Show in menu. If we select it only on one Page, when we click on our Web page title on the header, it will redirect us to the page that has the checkbox set as TRUE.

If we set the checkbox to TRUE on two or more pages, we'll find the name of our pages in the menu.

![](/docs/guides/products/introduction-to-pages/show-in-menu.png)

## Differences with Components

For now, some components in Pages are still the same as they are in Apps, particularly Entry Fields, Pickers, and Buttons.

![](/docs/guides/products/introduction-to-pages/glide-pages-components.png)

## Differences with Actions

A significant difference between mobile & desktop is the use of a mouse. Generally, desktop interfaces have more buttons and menus that you can click. Therefore, in Pages, you can create more Actions on individual components.

![](/docs/guides/products/introduction-to-pages/glide-pages-collection-action.png)

For example, in the Title Component's configuration, you can add many different Actions and these will automatically be added to a submenu when the list gets too long.

![](/docs/guides/products/introduction-to-pages/multiple-actions-pages.png)

There are also some small variations with the individual actions.

For example, the default for list items is to Show Detail Screen. In Pages, we can choose how to display the information by changing our target. We'll find four options to choose from, Current, Main, Small Modal, or Large Modal. The same will apply when we select Show Edit Screen, Show Form Screen, Show New Screen or Show User Profile Screen.

{% callout %}
There are likely to be many other little differences that develop over time as Pages and Apps become more distinct from each other.
{% /callout %}

{% callout %}
If you're keen on a deeper understanding between Pages & Apps, check out our guide on the Navigation Model.
{% /callout %}

## Adding & Editing

In Glide Apps, you can simply enable **Adding or Editing**, and this will appear as an option in the top right of the app.

![](/docs/guides/products/introduction-to-pages/22.png)

However, in Glide Pages, you have to use **Actions**. This introduces a few extra steps but creates more room for customizability and power.

The two actions you'll need are **Show Edit Screen** and **Show Form Screen**.

## Show Form Screen

Show Form Screen can be used to send data to any table in your project (for example, a **'Contact Us'** form). You can therefore use it to allow users to add items within **Collections**.

![](</docs/guides/products/introduction-to-pages/22%20(1).png>)

For example, in the image above 👆 we've added Show Form Screen action to our collection, and changed the title of the button to say 'Add Contact'.

Once we trigger that action in Glide, we can then configure that Form Screen and make sure that its destination is the same source as the contents of the Collection. This will create the functionality of an 'Add to Item' button on our collection.

![](</docs/guides/products/introduction-to-pages/22%20(2).png>)

## Show Edit Screen

The Show Edit Screen action can be added to lots of different components. In the following example we have added an Action to our Title Component with the action Show Edit Screen.

![](/docs/guides/products/introduction-to-pages/23.png)

## Form Style

Under the **configure action**, and under **Target**, we can choose one of four options which will affect the way the form is displayed. Here are the four options we can choose from:

![](</docs/guides/products/introduction-to-pages/23%20(1).png>)

- **Small overlay** and **Large overlay** is pretty clear. It will open the screen as a small or large overlay.
- **Main** replaces the main screen. So if you already have an overlay screen open and open a screen with Main, the overlay will close, and the **Main** screen will be the new screen.
- **Current** means open it as whatever the current screen is. So if you’re on the main screen, it will replace the main screen, but if you’re in an overlay, it will replace the overlay.

## Navigation Model

**Glide Apps** and **Glide Pages** have different navigation models. In other words, the way screens relate to each other is slightly different.

Understanding the different navigation models is not needed for you to build with either of them, but it's helpful if you want to understand their deeper structure.

### Apps

In Apps, the navigation model is based on screens on top of screens.
For example, we can see three different screens in the image below. When we navigate through these screens (**Home → Profile → Talks**) in our app, it looks and feels like we are moving from one screen to another, which – visually speaking – we are.

![](</docs/guides/products/introduction-to-pages/Frame%20(2).png>)

But in terms of the way the app works – we are actually 'pushing' screens on top of the initial tab's screen. In other words – they stack on top of each other, so the first screen is always the primary context – no matter how many screens deep we go.

You can see that all of the screens are 'on top' of the Home tab in the last image below. This is a much more accurate way to think about how screens work in Apps.

![](</docs/guides/products/introduction-to-pages/Frame%20(3).png>)

This is a lot more obvious with modals in tablet view 👇

![](</docs/guides/products/introduction-to-pages/Frame-2%20(1).png>)

On the surface, this distinction doesn't matter too much. When you use Glide Apps in browsers, the URL for a Glide App remains the same – regardless of which screen you are on (unless you're working with Deep Links).

This means that the browser forward & back buttons do not work as you would expect, there is no 'History' of screens that you've seen in your browsing history, and you cannot simply copy the URL and link to a particular page (again, unless you're working with Deep Links)

### Pages

With Pages, however, there is only ever one screen. You don't have screens on top of screens.

Each screen also has its own URL. This means that you can use your browser's forward & back buttons to move forward or back to the previous screen – even if that screen was a modal.

![](/docs/guides/products/introduction-to-pages/Frame-3.png)

This is incredibly useful if you want to link to a particular state or screen – you can just save the URL and give it to someone, and they will open the app exactly where you were when you copied the link.

{% callout type="warning" title="" %}
There are some instances where the URL can become very long. For example, if you have many links to screen actions in your app and you've navigated through many of them, the URL will build up, remembering all the different steps. This is unusual and not a massive problem if it does happen.
However, if you switch to a different tab, the URL will reset to the new root screen.
{% /callout %}

## FAQ

### Can I turn a Glide App I've already built into a Glide Page?

Yes. On your dashboard, click the three-dot menu on your Glide App and choose 'New Page from data' from the menu. This will create a new Glide Page project, with the same tables as your app. You'll still need to design your screens, but your tables will carry over. We plan to improve this conversion feature in the future to carry over your screens as well.