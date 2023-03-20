---
title: Breadcrumbs Component
description:
slug: breadcrumbs-component
---

Depending on the complexity of your project you may want to include the **Breadcrumb** component to show users where they are and how they got there. For example, in the Applicant Tracker below, the Breadcrumb component shows that the current page is called **Cameron Williamson** and that the user got to that page from the **Applicants** screen.

The Breadcrumb menu can also be used as navigation. Clicking on **Applicants** will take the user back to that screen.

{% figure src="/docs/reference/components/breadcrumbs/bread-crumbs.png" caption="" /%}

The breadcrumb menu is a very common navigation tool in websites, especially complex ones where you can get to the same page from different locations. For example, in the image below you can see the same screen, but the user got to that screen via the **Pipeline** tab.

{% figure src="/docs/reference/components/breadcrumbs/same-screen-different-tabs.png" caption="" /%}

## Configuration

Ideally the Breadcrumb component will be in the same location on every screen in your project — that way it will act as a consistent navigation item that users can rely on — just like the navigation menu. However, it's fine to not to have it on the top level of your tabs.

This means that you will need to add it on every screen manually, so it's important to know how to configure it.

The Breadcrumb component itself does not have any configuration. It just shows the screen titles as a path. For example, below, the user is on the **Things** tab. Because the title of that tab is called Things it shows one value - Things. If you changed the title of that tab to ‘Elephants' or ‘Cars' - the Breadcrumb component would update.

{% figure src="/docs/reference/components/breadcrumbs/configuration.png" caption="" /%}

When a user visits the [Details Screen](/docs/details-layout) of an item, the breadcrumb component will keep the name of the screen they came from and then show a second value for the current screen. For example, here they see the word **Opus** because that is the title of the current screen.

{% figure src="/docs/reference/components/breadcrumbs/configuration-1.png" caption="" /%}

If you want the component to display a different value, you can change the value for the title of your screen. For example, here, we have changed the title of the details screen to read from the stock value instead.

{% figure src="/docs/reference/components/breadcrumbs/changing-the-title.png" caption="" /%}
