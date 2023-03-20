---
title: Map Component
description: The Map component displays multiple addresses as an interactive map.
slug: map-component
---

The **Map component** displays address data as an interactive map on your app.

## General settings

You can customize your map using the settings available in the **General**, **Options**, and **Actions** tabs that appear when you select the map from the **Screens** panel in the **Layout Editor**.

## Items data

1. In the **General** tab, locate the **Items Data** section.
2. Use the menu in the **Title**, **Description**, **Address**, and **Image** fields to select the value from your data to display. You can also type directly into these fields to enter a [Custom Value](/docs/custom-values).

{% figure src="/docs/reference/components/map-component/image%20(11).png" caption="Fields for the Map component" /%}

Fields for the Map component

A pin is placed on the map at the address specified. The **Title**, **Description**, **Image**, and **Address** fields all appear in the tooltip that displays when you click on a pin.

{% figure src="/docs/reference/components/map-component/image%20(12).png" caption="Tooltip showing fields when a pin is clicked" /%}

Tooltip showing fields when a pin is clicked

## Design

1. In the **General** tab, locate **Design**.
2. Choose the **Aspect Ratio -** Square, 4:3, or 16:9 - to resize the map.
3. Choose the **Style** - Minimal, Standard, or Satellite - to change the appearance of the map.
4. Choose the **Tooltip** - Bottom or Floating - to show the details of each location when a pin is clicked.
5. Select **Show Navigation Controls** to display buttons that allow users to change the zoom level of the map.
6. Select **Allow zoom with scroll-wheel** to give desktop users the ability to change the zoom level with their mouse.

{% figure src="/docs/reference/components/map-component/image%20(13).png" caption="Design settings of the Map component" /%}

Design settings for the Map component

## Limiting the number of pins on a map

If you only want to show a certain number of pins on your map, you can select the option to limit the number of items. Once this is set, the map will only display the number of pins you enter here, starting at the first available row in your data source.

{% figure src="/docs/reference/components/map-component/image%20(14).png" caption="Limiting the number of pins on a map" /%}

Limiting the number of pins on a map

## Actions

You can trigger actions in two areas of the map component - the **Title Bar** action and the **Item Click** action.

## Title bar action

1. In the **Actions** tab, locate the **Title Bar Action** section.
2. Click the **Add primary action** button.
3. Use the menu in the **Title** field to select the value from your data to display. You can also type directly into this field to enter a custom value.
4. Select and configure the desired action.

You can add as many actions as you'd like. Additional actions will be displayed as a secondary button or in the dropdown section of the title bar.

{% figure src="/docs/reference/components/map-component/image%20(15).png" caption="Configuring the Title Bar action" /%}

Configuring the title bar action

## Item click action

1. In the **Actions** tab, locate the **Item Click Action** section.
2. The **Show Detail Screen** action is added by default, but you can change this to any other action you choose.

The Item Click Action is triggered when a tooltip is clicked.

{% figure src="/docs/reference/components/map-component/image%20(16).png" caption="Configuring the Item Click action" /%}

Configuring the item click action

{% cta title="Actions" description="For detailed information about all of the actions available in Glide, check out Actions" url="/docs/actions" /%}
