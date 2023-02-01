---
title: Make
description: (Formerly Integromat) integrate hundreds of tools with your project.
video:
slug: make
---
## Connect Glide with your favorite apps to automate your work

**Make** is a visual platform that lets you design, build, and automate anything - from simple tasks to complex workflows - in minutes. With Make, you can send information between Glide and thousands of apps to enjoy enhanced team productivity and customer satisfaction.

It’s fast and easy to use, visually intuitive and requires **zero coding expertise**.

{% figure src="/docs/reference/integrations/make/diagram-showing-example of-make.png" caption="A diagram showing an example of what Make can do" /%}

If you're totally new to Make, we recommend you read **this article** first.

## 1. Getting Started
In order for Make to automate tasks, we have to first create a "scenario." A "scenario" is a series of steps (or "modules") that tell how data from Glide should be transferred and transformed to any third party apps. 

A basic *Scenario* has two steps: 
- a **Trigger** 
- and an **Action**
Need a kick-starter? Make has some pre-built Glide integrations. **Check them out here**.

## 2. Integrating Glide & Make
- First, click **Create a new scenario** within Make's Dashboard.
- Second, add a **Trigger** > select the **Glide** module > choose **Watch New Action**.

{% figure src="/docs/reference/integrations/make/creating-scenario.gif" caption="Creating a scenario" /%}

## 3. Create a Webhook
Once we've added the **Trigger** (aka. Glide module), copy the generated webhook URL. 
1. Click **Add**. 
2. **Name** your Webhook. 
3. And **copy to clipboard** the generated URL.

{% figure src="/docs/reference/integrations/make/creating-a-webhook-in-make.gif" caption="Create a Webhook in Make" /%}

## 4. Trigger Webhook Action in Glide
In Glide, we now need to create a **Trigger Webhook** Action. To do this:

1. Create an **Action** > select **Trigger Webhook** option.
2. From secondary dropdown (seen below) > select **Add new webhook**.
3. **Paste** Webhook URL > Add **Name** > **Save**.

{% figure src="/docs/reference/integrations/make/triggering-webhook-settings.gif" caption="Trigger Webhook settings" /%}

## 5. Adding Data to Action
Once we have our Action ready, we can add the values we want to send to Make. 

Let's say we want to send an email with a **Button** component. In the example below, we need to include the recipients email with two **Template** columns with the subject and the email body. 

{% figure src="/docs/reference/integrations/make/add-values-to-webhook.png" caption="Adding values to our Trigger Webhook Action" /%}

## 6. How to Send Sample Data
To set up your first Scenario, we need to send some sample data through the webhook. 

1. In Make, right-click on Glide's module and click **Run this module only**.
2. Back in Glide, click the component with the configured **Trigger Webhook** action.  Glide will then send data to Make. 

{% figure src="/docs/reference/integrations/make/testing-the-trigger.gif" caption="Testing the Trigger" /%}

## 7. Creating Actions In Make
In our example, we want Glide to trigger an email to be sent via **Gmail**. To do this:

1. Add a new module by clicking on the right side of our Trigger Module.
2. Select the app we want Glide to connect with (e.g. **Gmail**).
3. Select the Action that we wish the Module to perform (e.g. **Send an email**).

{% callout title="Actions" %}
You can add as many Actions as you like. You can do more than one at a time too and create multi-step actions.
{% /callout %}

{% figure src="/docs/reference/integrations/make/adding-an-action.gif" caption="Adding an Action" /%}

## 8. Connecting Accounts
If we, for example, want to create a scenario that works with Facebook posts, we must grant access permission to Make for our Facebook profile. This same logic applies to all connected services.

Under **Module Settings** > click **Add** and follow the instructions.

{% callout title="Gmail" %}
If you use Gmail with a *@gmail.com* suffix, you may need to complete some additional steps. **Learn more.** 
{% /callout %}

## 9. Adding Parameters
Once we have connected our service, we can start adding the **Parameters** to our Action. Choose **Value** instead of **Type** from the Parameters list.

{% figure src="/docs/reference/integrations/make/setting-up-our-action.gif" caption="Setting up our Action" /%}

## 10. Testing our Scenario
Here's how to ensure everything is working correctly:

- Click **Run once** on the bottom left of the scenario's window.
- Go back to Glide and run the Action (tap the configured action component). 
- Once the Action is done, rename the Scenario and save it. Turn on the Action by setting the toggle button to "**On**" (bottom left corner). 

{% figure src="/docs/reference/integrations/make/running-the-scenario.gif" caption="Run the scenario" /%}

## Google Sheets as an Action
Currently, we can only use Glide as a Trigger. This means that we can't send information back to Glide. However, Make can be used to send data back to Google Sheets.

{% figure src="/docs/reference/integrations/make/google-sheets-as-an-action.png" caption="Google Sheets Actions" /%}

In the example below, Stripe is the **Trigger** and Google Sheets is the **Action**. 
- The **Trigger**, *Watch Events* (Stripe), checks for new events, such as new payments and new customers. 
- The **Action**, *Add a Row* (Google Sheets), will add a new row to Google Sheets every time new payments and new customers are created in Stripe.

The information added to the Google Sheet can then be displayed inside any connected apps. 

{% figure src="/docs/reference/integrations/make/stripe-and-google-sheets-scenario.png" caption="Stripe and Google Sheets Scenario" /%}

To learn more about Make, please visit:

{% cta title="Make Help Center" description="To learn more Make, checkout their help center:" url="https://www.make.com/en/help/home" /%}