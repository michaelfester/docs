---
title: File and Image Pickers
description: Let users upload files and images to your projects
slug: file-and-image-pickers
---

{% callout title="" %}
The File Picker Component is available in both [Apps](/docs/introduction-to-apps) and [Pages](/docs/introduction-to-pages), but configuration options may differ slightly.
{% /callout %}

The **File Picker** and **Image Picker** components allow users to upload files and images to your projects. Once you upload a file or an image, Glide converts these files to links that can be displayed in your projects, or downloaded by users. 

## Configuration

You can add the **File Picker** or **Image Picker** to [Forms](/docs/forms), or [Details/Custom Screens](/docs/screens). Once you add the component, select a column from your [Data Source](/docs/data-sources) where you’d like the file or image links to be stored. Then, you can select the component’s Title using a column from your data or type in a [Custom Value](/docs/custom-values).

{% figure src="/docs/reference/components/file-and-image-pickers/configuring-file-picker.png" caption="Configuring the File Picker" /%}

{% callout type="warning" title="" %}
If a user exits the app or the screen while the file is uploading, the file may not be uploaded properly.
{% /callout %}

## Security and Storage Quotas

Files and images are uploaded to Glide’s server and there is a storage limit based on your team’s current plan. Check out Glide’s [pricing guide](https://www.glideapps.com/pricing) to learn more about the different plans that are available.

{% cta title="Files" description="To learn more about what happens to your files and images after they are uploaded, check out Files in Security and User Data." url="/docs/files" /%}
 