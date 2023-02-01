---
title: Templates
description: Learn how to work with and adapt premade templates.
video: https://youtu.be/ea9BeCnh2vs
slug: templates
---

Templates are brilliant for kick-starting your project. There are [hundreds in our store](https://www.glideapps.com/templates) for all types of use cases, and you can use them to start your projects nearer the finish line.

Before adapting a template, it helps to understand the [basics of Glide](http://glideapps.com/docs/guides/core). Once you do, though, the first thing you should do is copy one and mess around with it.

Remember, you can’t break Glide — and you can always copy a template again, even if you purchase it. So just copy different templates that interest you, click on everything, change stuff, and have fun exploring.

## Branding & Design

The first thing you’ll want to do is brand the app yourself. In the settings area, you can change the logo, accent color, theme, sign-in screen, font, and more.

{% figure src="/docs/guides/core/templates/settings-menu.png" caption="The Settings area of Glide" /%}

## Data Sources

Templates usually come built with [Glide Tables](/docs/glide-tables). You can edit this data and make it your own, or you can add your own [Data Sources](https://www.glideapps.com/docs/reference/data-sources) in the [Data Editor](/docs/data-editor) to build out your project.

{% figure src="/docs/guides/core/templates/adding-a-new-table.png" caption="Adding a new data source in the Data Editor" /%}

## Deleting & Changing Stuff

If you’re adapting a template, you’re going to want to change things. Just like if you moved to a new house, you’d want to do some redecoration. But… there might be consequences if you go around knocking down walls without understanding what’s holding things up!

In Glide terms, the important thing to understand before deleting or editing stuff is how the data connects to the design. And luckily, there are a few features that will really help you do that.

## Find all uses

Sometimes if you delete a column in a template, you get a warning. The warning usually says that this data is being used somewhere else, and deleting it will have consequences.

{% figure src="/docs/guides/core/templates/find-all-uses.png" caption="If you delete a column that has dependencies, you will get a warning" /%}

To explore more, you can find all uses for that column by clicking on the column header. This lets you understand and visit all the places where that data is being used.

{% figure src="/docs/guides/core/templates/find-uses.png" caption="Clicking a column dropdown and locating the Find uses function" /%}

In software, this is called a ‘dependency’. What this means is that the [Components](/docs/components) and other columns listed here are *relying* on the data in this column to work.

So at this point it’s really up to you what you delete. Again, why not try it? You can always copy the template again. Or, if you’ve already done a lot of customization, you can duplicate your project as a backup and work on the duplicate as a test.

## Go to column

The Go To Column button kind of works the other way round. If you’re somewhere in your project and you see a Component displaying data — you might wonder where that data is located.

In the column dropdown, you can click on the Go To Column button to go straight to that column and see the source of that data.

{% figure src="/docs/guides/core/templates/go-to-column.png" caption="Clicking the Go to column button" /%}

## Copy Paste

You can copy a single Component or all Components and then paste them on a new screen.

{% figure src="/docs/guides/core/templates/copying-components.png" caption="Copy-pasting by right-clicking in the Screen Panel" /%}

{% callout %}
A great way to learn and adapt templates is to; **copy** it, **explore** it, **edit** things, **copy-paste** things, **delete** things and then **add** your own stuff.
{% /callout %}

## Experts

You might find that you’d like some help with some of the more detailed templates. If this is the case, you can always hire an expert to help you. Or, if they’re willing — you can contact the template author.

{% cta title="Glide Experts" description="Learn more about and browse experts" url="https://glideapps.com/experts" /%}

## Team templates

Anyone on your team can make an internal template. Your collaborators can then create new projects from that template to move quicker. If your team creates a lot of projects or if you want to standardize the projects your team creates — this can be very useful.

{% figure src="/docs/guides/core/templates/team-templates.png" caption="The Internal Templates area of your Glide Team" /%}

If you’ve created a project and you want to turn it into a template, you’ll find this option in the project’s dropdown menu on the Dashboard.

{% figure src="/docs/guides/core/templates/converting-an-exsisting-app-into-a-template.png" caption="Turning an existing project into an Internal Template" /%}
