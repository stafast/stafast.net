import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import stafastConfig from "../../stafast.config.ts";

export const GET: APIRoute = async ({ site }) => {
    const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
        (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
    );

    return rss({
        title: `${stafastConfig.blog.title} – ${stafastConfig.site.name}`,
        description: stafastConfig.blog.description,
        site: site ?? stafastConfig.site.url,
        customData: `<language>${stafastConfig.site.language}</language>`,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.published,
            link: `/blog/${post.id}/`,
            categories: post.data.tags,
        })),
    });
};
