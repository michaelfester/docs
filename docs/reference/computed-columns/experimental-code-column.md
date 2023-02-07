---
title: Experimental Code Column
description: Create new computed columns with JavaScript.
video:
slug: experimental-code
---

With the Experimental Code Column, you can use your own JavaScript code to create new, custom computed columns. Parameters & results are passed to your code; your code performs computations or fetches data from third parties and then returns values back to your app.

## TLDR (for experienced programmers)

1. Host your code at a publicly accessible URL
2. Parameters and results are passed as JSON
3. Perform computations or fetch data
4. Return a single (or array value) from your code
5. Read the important caveats at the end of this guide.

## Beginners Guide

The easiest way to think about how the column works is that it;

1. Sends values (columns) from Glide to your code which is hosted elsewhere
2. Your code then computes something using those values
3. The result is then returned to Glide
4. The result is computed for every row in your table

(in reality, the code runs on your device, but it's useful to think of it this way 👆🏼)

## Hosting your code

When we add the Experimental Code Column, we see only one field, which is the URL for our code. Hosting code is a whole other topic which we can't go into depth with here. Suffice it to say – your code needs to be publically accessible on the web so the Experimental Code column can reference it. You can host your code in many different ways, but we would suggest using [Replit](https://replit.com/) or [GitHub Pages](https://pages.github.com/).

Replit lets you write, publish & host code easily. To help you out, [**we've created a starter project for you**](https://replit.com/@MarkProbst/glide-experimental-code-substring#README.md). After you've signed up for an account, copy [**this Repl**](https://replit.com/@MarkProbst/glide-experimental-code-substring#README.md) by ‘forking' it.

![](</docs/reference/computed-columns/experimental-code-column/Group%201%20(1)%20(1).png>)

Your code needs a number of files for it to work properly. In the project you just copied, you'll see the following:

- The **index.html** file loads all the other files
- The **driver.js** file is the interface between the code you write in **function.js** and Glide
- The function.js file is the actual JavaScript code of your column
- The **glide.json** file contains metadata about your code, such as its name, a description, what parameters it takes, and what kind of result it produces.
- The **README.md** is a markdown file explaining some of what is covered in this guide.

The only two you need to worry about are the **glide.json** and **function.js** files. You should leave the others alone unless you really, really know what you're doing 😉.

## Glide.json

The **glide.json** file contains high-level information about your code. In other words, this is where you define;

1. The name and description of your column (as well as any other metadata you want)
2. The names and types that you'll be passing from Glide to your code (otherwise known as parameters)
3. The type of value you want your code to return to Glide (string, number, boolean, array, etc)

The glide.json file is written in JSON. You can learn more about JSON [**here**](https://www.w3schools.com/whatis/whatis_json.asp).

In our example, we have three values we want to pass to our code:

1. The **string** we want to extract the substring from
2. The **start index** of the substring – e.g., character position 0 (which would be “M” in “Michael”)
3. The **end index** of the substring – e.g., character position 3 (which would be "c" in "Michael")

![](/docs/reference/computed-columns/experimental-code-column/Screenshot%202021-07-27%20at%2021.18%201.png)

When we add the public URL of our code to the column, the JSON objects we define will show up as functional fields that we can pass data into.

![](/docs/reference/computed-columns/experimental-code-column/Group%202.png)

The final part of the glide.json file is the return type. This is the type of data that your code returns. In our example, we'll be returning a string, so we will write:

```js
1 "result": {
2     "type": "string"
3           }
```

## Function.js

The **Function.js** file is the actual JavaScript code for your column. In our example, our function is quite simple. Below is the code with comments.

```js
1 // The function here takes the parameters that you
2 // have declared in the `glide.json` file, in the
3 // same order.
4
5 window.function = function (str, start, end) {
6
7  // For each parameter, its `.value` contains
8  // either its value in the type you've declared,
9  // or it's `undefined`.  This is a good place to
10  // extract the `.value`s and assign default
11  // values.
12
13  str = str.value ?? "";
14  start = start.value ?? 0;
15  end = end.value;
16
17  // Your function should return the exact type
18  // you've declared for the `result` in the
19  // manifest, or `undefined` if there's an error
20  // or no result can be produced, because a
21  // required input is `undefined`, for example.
22
23  return str.substring(start, end);
24 }
```

## Making changes to your code

When your app loads on a device , it will always get the latest code that you've published online.

If you make changes to your code and want to see the results whilst you're editing your app you'll need to publish those new changes, visit the column in the Data Editor and click the refresh button. This will fetch your updated code and sync it to the Data Editor for you to see the effects and debug any issues.

![](/docs/reference/computed-columns/experimental-code-column/Group%203.png)

{% callout %}
Whenever a Glide app starts up, it loads the code for the Experimental Code column. If you make changes and are testing them on your device then you will need to quit the app and re-open it.
{% /callout %}

## Types

`string`, `number`, and `boolean` are the basic primitive types. If you declare a parameter of this type, Glide will convert whichever values are passed into that declared JavaScript type. In other words – if you declare a parameter as `number`, then you can be sure that the value is a JavaScript number (or `undefined`, which can happen for any parameter).

`primitive` is special in that it doesn't convert the values, as far as that is possible. For example, if you have a boolean column with a string value of `"True"`, if you declare a parameter as `boolean`, Glide will pass it as the boolean true, but if you declare it as `primitive`, Glide will pass the string `"True"`.

`uri`, `image-uri`, `audio-uri`, `date-time`, `markdown`, `phone-number`, `email-address`, and `emoji` are string types, i.e. Glide will pass them as strings to your code, and you have to return them as strings, but Glide treats them specially. For example, if your computed column declares that it returns `date-time`, then you can use all the date/time comparison operators on the result.

Arrays of primitive values are declared as, for example { "kind": "array", "items": "string" }, which declares an array of strings.

## Caveats

### Your Code is Public

Your code needs to be public in order for Glide to read it – so don't put any secrets or sensitive information in there. You also can't assume that the code you are writing is only going to be called from your app. Even if you haven't shared the code's URL, someone else could theoretically run your code by calling it from somewhere else.

### Not Designed for Actions

The experimental code column is not designed for code that performs actions. It should only be used to compute data or call data from other services.

This is because you do not control when or how often the code is called and at what interval. This is determined by the internals of Glide.

Another way of thinking about it is that your code should be **idempotent**. No matter how many times it's run on the same data, the same result will be returned. Code that increments a number, for example, is not idempotent.

### Make Sure You Trust The Author

If you're using code written or hosted by someone else – make sure you trust the author. Experimental Code columns can access any data you pass to them so it's important you are confident with where it's going.

### Sharing your code

Similarly, if you share your code with others – make sure you are clear on the implications and remove any parts of the code that you don't want others to be able to access.

### It's Experimental 😉

We built this feature to learn which computed columns we should add to Glide. The Experimental Code column could change drastically, or we could even remove it. We encourage you to play with it but we don't recommend building mission-critical functionality with it just yet.

### Support

Glide support staff cannot help you with your custom code, but you can always post in the forum, and you're sure to get a response from one of our friendly community members.

## Examples

Here are some examples from [the community](https://community.glideapps.com/) that you can copy for free.

- [String length](https://glide-yes-code-string-length.markprobst.repl.co)
- [Base64] (https://glide-yes-code-base64-encode.markprobst.repl.co)
- [Weather] (https://glide-yes-code-weather.markprobst.repl.co)
- [Random number](https://replit.com/@MarkProbst/glide-yes-code-random-number#function.js)
- [Unique letter count](https://replit.com/@MarkProbst/glide-yes-code-unique-letter-count#function.js)
- [Substring] (https://glide-yes-code-substring.markprobst.repl.co)
- [Rank by Manu](https://replit.com/@ManuN2/Order#function.js) and [Robert Pettito](https://replit.com/@rpetitto/Rank?v=1)
- [Hell Yes Code](https://replit.com/@MarkProbst/glide-yes-code-hell-yes#function.js)
- [Reverse an array](https://replit.com/@MarkProbst/glide-yes-code-reverse-array#function.js)
- [Latitude & longitude by Santiago Perez](https://replit.com/@SantiagoPerez20/Get-Latitude-and-Longitude)

{% callout %}
Many of these have now been turned into much more accessible columns you can add directly in the Data Editor. Learn more about these [here] (https://www.glideapps.com/plugins)
{% /callout %}
