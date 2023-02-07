---
title: Glide UI
description: A walkthrough of Glide's interface.
video: https://youtu.be/ZkCfwed6DJM
slug: glide-ui
---

## Introduction

When you log into[Glide](https://go.glideapps.com/) you'll arrive at your Dashboard.

{% figure src="/docs/guides/core/glide-ui/glide-dashboard.png" caption="The Glide dashboard" /%}

On the left-hand side, you'll see projects you're working on, as well as where you can create templates, review your usage data, and manage your billing and teams. You will also see any teams you belong to, and have the ability to create new teams if needed.

Click on an app to start editing it.

{% figure src="/docs/guides/core/glide-ui/the-layout-editor1.png" caption="The Layout Editor" /%}

Glide's user interface can be broken into three areas:

1. The Data Editor
2. The Layout Editor
3. Settings

You can navigate to these different sections using the top navigation bar, which remains consistent on all screens.

{% figure src="/docs/guides/core/glide-ui/glide's-navigation-bar.png" caption="Navigation bar" /%}

## Data Editor

{% figure src="/docs/guides/core/glide-ui/data-editor.png" caption="The Data Editor" /%}

The Data Editor has four distinct areas.

1. The tables area on the left shows each of your individual tables. If you've synced data from Google, Airtable, Excel, or a file, you'll see all of your imported data here. You can add more tables directly in the data editor, or hit the + symbol to sync more data from another source.
2. The sources area on the bottom left is where you see your [Data Sources](/docs/intro-to-data-sources). You can click here to sync or visit your data source.
3. The main area is the actual data grid itself. Here you can scroll, interact, and edit the data you see.
4. The Data Editor has its own top bar – which shows the [Preview As dropdown](/docs/users#preview-as), the name of the current table, the Find Column search box, and the Add Column button.

{% cta title="Data Editor" description="Learn more about the Data Editor" url="/docs/data-editor" /%}

## Layout

{% figure src="/docs/guides/core/glide-ui/the-layout-editor.png" caption="Different areas of the Layout Editor" /%}

The Layout area of Glide can be broken into 5 core areas and is where you do the bulk of your design work.

1. Tabs
2. Screen
3. Data
4. Device preview
5. Configuration panel

### Layout Editor: Tabs

{% figure src="/docs/guides/core/glide-ui/tabs-section-of-glide.png" caption="Tabs panel" /%}

Tabs is where you manage the tabs in your app. You can add, delete, duplicate, rearrange, and drag them into the App Menu.

### Layout Editor: Screen

{% figure src="/docs/guides/core/glide-ui/screen-section-of-glide.png" caption="Screen panel" /%}

The Screen section is where you manage the [Components](/docs/components) on that screen. Click on a Component to edit it and click the plus (+) icon to add a new Component. You can also re-order and delete Components here.

{% callout %}
When you see a dropdown arrow in Glide, very often, you can collapse that area to make the interface cleaner, or to give yourself more room. 👇
{% /callout %}

{% figure src="/docs/guides/core/glide-ui/collapse-sections.png" caption="Collapsing the different panels of the Layout Editor" /%}

### Layout Editor: Data

Within the layout area of Glide, next to the Screen tab, you have another tab called Data. This is different from the Data Editor. The Data Editor shows you all of your data. The Data Tab shows you the data for the current screen.

{% figure src="/docs/guides/core/glide-ui/data-tab-in-builder.png" caption="The Data Tab" /%}

In the image above, you can see we're viewing a record (row). In the Data Tab, we see that row displayed vertically. This can be confusing at first, but compare it with the highlighted row in the sheet below and it will start to make sense.

{% figure src="/docs/guides/core/glide-ui/horizontal-row-in-the-data-editor.png" caption="A horizontal row from a Google Sheet" /%}

The Data Tab is editable, so you can actually interact with your data without even visiting the Data Editor. You can also add new columns and change their type.

{% figure src="/docs/guides/core/glide-ui/edit-data-using-the-data-tab.png" caption="Editing the data using Data Tab" /%}

### Layout Editor: Device preview

{% figure src="/docs/guides/core/glide-ui/the-layout-editor-preview.png" caption="Builder preview" /%}

The device preview area contains a number of features that let you interact with your app – both as a user and as an app developer.

1. The device itself
2. The dropdown within the Layout icon allows you to change the device width & OS.
3. The preview as dropdown
4. Undo/Redo
5. Play mode & select mode lets you toggle between interacting as a user and as an app developer – allowing you to select and configure Components with the mouse without triggering them like a normal user.
6. If you right-click or ctrl-click anywhere on your device, you'll bring up simple component editing options such as moving up or down; cut, copy, and paste; duplicate; and delete.

### Layout Editor: Configuration panel

{% figure src="/docs/guides/core/glide-ui/glide-configuration-panel.png" caption="The configuration panel" /%}

The area on the right of the Layout Editor is all to do with configuration, and it changes depending on your editing context.

Knowing what context you are in is important. To help you understand this, there is a breadcrumb menu at the top. In the image below, see how the breadcrumb menu (top right) changes to show you where we currently are in our editing context.

{% figure src="/docs/guides/core/glide-ui/breadcrumb-menu.png" caption="Moving between contexts changes the breadcrumb menu" /%}

Within the configuration panel, many different things will appear, depending on your context. You will usually see 2 or 3 different tabs within the panel. These typically follow the pattern of General, Options, and Form.

{% figure src="/docs/guides/core/glide-ui/configuration-areas.png" caption="Different settings in the configuration panel" /%}
