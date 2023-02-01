---
title: Show Sign In
description: Show the sign-in screen even if your app is public.
video:
slug: show-sign-in
---

If your app uses Public with Email, Allowed Email List or Password for its sign-in settings then your users will need to sign in *before* they see anything in the app. 

However, sometimes you may want to let users view the app first (or parts of it) and then allow them to sign in later. You can do this with the Show Sign In Action.  

{% figure src="/docs/reference/actions/show-sign-in/ScreenFlow.gif" caption="Browsing a public app and then signing in via the sign-in action" /%}

No configuration is needed, just add the action to a button or image component via the features settings panel. 

{% figure src="/docs/reference/actions/show-sign-in/Screen%20Shot%202020-07-24%20at%2011.25%201.png" caption="test" /%}

{% callout title="test" %}
If you want this sign-in screen to use Google sign-in, enable it in your 'Public with email' sign in settings first. 
{% /callout %}

