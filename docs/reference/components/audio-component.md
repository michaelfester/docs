---
title: Audio Component
description: Play audio files
slug: audio-component
---

{% callout title="" %}
The Audio Component is only available in Glide [Apps](/docs/introduction-to-apps), not Glide [Pages](/docs/introduction-to-pages).
{% /callout %}

Whether it’s meeting notes, podcast episodes, or music — the audio component is a simple way of triggering and playing audio files in your App.

{% figure src="/docs/reference/components/audio-component/image%20(2).png" caption="Use case of the Audio Component in a podcast app" /%}

## How to add an Audio component

- Make sure you are on a [Details or Custom Screen](/docs/screens).
- Select the plus symbol in the **Screen** panel on the left side of the Layout Editor.
- In **Insert Component**, locate **Media** and select **Audio**.

{% figure src="/docs/reference/components/audio-component/image%20(3).png" caption="Adding the Audio Component" /%}

- In the **General** tab on the right side of the Layout Editor, locate the **Audio** field in **Data**. Use the menu to select an existing audio file from your data, or select **Custom** to enter a link to an audio file as a [custom value](/docs/custom-values).

{% figure src="/docs/reference/components/audio-component/image%20(4).png" caption="Choosing the values for the Audio Component" /%}

{% callout type="warning" title="" %}
The audio file’s URL must be formatted with an audio file extension, such as .wav, .mp3, or.m4a, and be publicly accessible.
{% /callout %}
