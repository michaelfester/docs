---
title: Files
description: What happens to the the files you upload.
video:
slug: files
---
Various Glide features require the hosting of files. For example, when you upload files in the **image** or **file picker** and when you fill out the **signature component** – Glide stores that file online and this counts against your storage quota. 

You can learn more about files and quotas over at **https://www.glideapps.com/pricing**. 

Uploaded files will eventually be deleted if we don't detect them being used for a long time. 

'Being used' means that there is a link to the file in a table. So as long as there is a link to a file somewhere in your table, Glide will not delete it (assuming your team is within your plan's storage quota). 

- If a Glide-hosted file is referenced in a row and that row is being used in a project — it will not be deleted
- If a Glide-hosted file is referenced in a row, but the team is affected by quota overages — it may be deleted after 21 days.
- If a Glide-hosted file is referenced in a row, but that table is not used in any Glide project — it may be deleted after 21 days.

{% callout title="" %}
Deleted files can be reinstated for up to 21 days after removal just by putting them back in a visible row.
{% /callout %}
