---
title: Sheets FAQ
description: Frequently asked questions about Google Sheets & Excel.
video:
slug: sheets-faq
---

## Why are rows appearing at the bottom of my sheet?

If you have added a function to your sheet and copied it down to all columns, then Glide will see that data.

## Can I use frozen rows in my sheet?

Glide supports **frozen rows**. If you have less than 20 frozen rows, Glide will take those frozen rows for the column names. When there's more than one cell in the frozen rows for a column, the lowest one will be the column name.

## Can I have more than one spreadsheet as a source?

Unfortunately not. But you can use **IMPORTRANGE** to pull in data from other sheets into your original sheet.

## Can I use the IMAGE formula?

Google Sheets has an `IMAGE` formula to display images in cells. This formula is not supported in Glide—`IMAGE(URL)` will not work, but `URL` will.

## I'm having problems with date & time formatting.

Depending on your location and spreadsheet's settings Google Sheets will expect a certain format for your dates. In the image below our spreadsheet is set to United States so Google Sheets expects a Date format of MM/DD/YYYY.
Cell G2 & G4 are recognized as dates, but cell G3 & G5 aren't.

- G3 is seen as just text
- G5 is seen as a number (we originally entered 05292009)
  ![](/docs/reference/faq/sheets-faq/date-time.gif)

## Date & time formats in Google Sheets

You can change the settings for your 'Locale' and affect the way your dates are formatted in Sheets. Go to **File/Spreadsheet Settings** and you'll see a window like the one below.

It's possible to change your 'Locale' and not affect your timezone. In the image below our timezone is London GMT but the Locale is United States.
![](/docs/reference/faq/sheets-faq/settings.png)
Depending on your location and spreadsheet's settings Google Sheets will expect a certain format for your dates. In the image below our spreadsheet is set to United States so Google Sheets expects a Date format of MM/DD/YYYY.
Cell G2 & G4 are recognized as dates, but cell G3 & G5 aren't.

- G3 is seen as just text because it is not in the date format the spreadsheet is expecting
- G5 is seen as a number as we originally entered 05292009 with no spaces.
  ![](/docs/reference/faq/sheets-faq/google-sheets-date-time.gif)

You can change the settings for your 'Locale' and affect the way your dates are formatted in Sheets. Go to **File/Spreadsheet Settings** and you'll see a window like the one below.

It's possible to change your 'Locale' and not affect your timezone. In the image below our timezone is London GMT but the Locale is United States.
![](/docs/reference/faq/sheets-faq/location.png)
{% callout title="Use the Data Editor" %} You can use the Data Editor to help format your dates and times. **Read more here**. {% /callout %}
