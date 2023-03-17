import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_ID,
  dataset: "production",
  apiVersion: "2023-03-16",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});
