---
title: Math Column
description: Perform instant calculations using the data in your project.
video:
slug: math-column
---

The `Math Column` allows you to perform instant calculations on the data in your table from basic arithmetic functions to more complex ones.

You can then bind the formulas in your column to different [Components](/docs/components) in your app and see the output instantly.

![](/docs/reference/computed-columns/math-column/Math%20Column%20Sample.gif)

## Configuration

Once you've added the `Math Column`, you need to configure your calculation or formula. As you start typing in the `Configuration` field, Glide will guess which column you are referring to and add a new replacement field.

![](/docs/reference/computed-columns/math-column/Math%20Column%202-R.gif)

This means you don't have to use the full column name in your calculation. For example, instead of using the formula:

`(Annual Salary Package)/12`

you could just write: `AS/12` and then use the replacement fields to tell the Math Column what `AS` refers to:

![](</docs/reference/computed-columns/math-column/Group%2010%20(1).png>)

You can reassign your replacements to different columns whenever you like:

![](/docs/reference/computed-columns/math-column/Math%20Column%203.gif)

## Supported calculations

The Math Column works with the following calculations:

+ADDITION
-SUBTRACTION
\*MULTIPLICATION
/ DIVISION
^ EXPONENTIATION
() PARENTHESIS

And the following functions `e.g. LOG() or ABS()`

- LOG
- ABS
- MIN
- MAX
- FLOOR
- CEILING
- ROUND
- TRUNC
- ASIN
- COS
- ACOS
- ATAN
- MOD
- SECOND
- MINUTE
- HOUR
- DAY
- WEEKDAY
- MONTH
- YEAR

{% callout %}
The Math Column only accepts the above symbols. It will throw an error if you try to use another symbol.
{% /callout %}

![](/docs/reference/computed-columns/math-column/Screenshot%202019-11-15%20at%2009.56.27.png)

## Date & Time Math

The Math column can also do calculations with dates & times. For example, subtracting two date/times produces a duration.

![](/docs/reference/computed-columns/math-column/CleanShot%202022-04-23%20at%2016.58%201.png)

In the image above, you can see that Glide also gives us access to a Now value that we can use as a substitution for a variable. This makes it easy to work out the time until something or how long ago something was.

- Now - Date will give you how long ago a date is (if that date is in the past)
- Date - Now will give you how long until a particular date (if that date is in the future)

The value that is output is a duration. If you want to round the duration value to just days, you can use `math.floor()`. For example:

![](/docs/reference/computed-columns/math-column/CleanShot%202022-04-23%20at%2017.32%201.png)

Adding a duration (number) to a date/time, or subtracting it from a date/time will add/subtract that many days to it and you can also pick “Now” as a substitution for a variable.

![](/docs/reference/computed-columns/math-column/6fce87091126f132fef48791839cfe947581faef_1.png)

{% cta title="Rollup Column" description="If you want to perform calculations on columns and relations, such as count, average, and sum, read this article about Rollup columns." url="/docs/rollup" /%}
 
 
