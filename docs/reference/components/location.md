---
title: Location
description: Log the device's current location
slug: location
---

{% callout title="" %}
The Location Component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

## Configure the Location component

### Data

Select which column in your project's [Data Source](/docs/reference/data-sources) to store the user's current coordinates.

### Options

You can enable the **Required** option so that it is clear to users that it needs to be toggled on.

{% figure src="/docs/reference/components/location/image%20(10).png" caption="" /%}

The Location component is particularly useful in [Add](/docs/add-edit) or [Form](/docs/forms) screens if your users are submitting location data. Once they have submitted their data, you can plot it on a map with the [Map Component](/docs/map-component) or in the [Map Layout](/docs/map-layout).

{% callout title="" %}
The Location component logs a one-time location that does not update after it is enabled. For dynamic location detection, you may consider using a [Distance to Location](/docs/distance-column) Computed Column which updates as the user's location changes.
{% /callout %}
