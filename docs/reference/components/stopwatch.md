---
title: Stopwatch
description: Let your users track time in your projects
slug: stopwatch
---

{% callout title="" %}
The Stopwatch Component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

The Stopwatch component lets users track time. It has two properties that you need to configure; a Start Time and Duration. 

## Start time

The **Start time** is a Date/Time value, so you’ll want to connect it to a [Date & Time column](/docs/basic-columns). It records when the user last pressed start or resumed after a pause. Once the stopwatch is paused or stopped, that value will be cleared from your [Data Source](/docs/reference/data-sources). When you start the stopwatch again, a new date/time value will be recorded.

{% figure src="/docs/reference/components/stopwatch/configuring-stopwatch-component's-start-time.png" caption="" /%}

## Duration

The Duration is a duration value, so you’ll want to connect it to a [Duration Column](/docs/basic-columns) in your data source. The stopwatch shows the duration to the user and when it’s paused, the duration will be written to your data source. Once stopped, the duration value is cleared so that a new duration can take its place the next time the stopwatch is used. 

{% figure src="/docs/reference/components/stopwatch/configuring-stop-watch's-duration.png" caption="" /%}

{% callout title="" %}
If you’d like to save a duration before it gets cleared, create an [Action](/docs/actions) that will write the paused duration to a new column via a button press prior to clearing it.
{% /callout %}

## Tips

- You can connect the Start time and Duration to any columns, but you will see unformatted values.
- The stopwatch component can be connected to [User-Specific Columns](/docs/user-specific-columns) so that each user's **Start time** and **Duration** remains specific to them.
- Check out and copy the [Run One](https://go.glideapps.com/app/i6noLZO0WXxUFNPGvJvh-template) template, which uses the Stopwatch in a [Form](/docs/forms) to let you log and track your best workout times!