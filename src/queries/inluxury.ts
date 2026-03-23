import { sanityClient } from "@/lib/sanity";
import type { InluxuryData } from "@/types/inluxury";

const INLUXURY_FIELDS = `
    "popup": {
      "visible": popup.visible,
      "alt": popup.alt,
      "image": popup.image.asset->url,
      "url": popup.url
    },
    "promotions": promotions[] {
      "_key": _key,
      "alt": alt,
      "image": image.asset->url,
      "url": url
    }
`;

const INLUXURY_SINGLETON_QUERY = `
  *[
    _type == "inluxury" && (_id == "inluxury" || _id == "drafts.inluxury")
  ][0] {
    ${INLUXURY_FIELDS}
  }
`;

const INLUXURY_LATEST_QUERY = `
  *[_type == "inluxury"] | order(_updatedAt desc)[0] {
    ${INLUXURY_FIELDS}
  }
`;

export async function getInluxuryData(): Promise<InluxuryData | null> {
  try {
    const singletonData = await sanityClient.fetch<InluxuryData | null>(
      INLUXURY_SINGLETON_QUERY
    );

    if (singletonData) {
      return singletonData;
    }

    console.warn(
      "Sanity singleton document 'inluxury' was not found. Falling back to the latest updated 'inluxury' document."
    );

    const latestData = await sanityClient.fetch<InluxuryData | null>(
      INLUXURY_LATEST_QUERY
    );

    if (!latestData) {
      console.warn("No 'inluxury' documents were found in Sanity.");
    }

    return latestData;
  } catch (err) {
    console.error("Failed to fetch Inluxury data from Sanity:", err);
    return null;
  }
}
