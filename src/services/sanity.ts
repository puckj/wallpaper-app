import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { shuffleArray } from "../helpers/shuffleArray";
import { PROJECT_ID } from "@env";

const client = createClient({
  projectId: PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-07-14",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export const getCategory = async () => {
  const categories = await client
    .fetch('*[_type =="category"]')
    .then((data) => shuffleArray(data));
  return categories;
};

export const getCategoryItemsById = async (categoryId: string) => {
  const items = await client
    .fetch(`*[_type =="item" && $categoryId in category[]->_id]`, {
      categoryId,
    })
    .then((data) => shuffleArray(data));
  return items;
};

export const getItemById = async (itemId: string) => {
  const items = await client
    .fetch(`*[_type == 'item' && _id == $itemId ][0]`, {
      itemId,
    })
    .then((data) => data);
  return items;
};
