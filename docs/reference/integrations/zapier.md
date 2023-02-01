---
title: Zapier
description: Integrate Glide with thousands of other tools.
video: https://www.youtube.com/watch?v=vT3SN26BTiM
slug: zapier
---

Zapier can integrate with Google Sheets independently of Glide, but you can also integrate Glide with Zapier and trigger a zap with the **Zapier Action**. If you don't know how to use Zapier, we suggest you read some of their **basic documentation** before getting started on integrating it with Glide.

Zapier can integrate with Google Sheets independently of Glide. You may want to do this so you can trigger Zaps when new rows are added or if you want pass data from other services into your sheet.

However, we can also integrate Glide with Zapier and trigger a zap with the Zapier action. For example, in the app below we've made a Zap that automatically sends an email to the interview candidate inviting them for a second interview – all with a single tap of a button!

![](/docs/reference/integrations/zapier/zap-sending-an-email.gif)

## Introduction to Zaps

A Zap, in its most simple form, has two parts; a trigger and an action.

- Trigger - something that happens in an app to start a Zap
- Action - an event a Zap performs after it is triggered

At the moment, Glide can only be chosen as the trigger for a Zap. By choosing it as the trigger we can send the data that's in our app to hundreds of **different services**.

## Integrating Glide & Zapier

To integrate Glide with Zapier we can just start making a new Zap. In the trigger section search for Glide in the directory and select it.

![](/docs/reference/integrations/zapier/choose-glide-as-zapier-trigger.png)

Once we've done this, we'll need to sign into Glide.

![](/docs/reference/integrations/zapier/sign-into-glide.png)

To enable access to our account Zapier will ask us for an API key.

![](/docs/reference/integrations/zapier/enter-api-key.png)

We can find this in Settings - General. Copy the key and paste it into the API key box (above) in Zapier.

{% callout title="Naming Glide integrations" %}
Each of our apps has a unique API key – so if we need to make a new Zap in future for a different app then we'll need to set up a new Glide integration in Zapier.

Consequently it's probably sensible to name each of our Glide integrations differently to make it clear in Zapier.
{% /callout %}

![](/docs/reference/integrations/zapier/zapier-integration.png)

We have now integrated Zapier with Glide. We can now create our first Glide Zap!

## Making a Zap

### Chicken & Egg Situation

Configuring a Zap can sometimes be a chicken 🐔and egg 🥚situation...

In our case, we can't set up a Zap in Glide until we've made it in Zapier - but we can't test a Zap in Zapier until we've triggered it in Glide!

So what we need to do is set up the Zap in Zapier first and be clear about which values from our app we are passing through. For example, below we can see Glide & Zapier side by side after we've set everything up. On the left, we're assigning the data in our sheet to `Value 1`, `Value 2,` etc and then in Zapier we're assigning these Values to different fields.

{% figure src="/docs/reference/integrations/zapier/comparison-showing-how-values-are-passed.png" caption="A comparison showing how values are passed between Glide & Zapier" /%}

So, let's start by configuring our Zap!

### Choosing a trigger in Zapier

In Zapier, we create a new Zap and choose Glide as the trigger. A trigger is an event that starts a Zap.

Once we've chosen Glide as the trigger we can continue with the configuration of our Zap and name it. Zapier will then ask us to test the zap. However, as we mentioned above – currently it won't work as we haven't sent any data yet - so we can just skip this step for now.

{% figure src="/docs/reference/integrations/zapier/choosing-glide-as-the-trigger.gif" caption="Part 1 - Choosing Glide as the trigger for our Zap" /%}

### Choosing an action in Zapier

Now that we have a trigger, we need to choose the app that we want to send data to and what action it will perform with that data. In this example, we're going to send an email, so we'll connect Gmail as the second part of our zap and choose 'Send Email' as the Action Event.

{% figure src="/docs/reference/integrations/zapier/second-stage-of-zap.png" caption="Part 2 - The second stage of our Zap is to Send an Email from Gmail" /%}

### Assigning values

Next we need to configure which values get passed from Glide to Gmail and where those values are used in the email that gets sent.

We can send up to 12 values from Glide (`Value 1`, `Value 2`, `Value 3`, etc...). Each of these can be connected to a column in our sheet and will send data for the current record when the action is triggered. You can also send **special values** like current date/time or the signed in user's email.

For example, say we want our Zap to send interview candidates emails to invite them to a second interview. We're going to need four bits of information:

- The `Candidate's Email`
- The `Interviewer's Email`
- The `Subject` of the email
- The `Body` of the email

We have columns for all of these in our table. We just need to decide which one will be assigned to which Value.

- We will use `Value 1` for the `Candidate's Email`
- We will use `Value 2` for the `Interviewer's Email`
- We will use `Value 3` for the `Subject`
- We will use `Value 4` for the `Body`

{% callout title="Values" %}
Again – we haven't actually assigned these values in Glide yet. We are just deciding what we will do later in Glide so we can assign things properly in Zapier.
{% /callout %}

Next we add these Values (`Sample Value 1`, `Sample Value 2` etc) to the relevant fields in our Zap.

![](/docs/reference/integrations/zapier/adding-sample-values.gif)

Once we've finished configuring our Zap, we will be asked to test it. We can skip this step for now - we will test once we've set up the Zap in Glide. Now we can turn our Zap on!

{% figure src="/docs/reference/integrations/zapier/turning-on-a-zap.gif" caption="Turning on a Zap after completing all steps" /%}

## Adding the Zap to our Action

{% callout type="warning" title="Terms" %}
Terminology can be a little confusing here, so let's clear something up:

**In Zapier** - a Zap has a 'Trigger' and an 'Action'

**In Glide** - we trigger a Zap with an 'Action'
{% /callout %}

In other words – we need to add an Action to a component in Glide so our users can trigger our Zap by tapping on an item.

Actions can be triggered on **Buttons**, **Images** & **Basic Text** components. We're going to add our Zap action to a button which says 'Invite for second interview'.

![](/docs/reference/integrations/zapier/adding-zap-action-to-button.gif)

We can add the action by heading to the features panel of the button and changing the action to 'Zapier'. After we've added the action we can configure which Zap we'll trigger and then assign the values that we decided upon earlier. After we've done this, we can trigger our Zap!

![](/docs/reference/integrations/zapier/assigning-zap-values.gif)

We can always configure our Glide Zapier Action & Zap once we've set it up. For example, we could add more values or change the values that are being sent. We just need to make sure the Values we assign in Glide match up with the Values in Zapier.

## Testing and troubleshooting

![](/docs/reference/integrations/zapier/testing-and-troubleshooting.gif)

After the zap is triggered, we can check ourselves (depending on what our zap does) or alternatively we can visit **https://zapier.com/app/history** to see a full history of Zaps in our account. Here we can dive into the details for each zap trigger and see what data was sent.

![](/docs/reference/integrations/zapier/checking-zap-history.gif)

{% cta title="Zapier University" description="To learn more about Zapier, checkout their documentation:" url="https://zapier.com/university" /%}
