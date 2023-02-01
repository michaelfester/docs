---
title: Show New Screen
description: Trigger a new screen based on a table or relation in your project.
video:
slug: show-new-screen
---

With the Show New Screen action, you can make a Button, an Action Text, or an Image link to another screen.

{% figure src="/docs/reference/actions/show-new-screen/CleanShot%202021-09-17%20at%2013.35.17@2x.png" caption="Show New Screen" /%}

## Configuring the Show New Screen action

First, add the Show New Screen action in your component's settings.

{% figure src="/docs/reference/actions/show-new-screen/2021-09-17%2013.37.52.gif" caption="Show New Screen configuration" /%}

You can then choose what data will appear on the screen you are linking to. The linked screen's data can come from:

1. A relation
2. The current item
3. Another sheet in your app

{% figure src="/docs/reference/actions/show-new-screen/Duplicate%20tab.png" caption="Show New Screen target" /%}

When you click through to that screen you'll be able to customize that screen's layout however you like. This layout will remain unique to this particular link-to-screen action – meaning that you will be able to link to the same screen multiple times and show that screen in different ways.

### Linking to a relation

If you have created [Relations](/docs/relations) in your table, then you will be able to choose those relations as the source for your new screen. This acts very much like a [List Relation](/docs/list-relation) – apart from the fact that every screen you link to can be uniquely designed.

### Linking to the current item

This initially may sound strange (why would you want to show the same item/row you are on?) but when you consider that the screen you link to can be configured independently of the screen you link from, then it makes sense. In the app below the Link to Screen acts as a `Read More` function - enabling us to show more of the current row when the user taps into the next screen.

{% figure src="/docs/reference/actions/show-new-screen/Group%209%20(1).png" caption="Linking to the same screen" /%}

### Linking to another sheet

Linking to another sheet acts just like adding a new tab and picking a sheet. Once you've picked the sheet and clicked through to the new screen you'll be able to customize that
screen with its own layout.

## Creating a custom menu with images

With the Link to Screen action, you can create custom menus instead of or in addition to tabs. Here you can see an example of our Glide Community app which only has two tabs and uses images as it's a navigation system.

{% figure src="/docs/reference/actions/show-new-screen/2019-09-10%2016.23.16.gif" caption="Using Link to Screen to create a custom menu with images" /%}
