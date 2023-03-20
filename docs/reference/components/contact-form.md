---
title: Contact Form
description: A pre-configured contact form for your page
slug: contact-form
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

**Contact Form** is a quick way to add a simple ‘Contact Us' form to your page.

{% figure src="/docs/reference/components/contact-form/contact-form.png" caption="" /%}

## Configure the Contact Form component

### Data

In the **General** tab on the right side of the **Layout Editor**, locate the **Data** section. Use the menus in **Title** and **Description** to select the values from your data to display, or select **Custom** to enter [Custom Values](/docs/custom-values) for these fields.

1. Select the **Target Table** from your [Data Source](/docs/reference/data-sources). The Target Table will be the destination for your form submissions, so you may need to add a new table to your data source to capture responses.
2. Assign the appropriate columns from your data source to store the user's **Name**, **Email**, **Phone,** and **Message** fields.

{% callout title="" %}
The Contact Form requires, at a minimum, a user's **Email** address and a **Message** in order to submit the form. Other optional fields include the user's **Name** and **Phone** number.
{% /callout %}

{% figure src="/docs/reference/components/contact-form/configuration.png" caption="" /%}

### Additional Columns

In the **General** tab on the right side of the **Layout Editor**, locate the **Additional Columns** section. Any columns from your **Target Table** that were not assigned to the **Name**, **Email**, **Phone**, or **Message** fields will be available as additional columns.

Additional Columns capture information from the current screen or the [User Profile](/docs/user-profiles) table. These can be especially useful if you've included contact forms on multiple pages. For example, suppose you assign an Additional Column that captures the specific title of the page. In that case, you'll be able to quickly see what content the submission is referencing without the user having to manually enter this as part of their form submission. You can also use custom values here.

{% figure src="/docs/reference/components/contact-form/additional-columns.png" caption="" /%}

### Actions

This is the behavior that will be triggered after users submit the Contact Form. You can choose from any of the actions available in Glide, or you can create a new action.
{% cta title="Actions" description="Glide presents different configuration options tailored to each action. For detailed information about all of the actions available in Glide, check out Actions." url="/docs/actions" /%}

{% callout title="" %}
Glide will automatically add a new row to your **Target Table** when the Contact Form is submitted. You do not need to include an **Add Row** action here.
{% /callout %}

1. In **General > After Submit Action**, select the menu arrows.
2. In **Configure Action**, select the dropdown menu to view action options.
3. Select the action to be triggered after the Contact Form is submitted.
4. If prompted, apply any additional settings in **Configure Action**.

{% figure src="/docs/reference/components/contact-form/actions.png" caption="" /%}
