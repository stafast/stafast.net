import type { APIRoute } from "astro";
import stafastConfig from "../../stafast.config.ts";

export const GET: APIRoute = ({ site }) => {
    const siteUrl = site ?? new URL(stafastConfig.site.url);
    const sitemapUrl = new URL("sitemap-index.xml", siteUrl);

    return new Response(
        [`User-agent: *`, `Allow: /`, `Sitemap: ${sitemapUrl}`, ``].join("\n"),
        {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            },
        },
    );
};
