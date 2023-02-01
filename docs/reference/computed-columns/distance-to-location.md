---
title: Distance to Location
description: Calculate the distance between two locations.
video:
slug: distance-column
---

The Distance to Location computed column produces the distance between two locations. 

One of the values needs to be from a column in your sheet. This can be an address or latitude/longitude pair. The second can be another location in your sheet - or the device's current location. 

When you add the column in the data editor and choose 'Current Location' Glide will ask to know your location. This is because Glide needs your browser's location in order to make a calculation. 

However, the calculation will be specific to each device – so each user of your app will see their own value based on their own location and distance to the address you specify. 

{% figure src="/docs/reference/computed-columns/distance-to-location/2020-06-01%2015.40.05.gif" caption="Adding and configuring the Distance to Location column" /%}

You can change the precision of the calculation and only show the rounded distance, or you can show the distance with up to 4 decimal places.
 
The calculation of distance is in KM and the column defaults to showing the units after the calculation. (E.g. 8,469 km).

 
However, you can change the units label and also make it go before the calculation, for example `8,469 Kilometers or Distance to location is 8,469 km`

![](/docs/reference/computed-columns/distance-to-location/Screen%20Shot%202020-06-01%20at%204.05%201.png)
