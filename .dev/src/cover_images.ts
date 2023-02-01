import * as crypto from "crypto";

const { FLIPP_KEY } = process.env;

export enum TemplateID {
  DocsCover = "69jmepwr5g3e",
}

const templates = {
  [TemplateID.DocsCover]: { title: "" },
};

type Templates = typeof templates;

// We'd prefer to use this, but it's not clear how we run this on the server
export function templateImageURL<ID extends keyof Templates>(
  id: ID,
  options: Templates[ID]
) {
  if (typeof FLIPP_KEY === "undefined") {
    throw new Error(
      "FLIPP_KEY is undefined. This cannot be called from client side."
    );
  }

  const query = Buffer.from(JSON.stringify(options)).toString("base64");
  const signature = crypto
    .createHmac("sha256", FLIPP_KEY as string)
    .update(id + query)
    .digest("hex");
  return `https://s.useflipp.com/${id}.png?s=${signature}&v=${query}`;
}

export function templateImageURLUnsigned<ID extends keyof Templates>(
  id: ID,
  options: Templates[ID]
) {
  const query = Object.entries(options)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");

  return `https://i.useflipp.com/${id}.png?${query}`;
}
