---
title: Protected Columns
description: Keep unused columns in your data source secure.
slug: protected-columns
video:
---

{% callout title="Meet the new Glide Apps" %}
Pages and Apps have been combined into just ‘Glide Apps’. Please refer to [this article](/docs/meet-the-new-glide-apps) for updated information, as some of this documentation is outdated.
{% /callout %}

{% callout title="Security Center" %}
To learn more about keeping your app secure, read the latest information in our **Security Center**.
{% /callout %}

When we build a screen with the data in our sheet – we don't always use all of our sheet's columns. However, your app can still download the data in unprotected columns – even if they are not used or are hidden by visibility conditions.

If you have unused columns with sensitive or private information and your app is on a **paid plan** – you should make those columns protected columns.

When a column is protected, none of the data in that column can be downloaded. In the Data Editor, the column's contents will be hidden and can't be processed in any way by Glide.

{% figure src="/docs/reference/security-and-user-data/protected-columns/marking-as-protected.gif" caption="Mark as protected" /%}

## Writing data to protected columns

However protected columns can be written to – so if you're using a **Form** or an **Add screen** – users will be able to submit data to that column – but once it's been added, it will no longer be accessible.

## Unused sheets

If you have entire sheets that are not used at all by your app then you don't need to protect them. Your app can only access sheets that the app uses.

For example – this Spreadsheet has four sheets, but the app only uses data from two of these (highlighted in blue). Because of this – our app will not download the data from any of the unused sheets.

![](/docs/reference/security-and-user-data/protected-columns/unused-sheets.png)
