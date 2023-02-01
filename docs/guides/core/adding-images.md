---
title: Adding images
description: Learn how to add, host, and display images in Glide.
video: https://youtu.be/AKmbNyCU7ZA
slug: adding-images
---

Images in Glide can appear in two primary places - in **Lists** and **Collections** and in [Components](/docs/components) like the [Title](/docs/title-component) and [Image](/docs/image-component) Component. You can add images from the web, upload your own, and even allow users to upload their own images from within your projects.

## Image Hosting

### Uploading images to Glide

The easiest way to add images to your project is by uploading them directly to Glide. You can upload images in an **Image Column** in the [Data Editor](/docs/data-editor), or you can drag and drop images directly onto Components. This uploads the image to Glide's servers and inserts the correct link into your project automatically.

### Direct URL

You can also add direct URLs to the Image Component without having to upload an image in the Data Editor. This allows you to save space on your storage quota.

{% figure src="/docs/guides/core/adding-images/adding-images-from-url-or-address.png" caption="Adding a custom URL in the Layout Editor" /%}

{% callout %}
You’ll notice in the image above that you can also add addresses. If it’s a known address, Glide will show a map of that location!
{% /callout %}

### Upload from the Layout Editor

**You can upload an image from the Layout Editor** without having to go back to the Data Editor. Choose Upload image, browse your images and click Upload. 

{% figure src="/docs/guides/core/adding-images/upload-images.png" caption="Uploading an image in the Layout Editor" /%}

## External hosting

It's possible to use an external service like [Dropbox](https://www.dropbox.com/), [Google Drive](https://accounts.google.com/AccountChooser/signinchooser?service=writely&flowName=GlifWebSignIn&flowEntry=AccountChooser), or [Imgur](https://imgur.com/) to host your images. However, we do not recommend hosting your images outside of Glide. While it's possible to make it work, services like Google Drive are not designed to share images in this way, and they do not scale well.

However, if you do need to do this – all you need is a shareable link to your public image so that anyone with the link can view it.

For example `https://www.somewhere.com/images/yummy_bacon.jpg`

Image links must begin with **https://** and not **http://**. In many instances **http://** URLs will be blocked by your phone.

## Image component

While other **Components** can also display images, the **Image Component** is the most customizable and can present your images in lots of different ways.

{% figure src="/docs/guides/core/adding-images/image-configuration.png" caption="The configuration panel of the Image Component" /%}

To show the original image without cropping it, choose the 'Show the whole image' option in the Fill setting.

{% figure src="/docs/guides/core/adding-images/image-fill.png" caption="Editing the fill style in the Image Component" /%}

To show different size ratios for the image, pick any of the available ratios for the Image Height setting.

You can resize your image to fit any of the following ratios:

- Original Image Height shows the image in its original size ratio.
- Square Image Height shows the image in a square ratio.
- 3:1 Image Height shows the image in a 3:1 ratio.
- 3:2 Image Height shows the image in a 3:2 ratio.

{% figure src="/docs/guides/core/adding-images/image-height.png" caption="The different image height settings in the Image Component" /%}

You can also choose whether to display your image in an Edge to Edge setting where it takes the full-width space of the project screen vs. the Inset with Content setting where the image aligns with the rest of the content.

{% figure src="/docs/guides/core/adding-images/Group_12.png" caption="The style settings in the Image Component" /%}

You can also set the Crop Behavior for the image. There are 2 options to choose from: Center Crop Behavior or Face Crop Behavior.

{% figure src="/docs/guides/core/adding-images/image-crop-behavior.png" caption="The crop settings in the Image Component" /%}

You can enable a tap to enlarge action on the image, to allow people to view the image full screen. To do this:

- Visit the Image Component's settings
- Scroll down to Actions;
- From the drop-down list, select **Enlarge Image**.

{% figure src="/docs/guides/core/adding-images/image-action.png" caption="Adding an action to the Image Component" /%}

## Image Carousel

[Array Columns](/docs/array-columns) are not currently supported in [Glide Tables](/docs/glide-tables). They only work with [Google Sheets](/docs/google-sheets).

You can also display multiple images in one Image Component and trigger an image carousel.

{% figure src="/docs/guides/core/adding-images/image-carousel.png" caption="An image carousel" /%}

To do this, name all of your **Image Column**s the same but with a number after each name and then number each column in sequence.

For example;

| Title | Description | Image 1 | Image 2 | Image 3 | Image 4 |
| ----  | ----        | ----   | ----   | ------- | ----|

or

| Title | Description | Employee 1 | Employee 2 | Employee 3 | Employee 4 |
| ----  | ----        | ----   | ----   | ------- | ---- |

It doesn’t matter what you call each column, so long as each column has the same name and the next number. Glide will recognize all of the numbered columns and allow you to choose a single column with just that name (e.g. '`Image`') which will incorporate all the columns and trigger the carousel.

{% figure src="/docs/guides/core/adding-images/image-carousel-column.png" caption="Picking an Array Column with images in the Data Editor" /%}

## File types

Glide recognizes JPGs, PNGs, GIFs, and SVGs.

For your app’s icon, it’s best to use a simple SVG. The project icon will appear in many places and many sizes so it’s best to use an SVG icon that will scale and look good at any size.

