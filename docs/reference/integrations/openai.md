---
title: OpenAI
description: Leverage artificial intelligence to generate prompt-based text and images.
video:
slug: openai.md
---

## Introduction to the OpenAI integration

The **OpenAI integration** allows you to generate text and images based on *your own prompts*, using the artificial intelligence of OpenAI's language models. These models have the ability to comprehend and produce text and images for you.

{% callout title="" %}
A prompt in the context of OpenAI is a command you give OpenAI for it to generate text or images for you. Here is a [quickstart guide on prompts](https://platform.openai.com/docs/quickstart).
{% /callout %}

## Adding and Configuring the OpenAI Integration

To start using the OpenAI integration, you first need to add it to your project.

1. Create an account on [**OpenAI**](https://openai.com/).
2. In **OpenAI**, head to the [**API keys page**](https://platform.openai.com/account/api-keys) and create a new API search key. Save this key in a safe place.
3. In **Glide** and inside your Glide project, click the **Settings menu**.
4. Find the **Integrations** section and select **OpenAI**.  
5. Click the **Add to app** button.
6. Copy-paste the **OpenAI API key** to finish configuring the integration.

The OpenAI integration is now complete.

{% callout title="" %}
Copy and paste the secret API key and click away, there is no need to hit the enter key. The API key will be hashed with asterisks or bullets as if it were a password.
{% /callout %}

##  Features of the OpenAI integration

### Features Overview

The OpenAI integration comes with the following features:

- [Analyze Sentiment](https://www.notion.so/New-Doc-OpenAI-Integration-44d31024bd4a4b0b8e60f53461ee0139)
- [Answer a Question](https://www.notion.so/New-Doc-OpenAI-Integration-44d31024bd4a4b0b8e60f53461ee0139)
- [Complete a Prompt](https://www.notion.so/New-Doc-OpenAI-Integration-44d31024bd4a4b0b8e60f53461ee0139)
- [Correct Grammar](https://www.notion.so/New-Doc-OpenAI-Integration-44d31024bd4a4b0b8e60f53461ee0139)
- [Extract Keywords](https://www.notion.so/New-Doc-OpenAI-Integration-44d31024bd4a4b0b8e60f53461ee0139)
- [Generate Image](https://www.notion.so/New-Doc-OpenAI-Integration-44d31024bd4a4b0b8e60f53461ee0139)
- [Send a Message to a Bot](https://www.notion.so/New-Doc-OpenAI-Integration-44d31024bd4a4b0b8e60f53461ee0139)
- [Suggest a Color](https://www.notion.so/New-Doc-OpenAI-Integration-44d31024bd4a4b0b8e60f53461ee0139)
- [Suggest an Emoji](https://www.notion.so/New-Doc-OpenAI-Integration-44d31024bd4a4b0b8e60f53461ee0139)
- [Summarize Text](https://www.notion.so/New-Doc-OpenAI-Integration-44d31024bd4a4b0b8e60f53461ee0139)
- [Table Question](https://www.notion.so/New-Doc-OpenAI-Integration-44d31024bd4a4b0b8e60f53461ee0139)

{% callout title="" %}
**Features in the Data Editor and in the Actions Editor**

- Features can be set up in the **Data Editor** via OpenAI **computed columns** found in the group of columns called **Integrations**. The OpenAI feature via its computed column then applies to **all rows** in the table.
- Features can also be set up in the **Actions Editor** via OpenAI **actions**. The feature then applies to the **active row** upon which the action is running. The data source table of the action indicates where the input(s) and output are located.

**Should you set up an OpenAI feature in the Data Editor or in the Actions Editor**

Ask yourself if the interaction with OpenAI should happen on a punctual basis such as on the click of a button: in this case, set up your feature in the Actions Editor. Or, should OpenAI process data as soon as the data arrives in a table regardless of user interaction? In this case, set up your feature in the Data Editor.
{% /callout %}

## Analyze Sentiment

The **Analyze sentiment** feature can be used as an action or as a computed column.

| Field | Description | Required field? | Example | Notes |
| --- | --- | --- | --- | --- |
| Prompt | The prompt is what OpenAI is analyzing | ✅ | Today is a new day! |  |
| Result | When using Analyze Sentiment as an action, you will need to set the column where the result should be written to | ✅ | positive | There are three possible outputs for this feature: positive, neutral, negative |

OpenAI’s sentiment analysis is used to identify whether a piece of text is positive, negative or neutral. Some use cases for Analyze Sentiment might include:

- Monitoring user comments to assess the likeability of your brand or products.
- Improve customer support by identifying negative and neutral opinions.
- Track the mood of employees by analyzing employee surveys and segmenting responses.
- Analyze user-generated content and ensure tone consistency.
- Turn sentiment analysis results into numerical values and perform roll ups such as counts and averages for reporting.
- Act promptly on negative comments submitted in a feedback form.

### Input and output of Analyze Sentiment

- Input (required text): Text such as a word, sentence or paragraph.
- Output: The terms “positive”, “neutral” or “negative”.

### Setup

- Step 1: Create a basic text column which will house the text whose sentiment is to be analyzed.
- Step 2: Create a new computed column and select the Analyze Sentiment column, which you will find in the Integrations group or by using the Search function.
- Step 3: Set the Prompt field to point to the basic text column whose text is to be analyzed.

Step 2: Create a new computed column and select the Analyze Sentiment column

Step 3: Set the Prompt field to point to the basic text column whose text is to be analyzed

## Answer a question

OpenAI’s Answer a Question function can be used to create a question-and-answer or chatbot feature within your project.

### Input and output of Answer a Question

- Input (required text): A question
- Output: An answer to the question

{% callout title="" %}
Answers are generated by OpenAI’s GPT language models to the best of the model’s capabilities. The veracity of answers is not guaranteed.
{% /callout %}

### Setup

- Step 1: Create a basic text column which will house the question to be answered.
- Step 2: Create a new computed column and select the Answer a Question column, which you will find in the Integrations group or by using the Search function.
- Step 3: Set the Question field to point to the basic text column whose question will be answered.

## Complete a prompt

By providing a text prompt as a cue, the Complete a Prompt computed column will generate a text output that tries to replicate the context or pattern that was initially given. The text output might continue the initial text prompt, transform it, or generate an entirely new text related to it.

One of the most powerful yet simplest tasks you can accomplish with Complete a Prompt is generating new ideas or versions of an input. You can ask for anything from story and recipe ideas, to business plans, to character descriptions and marketing slogans.

{% callout title="" %}
If repeated, you might get a slightly different output even if your prompt input stays the same. This is because OpenAI’s language models are not deterministic. Setting temperature to 0 will make the outputs mostly deterministic (less different), but a small amount of variability may remain.
{% /callout %}

### Input and output of Complete a Prompt

- Input
    - Prompt (required text): The word, sentence or paragraph to be completed.
    - Model (required text): The OpenAI API is powered by a diverse set of models with different capabilities. For instance:
        - text-davinci-003 can be used for text completion.
        - code-davinci-002 is optimized for code completion, most capable in Python and proficient in over a dozen languages including JavaScript, Go, Perl, PHP, Ruby, Swift, TypeScript, SQL, and even Shell.
        - gpt-3.5-turbo is optimized for chat at 1/10th the cost of text-davinci-003.
        - Refer to OpenAI’s [latest language models](https://platform.openai.com/docs/models/overview).
    - Temperature (optional number, defaults to 1): Number between 0 and 2. The higher the temperature, the more random, and usually creative, the output. Lower values will make the output more focused and deterministic. This, however, is not the same as “truthfulness”. For most factual use cases such as data extraction, and truthful Q&A, the temperature of 0 is best.
    - Maximum length (optional number, defaults to 16): Does not control the length of the output, but a hard cutoff limit for token generation. Ideally you won’t hit this limit often, as your model will stop either when it thinks it’s finished, or when it hits a stop sequence you defined. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
    - Frequency penalty (option number, defaults to 0): Number between -2.0 and 2.0. Positive values decrease the likelihood of the same strings of words being repeated verbatim.
- Output: A text output that tries to replicate the context or pattern that was initially given, such as a stories, recipes, business plans, character descriptions or marketing slogans.

{% callout title="" %}
**Rules of Thumb** 
- Use the latest OpenAI model.
- Be specific, descriptive and as detailed as possible about the desired context, outcome, length, format, style, etc.
- Parameters model and temperature are the most commonly used to alter the output.
{% /callout %}

### Setup

- Step 1: Create a basic text column which will house the Prompt. The values for the Model, Temperature, Maxiumum length and Frequency penalty can be set within the configuration of the Complete a Prompt column, or you can create basic columns for each should you required further fine tuning of the output.
- Step 2: Create a new computed column and select the Complete a Prompt column, which you will find in the Integrations group or by using the Search function.
- Step 3: Set the Prompt to point to the basic text column whose Prompt will be completed. Further set the model, temperature, maximum length and frequency penalty.

## Correct Grammar

The Correct Grammar function corrects the grammar of a block of text.

### Input and output of Correct Grammar

- Input: A block of text (sentence, paragraphs) whose grammar is to be corrected.
- Output: The same block of text with correct grammar.

### Setup

- Step 1: Create a basic text column which will house the text whose grammar is to be corrected.
- Step 2: Create a new computed column and select the Correct Grammar column, which you will find in the Integrations group or by using the Search function.
- Step 3: Set the Phrase to point to the basic text column housing the text whose grammar is to be completed.

## Extract Keywords

The Extract Keywords functions allows you to extract keywords from a block of text such a sentence, paragraph or series of paragraphs. The most used and most important words and expressions from the text help summarize the content and identify the main topics.

### Input and output of Extract Keywords

- Input: A block of text (sentence, paragraphs).
- Output: The most used and most important words and expressions from the text.

### Setup

- Step 1: Create a basic text column which will house the phrase or paragraph(s) whose keywords will be extracted.
- Step 2: Create a new computed column and select the Extract Keywords column, which you will find in the Integrations group or by using the Search function.
- Step 3: Set the Prompt to point to the basic text column whose keywords will be extracted.

## Generate Image

The Generate Image features allow you to create images from scratch based on a text prompt.

### Input and output of Generate Image

Input: A description of the image to be generated

Output: An image

### Setup

Step 1: In the Data Editor, create a basic text column with a description and a basic image column that will house the generated image.

Step 2: In the Actions Editor, create a new actions flow and select the table where the generated image is to be stored.

Step 3: Step 3: Add an action, select OpenAI’s Generate Image action. Configure the Description field by inputing custom text or pointing to the Description column. Point the Dall-E image field to the basic image column that will store the generated image.

The action flow, when run, will now generate an image from the Description or custom text.

## Suggest a Color

Turn a text description into a color.

### Input and output of Suggest a Color

- Input: Text such as a word, sentence or paragraph.
- Output: One single color in HEX color code format.

### Setup

- Step 1: Create a basic text column which will house the text from which a color will be suggested.
- Step 2: Create a new computed column and select the Suggest a Color column, which you will find in the Integrations group or by using the Search function.
- Step 3: Set the Prompt to point to the basic text column from which a color will be suggested.

## Suggest an Emoji

Turn a text description into an emoji.

### Input and output of Suggest an Emoji

- Input: Text such as a word, sentence or paragraph.
- Output: One single emoji.

### Setup

- Step 1: Create a basic text column which will house the text from which a emoji will be suggested.
- Step 2: Create a new computed column and select the Suggest Emoji column, which you will find in the Integrations group or by using the Search function.
- Step 3: Set the Prompt to point to the basic text column from which an emoji will be suggested.

## Summarize Text

The Summarize Text function allows you translate a difficult text into simpler concepts or to turn meeting notes into a summary.

### Input and output of Summarize Text

- Input: A block of text, notes, bullet points.
- Output: An summarized or simplified version of the text.

### Setup

- Step 1: Create a basic text column which will house the text to be summarized or simplified.
- Step 2: Create a new computed column and select the Summarize Text column, which you will find in the Integrations group or by using the Search function.
- Step 3: Set the Prompt to point to the basic text column whose text is to be summarized or simplified.

## Table Question

The Table Question function allows you to ask a question and additionally include a table of data to add context to the question. 

{% callout title="" %}
The Table Question feature is experimental and maybe provide approximate or erroneous answers.
{% /callout %}

### Input and output of Table Question

- Input:
    - Question / Query (required): A question or query in text format.
    - Prompt (optional): If the answer is not satisfactory, use Prompt to give additional guidance.
    - Temperature (optional number, defaults to 1): Number between 0 and 2. The higher the temperature, the more random, and usually creative, the output. Lower values will make the output more focused and deterministic. This, however, is not the same as “truthfulness”. For most factual use cases such as data extraction, and truthful Q&A, the temperature of 0 is best.
    - Maximum length (optional number, defaults to 16): Does not control the length of the output, but a hard cutoff limit for token generation. Ideally you won’t hit this limit often, as your model will stop either when it thinks it’s finished, or when it hits a stop sequence you defined. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
    - Frequency penalty (option number, defaults to 0): Number between -2.0 and 2.0. Positive values decrease the likelihood of the same strings of words being repeated verbatim.
- Output: An answer to the question.

### Setup

- Step 1: In the Data Editor, determine which table will be the data source table of the Table Question action. Create columns that will hold basic text values for the Question and Answer. Optionally, create additional columns to hold basic text values for Query and Prompt, and basic number values for Temperature, Maximum Length and Frequency Penalty.
- Step 2: In the Actions Editor, create an action flow, set the data source table to the table in Step 1, set the first action to “OpenAI > Table Question”.
- Step 3: Configure the action by pointing the fields to their associated columns
- Step 4: Indicate which table is to be searched to help provide an Answer to the Question.
- Step 5: Test run the action in the Actions Editor or use the action on a component in the Layout Editor.

## FAQ


{% faq question="What types of AI tasks can I accomplish with Open AI and Glide?" answer="The OpenAI integration comes with the following functions:
    
    - Analyze sentiment
    - Answer a question
    - Complete a prompt
    - Correct grammar
    - Extract keywords
    - Send a message to a bot
    - Suggest a color
    - Suggest an emoji
    - Summarize text " /%}

{% faq question="Is there a cost associated with using the OpenAI integration with Glide?" answer="Refer to [Glide’s pricing](https://www.glideapps.com/pricing) to confirm your plan gives you access to the OpenAI integration. Refer to [OpenAI’s pricing](https://openai.com/pricing) for the cost associated with using your OpenAI API key " /%}

{% faq question="What are OpenAI’s API data usage policies? These might include how API data is used by OpenAI, where API data is stored, if data is encrypted, if data is stored in the EU." answer="Data in your Glide project is processed by OpenAI’s API and returned to your project for further use. Refer to [OpenAI’s API data usage policies](https://openai.com/policies/api-data-usage-policies). " /%}    
    
{% faq question="What AI models does Glide support with OpenAI?" answer="Data in your Glide project is processed by OpenAI’s API and returned to your project for further use. Refer to [OpenAI’s API data usage policies](https://openai.com/policies/api-data-usage-policies). " /%} 