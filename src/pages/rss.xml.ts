import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getBlogPosts } from "@lib/blog";
import stafastConfig from "../../stafast.config.ts";

export const GET: APIRoute = async ({ site }) => {
    const posts = await getBlogPosts({ includeUnpublished: false });

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
