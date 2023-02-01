import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";

const submitFeedback = async (req: NextApiRequest, res: NextApiResponse) => {
  const { pageTitle, pageSlug, content, satisfied } = JSON.parse(req.body);

  const client = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const databaseId = "3387bf223ee64c6f956c200f6c82494d";

  try {
    const response = await client.pages.create({
      parent: { database_id: databaseId },
      properties: {
        "Page Title": {
          title: [
            {
              text: {
                content: pageTitle,
              },
            },
          ],
        },
        "Page URL": {
          url:
            pageSlug === "/"
              ? "https://glideapps.com/docs"
              : `https://glideapps.com/docs${pageSlug}`,
        },
        Satisfied: { checkbox: satisfied },
        Content: {
          rich_text: [
            {
              text: {
                content: content,
              },
            },
          ],
        },
        Timestamp: {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

export default submitFeedback;
