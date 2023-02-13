---
title: Math Column
description: Perform instant calculations using the data in your project.
video:
slug: math-column
---

The Math Column allows you to perform instant calculations on the data in your table, from basic arithmetic functions to more complex ones. You can then show the output in different components in your app and see the output instantly.

{% figure src="/docs/reference/computed-columns/math-column/use-case-of-a-math-column.png" caption="Use case for a math column" /%}

## Configuration

Once you've added the Math Column, you need to configure your calculation or formula. 

To use the math column, write your calculation or formula in the top field and then add replacements so that your calculation works for every row. 

{% figure src="/docs/reference/computed-columns/math-column/configuring-the-math-column.png" caption="Configuring the Math Column" /%}

For example, here, we’ve written `Q * P` and replaced `Q` with `Quantity` and `P` with `Price` — and the result is that every row has a new value for quantity * price. 

As you start typing in the **Configuration** field, Glide will guess which column you are referring to and add a new replacement. But you can easily change what is being replaced. 

You can also replace parts of your formula with other values such as the values from the User Profile table or the value of `Now`, which is very useful for date calculations.

{% figure src="/docs/reference/computed-columns/math-column/editing-the-math-column.png" caption="Editing the Math column" /%}

{% callout title="" %}
You can write whatever text you want and replace it. It doesn’t have to be short or resemble the names of your columns.
{% /callout %}

## Supported Calculations

The Math column works with the following calculations. 

### Simple math

**`+`**          ADDITION
**`-`**          SUBTRACTION
**`*`**          MULTIPLICATION
**`/`**          DIVISION
**`^`**          EXPONENTIATION
**`()`**        PARENTHESIS

### Functions

LOG
ABS
MIN
MAX
FLOOR
CEILING
ROUND
TRUNC
ASIN
COS
ACOS
ATAN
MOD
SECOND
MINUTE
HOUR
DAY
WEEKDAY
MONTH
YEAR

## Date & Time Math

The Math column can also do calculations with Dates & Times. For example, subtracting two dates/times produces a duration.

{% figure src="/docs/reference/computed-columns/math-column/configuring-the%20date-time-math-column.png" caption="Configuring the Date & Time match Column" /%}

The `Now` value makes it really easy to work out the time until something or how long ago something was.

- `Now - Date` will give you how long ago a date is (if that date is in the past)
- `Date - Now` will give you how long until a particular date (if that date is in the future)

When the output of your math column is a date/time value you will also be able to format it. 

{% figure src="/docs/reference/computed-columns/math-column/formating-a-date-time-math-column.png" caption="Formatting the Date & Time Math Column" /%}

### Duration value

In Google Sheets, it may not be obvious, but dates are actually stored as numbers. It’s not until cells are formatted as Dates that we can actually read the day, month, year, and time of day from the data.

In Google Sheets, Date Values are long strings of numbers that represent the number of days since December 31st, 1899. For example, the number 1, when formatted as a date, will display as December 31, 1899.

If you’re working with a value that has a date and time, the Date Value will contain a decimal value that represents the portion of a single day. For example, December 31, 1899 12:00PM would be represented by 1.5 if the cell is formatted as a number.

{% callout title="" %}
If you’re working in Excel, the Date Value is calculated one day later than in Google Sheets. That is, in Excel, the number 1 represents January 1, 1900 (and not December 31, 1899).
{% /callout %}

### Durations using the Math Column in Glide

In Glide, we can use the Math column to calculate the difference, or Duration, between dates. By default, Glide will display the duration in this format: HH:MM:SS (Hours:Minutes:Seconds), which is the same format as you’d see in Google Sheets when formatting as a Duration.

{% figure src="/docs/reference/computed-columns/math-column/configuring-the-duration-in-hours-math-column.png" caption="Configuring the duration in hours" /%}

If we need this data to be displayed differently, we can use some familiar Math functions. For example, by using the FLOOR function, we can display the duration as the number of days as opposed to hours.

{% figure src="/docs/reference/computed-columns/math-column/configuring-the-duration-in-days-math-column.png" caption="Configuring the duration in days" /%}

## Ways to use the Math column

Here are some of the most common ways to use the Math column in your projects, beyond simple calculation. 

### How many days ago/until

As we mentioned, the `Now` value enables you to calculate the duration between now and the past, or now and the future. 

The problem with this though is that the output is a duration type, which is not necessarily that readable. 

We can use `floor()` to reduce this to the number of days since/until another date. We can do this by surrounding our original calculation with `floor`. Now we can use this value in our project and it will update as time progresses. C

{% figure src="/docs/reference/computed-columns/math-column/use-floor()-to-reduce-the-number-of-days.png" caption="Using the FLOOR() function" /%}

### Get the year
![Alt text]()
{% figure src="/docs/reference/computed-columns/math-column/getting-the-year-using-YEAR(DATE).png" caption="Getting the year using YEAR(DATE) function" /%}

### Percentage completed

Let’s say we have a list of projects & tasks. When someone completes a task, the completed column is marked true. 

In the project table, we have a relation bringing back all the tasks for that project. 

First, we’ll create a rollup using that relation and count all the tasks with the value of true. 

{% figure src="/docs/reference/computed-columns/math-column/creating-a-rollup-that-counts-all-the-tasks-with-the-values-of-true.png" caption="Creating a Rollup Column that counts all the tasks with the values of TRUE" /%}

Next we’ll create another rollup counting all the unique tasks so we have the total number of tasks in that project (completed or uncompleted)

{% figure src="/docs/reference/computed-columns/math-column/creating-another-rollup-counting-all-the-unique-tasks.png" caption="Creating a Rollup Column that counts all the unique tasks" /%}

Finally, we’ll add a math column that calculates the percentage. We’ll write `Completed/Total*100` and make sure that `Completed` and `Total` are replaced by the correct columns. 

{% figure src="/docs/reference/computed-columns/math-column/adding-the-math-column-to-calculate-the-percentage.png" caption="Adding a Math Column to calculate the percentage" /%}

Then we can change the precision to 1 and add the percentage sign. 

{% figure src="/docs/reference/computed-columns/math-column/changing-the-precision-to-1-and-add-the-percentage-sign.png" caption="Changing the Precision to 1 and adding the percentage sign" /%}

Now we can add a text component in our app, showing the progress on each project.

{% figure src="/docs/reference/computed-columns/math-column/showcasing-the-computed-column-using-the-table-component.png" caption="Showcasing the Computed Column using the Table Component" /%}