import { getCollection } from "astro:content";

const publicationTime = Date.now();

export async function getBlogPosts({
    includeUnpublished = import.meta.env.DEV,
}: { includeUnpublished?: boolean } = {}) {
    const posts = await getCollection(
        "blog",
        ({ data }) =>
            includeUnpublished ||
            (!data.draft && data.published.valueOf() <= publicationTime),
    );

    return posts.sort(
        (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
    );
}
