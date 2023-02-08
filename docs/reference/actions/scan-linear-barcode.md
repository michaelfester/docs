---
title: Scan Linear Barcode
description: Scan a linear barcodes and log the value to your table.
video: https://www.youtube.com/watch?v=ZGZGWQ02OCE
slug: scan-linear-barcode
---

{% callout title="" %}
Our standard scanner is an experimental feature. This scanner works but is not recommended for large scale use in a production environment. If you have a need for a production-quality scanner, that is capable of scanning thousands of barcodes and QR Codes, we strongly recommend using our upgraded scanner. This is a paid add-on. If you'd like more information about pricing, please reach out to [hello@glideapps.com](hello@glideapps.com).
{% /callout %}

## What are barcodes?

Barcodes represent data visually, in a way that computers can read. Barcode scanners read data incredibly quickly – eliminating manual data entry and errors.

For example, imagine you were logging the arrival of new stock items into a spreadsheet. Typically stock items have an SKU (Stock Keeping Unit) which can be very long.

If you were doing this manually, you would have to enter or find the item's SKU - e.g. `ffiF11-1000985-staq-item1` and then update the stock count.

This kind of task is obviously best done by a computer, and so a barcode encodes data into a set of parallel lines.

{% figure src="/docs/reference/actions/scan-linear-barcode/an-example-of-a-linear-barcode.png" caption="An example of a Linear Barcode" /%}

## Supported barcode types

There are many different **[types of barcodes](https://en.wikipedia.org/wiki/Barcode#Types_of_barcodes)** but they generally fall into two types – Linear and Matrix.

At the moment, Glide can only scan linear barcodes, but we hope to support matrix codes like the QR code in future.

The types of linear barcodes we currently support are:

- **[Code 128](https://en.wikipedia.org/wiki/Code_128)** - Text and numbers
- **[Code 39](https://en.wikipedia.org/wiki/Code_39)** - Only numbers
- **[Codabar](https://en.wikipedia.org/wiki/Codabar)** - Text and numbers
- GS-1 13-digit - Only numbers (encompasses UPC + EAN)

## Scanning a barcode

The barcode action will write the value that is scanned to a column. Here, we've set it to the `Item SKU` column.

{% figure src="/docs/reference/actions/scan-linear-barcode/scan-barcode-configuration.png" caption="Scan Barcode configuration" /%}

You can add the action to an [Image](/docs/image-component), [Action text](/docs/action-text), [Button](/docs/button-component) or as part of a [Custom Action](/docs/actions). In the video above, we've added it to a floating button in our inventory app.

When the barcode scanner is first used, it will ask your permission to use the camera.

- Step 1: align the barcode with the grey horizontal bar in the middle.
- Step 2: adjust the phone until the bar turns green
- Step 3: wait a second or two for the barcode reader to read the data

{% callout title="" %}
If the bar goes orange, the barcode reader has recognized that there is a barcode near – but you need to adjust the phone further until the barcode is stable and clearly visible.
{% /callout %}

## Troubleshooting

As we mentioned above, only certain barcodes are currently supported. Please contact us at hello@glideapps.com if you require support for a different type of barcode.

Higher resolution cameras are best. Any modern smartphone should perform fine, but cameras that are 720p resolution or below may experience issues. We're working on improving this.

You can make your own barcodes with many different services online. Here are just a few:

- **[https://barcode.tec-it.com](https://barcode.tec-it.com/en/)**
- **[https://www.cognex.com/en-gb/resources/interactive-tools/free-barcode-generator](https://www.cognex.com/en-gb/resources/interactive-tools/free-barcode-generator)**
- **[https://www.onlinelabels.com/tools/barcode-generator](https://www.onlinelabels.com/tools/barcode-generator)**
