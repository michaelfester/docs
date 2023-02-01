---
title: Event Picker
description: View, add, and edit events on a calendar.
slug: event-picker
---

{% callout title="" %}
The Event Picker Component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

The **Event Picker** lets you pick the date and duration of an event.

{% figure src="/docs/reference/components/event-picker/event-picker.png" caption="" /%}

## Configuration

The Event Picker can display other events as well as allow you to pick new events. This allows you to show potential conflicts or other events for reference.

There are therefore two sections to the component's configuration.

{% figure src="/docs/reference/components/event-picker/event-picker-configuration.png" caption="" /%}

The **`Events`** section is where you customize what events will show up in the picker when someone is adding a new event. The source can be any table in your project or a **Relation**.

The **`Data`** section is where the event that you pick will be added.

You can use the Event Picker in a Form, or on a Details Screen.

## Using on a details screen

When on a Details screen, the Event Picker will allow you to pick one event for that item. Once the event is picked, the Event Picker will be filled.

You will therefore need a **Start** and **End** column for your items. The Event Picker will work with **User-specific Columns**, so if you want users to pick their own private events on items they can do so.

Users can then clear the event from the picker using the cross.

## Using on an edit, add, or form screen

The Event Picker is particularly useful in Edit, Add or Form screens. Instead of using two separate fields for Start and End time, you can use a single Event Picker.


## Using in forms

Using the Event Picker in forms is slightly more complex if you want to display existing events in the picker. For example, in this Room Booking project, there is a form button on each Room item that lets users book that room. That form will send info to a separate sheet called 'Bookings'.

{% figure src="//docs/reference/components/event-picker/using-in-forms.png" caption="" /%}

The problem, however, comes when you want to show the existing bookings for that room. In the current configuration above 👆🏼, the **`Events`** area is simply reading from the Bookings sheet. This means that users will see all events for all rooms in every Event Picker.

You’d want users to only see events for the room they are currently booking. To do this, you need to create a **Relation** between Rooms and Bookings, and then choose that relation as the source in the Event Picker's configuration.

{% figure src="/docs/reference/components/event-picker/bookings-relations.png" caption="" /%}

