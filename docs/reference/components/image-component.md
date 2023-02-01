---
title: Image Component
description: Display images
slug: image-component
---

{% callout title="" %}
The Image Component is available in both Glide [Apps](/docs/introduction-to-apps) and Glide [Pages](/docs/introduction-to-pages), but configuration options may differ slightly.
{% /callout %}

There are many ways to include images in your Glide project, but the Image Component is highly customizable and gives you flexibility for showcasing your images.

## Configure an Image component

1. Make sure you are on a [Details](/docs/details-layout) or Custom Screen.
2. Select the plus symbol in the **Screen** panel on the left side of the **Layout Editor**.
3. In **Insert Component**, locate **Media** and select **Image**.

## Data

In the **Image** field, use the menu to select an image source. You can choose to:

- Provide the URL address for the image in the **Image** field.
- Select **Upload image**. When prompted, upload a saved image file, input a URL, or select from a menu of stock images provided by Unsplash.
- Select a column from your [data source](/docs/reference-data-sources) that contains an existing image file.

{% figure src="/docs/reference/components/image-component/image%20(14).png" caption="" /%}

## Design

### Ratio

The **Image height** or **Aspect Ratio** determines the size and shape of the **Image** component on the screen.

There are four options:

- Square
- 3:1 aspect ratio
- 3:2 aspect ratio
- 1:1 original aspect ratio

{% figure src="/docs/reference/components/image-component/image%20(15).png" caption="" /%}

### Fill

In Apps, **Fill** refers to the proportion of the image within the dimensions of the Image component.

- Select **Fill the area** to crop and center the image so that it fills the entire space of the Image component.
- If you select **Show the whole image**, Glide will not crop or resize the image to fill the component space.

{% figure src="/docs/reference/components/image-component/image%20(16).png" caption="" /%}

### Style

{% callout title="" %}
Style options may differ in Apps and Pages.
{% /callout %}

In **Apps**, you can select from the following **Style** options:

- Select **Edge to edge** to allow the Image component to span the entire width of the screen.
- Select **Inset with content** to align the margins of the **Image** component with the other components in your project.
- Select the **Crop Behavior** to determine how Glide will crop an image to fit within the component. Use the toggle to choose between **Faces** or **Center**.

{% figure src="/docs/reference/components/image-component/image%20(17).png" caption="" /%}

In **Pages**, you can select from the following **Style** options:

- Select **Square** to ****display your image in a specified **Aspect Ratio**, as outlined above.
- Select **Circle** to display your image as a circle that is auto-cropped.

### Size

In Pages, you can select a size for your Image component. This is similar to the Style options mentioned above that are available in Apps. 

- Select **Full** to allow the Image component to fill the container width.
- Select **Small** to display the Image component in a minimized fashion.

## Overlays

{% callout title="" %}
Overlay options are only available in Apps.
{% /callout %}
### Button

Select **Favorite** to include a heart button in the top right corner of your **Image** component.

{% figure src="/docs/reference/components/image-component/image%20(18).png" caption="" /%}

Adding a **Favorite** button will automatically add a new **Boolean** column named **`Is Favorited?`** to the corresponding table in the **Data Editor**. For more information, see [Favorite Component](/docs/favorite-component).

### Tag

You can create a tag that will appear in the top left corner of your **Image** component. In this instance, tags are used for display only and are not actionable.

- Use the **Tag** menu to select the values from your data that will be displayed in the tag.
- You can also select **Custom** to enter custom values for a tag.

{% figure src="/docs/reference/components/image-component/image%20(19).png" caption="" /%}

### Avatar

You can include an avatar in the bottom left corner of your **Image** component.

- Use the **Avatar** menu to select the data to be displayed as the avatar image.
- You can also select **Custom** to enter custom values for an avatar.

{% figure src="/docs/reference/components/image-component/image%20(20).png" caption="" /%}

### Caption

You can select or provide a caption for the bottom left corner of your **Image** component.

- Use the **Caption** menu to select the data to be displayed as the caption.
- You can also select **Custom** to enter custom values for a caption.

{% figure src="/docs/reference/components/image-component/image%20(21).png" caption="" /%}

If you choose to apply both an **Avatar** and a **Caption** to the **Image** component, the caption will appear just to the right of the avatar image.

{% figure src="/docs/reference/components/image-component/image%20(22).png" caption="" /%}

## Actions

Users can trigger an action when they tap on the **Image** component. You can choose from any of the actions available in Glide or create a custom action.

1. Navigate to the **Action** settings.
2. Click the **+** button to begin adding your action.
3. In **Configure Action**, select the dropdown menu to view action options.
4. Choose an action from the dropdown list or select **Create new action** to create your own **custom action**.
5. If prompted, apply any additional settings in **Configure Action**.

{% cta title="Actions" description="Lear more about actions" url="/docs/actions" /%}

{% figure src="/docs/reference/components/image-component/image%20(23).png" caption="" /%}

