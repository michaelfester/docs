---
title: Rich Text Component
description: Display data as styled content
slug: rich-text-component
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

With the Rich Text component, you can apply italic text, bold text, different text sizes, inline images, links, and more using Markdown syntax.

{% figure src="/docs/reference/components/rich-text/rich-text-use-case.png" caption="" /%}

{% callout type="warning" title="" %}
Do not use HTML tags or CSS code in the Rich Text component. Although some CSS code and HTML tags such as `<iframe>` may function, they are unsupported in Glide and could break at any time. For more information about using CSS in Glide, check out [Custom CSS in Glide](/docs/css-for-pages)
{% /callout %}

## Configure a Rich Text component

### Data

In the **General** tab on the right side of the Layout Editor, select the column you want to display or enter a [Custom Value](/docs/custom-values).

{% figure src="/docs/reference/components/rich-text/rich-text-configuration.png" caption="" /%}

{% callout title="" %}
If you select a column from your data source that contains Markdown, it will be displayed with the specified styling in your project. You can also apply Markdown styling to custom text.
{% /callout %}

## Actions

This is the behavior that will be triggered when users tap on the Rich Text component. You can choose from any of the actions available in Glide, or you can create a new action.

1. In **General > Action**, select the menu arrows.
2. In **Configure Action**, select the dropdown menu to view action options.
3. Select the action to be triggered when users tap your Rich Text component.
4. If prompted, apply any additional settings in **Configure Action**.

{% figure src="/docs/reference/components/rich-text/rich-text-actions.png" caption="" /%}

{% cta title="Actions" description="For detailed information about all of the actions available in Glide, check out Actions." url="/docs/actions" /%}

## Learn more about Markdown

- For an in-depth explanation of what Markdown is and how to use it, check out the [Markdown Guide](https://www.markdownguide.org/getting-started).
- To learn the specifics about Markdown's syntax, see John Gruber's [Syntax](https://daringfireball.net/projects/markdown/syntax) page on Daringfireball.net.
- If you'd like to try a browser-based Markdown text editor, try [StackEdit](https://stackedit.io/).
