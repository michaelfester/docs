---
title: Deep Links
description: Link to different screens in your app with URLs.
video:
slug: deep-links
---

{% callout title="Meet the new Glide Apps" %}
Glide Pages are now Glide Apps. Please refer to [this article](/docs/meet-the-new-glide-apps) for up-to-date information, as some of this documentation is outdated.
{% /callout %}

By default, all the screens in your app have the same URL, which makes it impossible to share a specific item in your app with someone.

However, if your table uses **Row IDs**, viewing a details screen will update the current URL, which is available as a value called **Link to current** screen.

You can **Copy this link to the clipboard**, send it to **Zapier**, or use the **Share** action to let your users easily share items in your app any way they'd like.

{% figure src="/docs/reference/ux/deep-links/deep-link-to-current-screen.png" caption="Link to current screen" /%}

{% callout title="A note about Deep Links" %}
Your Google Sheet needs a **Row ID column** for Deep Links to work. Alternatively, you can just use a **Glide Table**.
{% /callout %}
