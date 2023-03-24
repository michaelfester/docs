---
title: Custom Domains
description: Learn how to configure a custom URL for your project.
video: https://www.youtube.com/watch?v=6YluAzk2jRM&feature=emb_title
slug: custom-domains
---

## Custom domains

When you publish your app, your app automatically gets hosted at a “glideapp.io” address. With **Glide Pro** and Public apps, you can publish your app to your own custom domain.

For instance, instead of going to a domain like `d0sda.glideapp.io`, you can publish your app on your own custom domain – for example, `app.glidebakery.com`

Glide's custom domain configuration will show you which DNS records you need to set up your custom domain. If you're unsure of this process, follow our guide below or reach out to your domain name provider for support.
If you experience any issues, check out our troubleshooting guide 👇

### Step 1: Purchase a domain

First things first, you have to own a domain. We recommend purchasing your domain from Google Domains, but your domain can be hosted anywhere. If you already have your own domain hosted with another provider, that's fine. The interface will be different, but the concepts and processes are very similar.

### Step 2: Choose between a subdomain or a normal domain

Once you have your own domain, the next step is to decide if you have to host your app on a subdomain or on a normal domain, for example:

`app.glidebakery.com` vs. `glidebakery.com`

\*you can swap "app" with anything you want

{% callout title="If you already have a website" %}
If you already have a website hosted at your normal domain, then you'll have to use a subdomain.
{% /callout %}

### Step 3: Find your DNS settings

Next, Glide will ask you to add a number of records to your domain's DNS settings. To do this, you need to find the “DNS Records” section in your account or dashboard with your domain name provider.

For Google Domains, follow these steps:

1. Go to DNS
2. Scroll down to “Custom Resource Records”

{% figure src="/docs/reference/account/projects/finding-your-dns-settings.gif" caption="Finding your DNS settings" /%}

For other Domain Providers, the process is different but here are the general steps:

1. Look for an area that's related to DNS - for example - 'Manage DNS', 'Advanced DNS', etc.
2. Locate the area or section where you can add “records”

{% callout title="If you get stuck" %}
If you get stuck, contact your domain name provider's support.
{% /callout %}

#### Introduction to DNS records

There are 3 parts to a record, sometimes these will be labeled differently but most Domain providers use the following names:

1. The host
2. The type
3. The data

{% figure src="/docs/reference/account/projects/DNS-records-for-configuring-your-custom-domain.png" caption="DNS records for configuring your custom domain" /%}

### Step 4: Use Glide's custom domain wizard

Glide's Custom Domain Configuration will help you to add the right records to your domain.

Click on the Share Button in Glide, you'll find the option to `configure a custom domain`.

The wizard will give you details for the DNS Records that you need to setup on your domain provider's DNS Settings. Simply copy these into your DNS settings and click on "Continue."

{% figure src="/docs/reference/account/projects/using-glides-custom-domain-wizard.gif" caption="Using Glide's custom domain wizard" /%}

{% callout type="warning" title="Value for TTL" %}
If your domain provider requests you to provide a value for TTL (time till live), enter the duration of 1 hour or 3600 if in seconds.
{% /callout %}

### Step 5: Wait!

After adding your records, you're done! Just wait around 30 minutes for the records to propagate. Note that for some domain providers, you may need to wait for 24 hours before your changes take effect.

### Issues when configuring a custom domain

{% figure src="/docs/reference/account/projects/encountering-issues-with-custom-domains.gif" caption="Encountering issues with a custom domain" /%}

It's possible that you may encounter a number of issues when you're trying to use a custom domain for your app. Here are some of the issues and how you can address them:

#### Incorrectly configured records

If your records are incorrectly configured, an error will show up in the custom domain configuration. The best thing to do here is to go back and check whether you've followed the process of **configuring your domain** to make sure you didn't miss anything.

{% callout title="Contact your domain name provider" %}
Contact your domain name provider if you keep on running into the same issue. Your domain provider can help set up the records for you if needed.
{% /callout %}

#### Waiting

Don't forget to wait for 30 minutes or for up to 24 hours for DNS records to propagate. If you check less than the required time, you may not see the changes applied.

#### Conflicting records

You may run into issues when adding records due to conflicting records that already exist in your DNS. It may be best to contact your domain provider's support for assistance here, or if you're feeling confident - delete the conflicting records yourself - but be careful!

#### Access to DNS

If you purchased a domain as part of a hosting package or any other package, you may have limited access to your DNS settings. If this is the case, contact your domain provider's support for assistance in setting up your DNS records.

#### CloudFlare

If your domain provider offers CloudFlare as part of their service, this doesn't always play ball with Glide. You may need to disable this service and whilst you configure your custom domain and re-enable it afterwards. Rest assured, your app is still secure.

#### Cache

Clear your browser's cache in case you've visited your custom domain prior to using it for your Glide App. It's possible that your browser stored the resources previously connected to your domain and it's still displaying this stored information instead of your app (even if it has been updated). To check whether it's a cache issue, try visiting your new domain on a different browser or on your phone.

#### Old URL & QR code

When you've published your app using a custom domain, your QR code changes. Make sure you use this new QR code and share this with others. The old QR code for your glideapp.io URL still works too, but will still send people to the .glideapp.io URL - not your new custom domain.

#### Transfer domain to another app

If you want to use your custom domain for another app, simply set up the DNS settings for that app and then remove the DNS settings for the previous app. Glide will manage the switch for you. However, you'll need to wait again up to 24 hours before the changes take effect.
