---
title: Date Pickers
description: Pick a date or date/time
slug: date-pickers
---

{% callout title="" %}
Date Pickers are available in both Glide [Apps](/docs/introduction-to-apps) and Glide [Pages](/docs/introduction-to-pages), but options may differ slightly.
{% /callout %}

**Pick a date or date/time.**

Date Pickers can be used in [Forms](/docs/forms) or [Details/Custom screens](/docs/screens) to allow users to add or edit dates in your project. Depending on the type of Date picker that you select, users will be asked to enter a date, or both date and time values.

## Types of date pickers

- The **Date** component allows users to add or edit dates in your project. ****
- The **Date Time** component allows users to add or edit dates and times in your project.

{% callout title="" %}
The Date component will automatically append 12:00 AM as the time for inputted dates, though this is not visible to users unless you choose a Date & Time format for your column. If you’d like to capture a different time for inputted dates, use the Date Time component.
{% /callout %}

## Configuring date pickers

### Data

In the **General** tab on the right side of the Layout Editor, locate the **Data** section. In the **Column** field, select the destination to store the inputted value.

{% figure src="/docs/reference/components/date-pickers/date-picker-configuration.png" caption="" /%}

### Design

In the **General** tab on the right side of the Layout Editor, locate the **Design** section.

- Select a **Label** and **Placeholder** for the component. These can be columns from your data source or [Custom Values](/docs/custom-values).

{% figure src="/docs/reference/components/date-pickers/designing-date-picker.png" caption="" /%}

### Options

If you want to restrict users from being able to select past or future dates, you can choose a range. By default, the range is set to allow **All dates**, but you can also choose to only allow current and previous dates, or current and future dates. 

{% figure src="/docs/reference/components/date-pickers/range.png" caption="" /%}

{% callout title="" %}
In **Forms** or **Add/Edit Screens**, you can make Date pickers required before the user can submit or save their changes.
{% /callout %}

