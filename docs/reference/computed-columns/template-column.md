---
title: Template Column
description: Display dynamic text that can change with the values in other columns.
video: https://youtu.be/lJ8a0aMU2ds
slug: template-column
---

Template columns allow you to display dynamic text from data found in other columns.

For instance, you can use template columns to create messages where you need to display user-specific information. Check out this example:

**“Welcome, NAME!”** is the message and **NAME** is a user-specific information extracted from a column source.

# Creating a Template Column

To create a template column:

- Open the [Data Editor](docs/data-editor) and add a new column.
  
{% figure src="/docs/reference/computed-columns/templare-column/adding-a-new-column.png" caption="Adding a new column" /%}

- Name your column and select “Template” as the type.

- Enter the full text of the message you want to configure. Be sure to leave placeholders for every spot where you want to automatically substitute user-specific data. 

- Enter the text that should be replaced. Then, select which information should replace that text. 
  
{% figure src="/docs/reference/computed-columns/templare-column/naming-the-column-and-choosing-the-template-column.png" caption="Configuring the Template Column" /%}
   
- If you’d like to make multiple replacements, select “Add replacement” and make a new entry for each word that should be replaced.
  
{% figure src="/docs/reference/computed-columns/templare-column/configuring-the-template-column.png" caption="Add Replacement in Template Column" /%}
    
- When you are finished, select “Done.” The text in your column should automatically update with the customized, user-specific information you’ve chosen. 
  
{% figure src="/docs/reference/computed-columns/templare-column/an-example-for-a-template-column.png" caption="An example of a Template Column" /%}

{% callout title="" %}
It can be helpful to use brackets or capital letters in your template message so it’s obvious where you should swap out the text.    
For example: “Welcome, NAME! Today is DAY.”
Becomes: “Welcome, Elina! Today is Thursday.”
{% /callout %}

## Information from User Profiles
    
If you plan to display user-specific information, such as names, make sure to set up User Profiles in your app. This way, data specific to that user in your template column is displayed properly in your app.  

{% cta title="User Profiles" description="To read more about user profiles in Glide, check out our guide." url="/docs/user-profiles" /%}
 

