import type { APIRoute } from "astro";
import { getBlogPosts } from "@lib/blog";
import stafastConfig from "../../stafast.config.ts";

export const GET: APIRoute = async ({ site }) => {
    const siteUrl = site ?? new URL(stafastConfig.site.url);
    const posts = await getBlogPosts({ includeUnpublished: false });

    const link = (title: string, path: string, description: string) => {
        const label = title
            .replaceAll("\\", "\\\\")
            .replaceAll("[", "\\[")
            .replaceAll("]", "\\]");

        return `- [${label}](${new URL(path, siteUrl)}): ${description.replace(/\s+/g, " ")}`;
    };

    const content = [
        `# ${stafastConfig.site.name}`,
        "",
        `> ${stafastConfig.seo.description}`,
        "",
        "Die Website ist deutschsprachig. Berufliche Angaben stehen unter „Über mich“ und „Arbeit“. Der persönliche Blog behandelt Softwareentwicklung, Eventbranche, Laufen und weitere Themen. Ältere Beiträge spiegeln ihren jeweiligen Veröffentlichungsstand wider.",
        "",
        "## Website",
        "",
        link(
            "Startseite",
            "/",
            "Profil, Schwerpunkte und Einblicke in die Arbeit von André Stafast.",
        ),
        link(
            "Über mich",
            "/ueber-mich/",
            "Persönlicher Hintergrund, Weg in die Softwareentwicklung und Grundsätze der Zusammenarbeit.",
        ),
        link(
            "Arbeit",
            "/arbeit/",
            "Berufserfahrung in Frontend- und Full-Stack-Entwicklung, Selbstständigkeit, technischer Beratung und Veranstaltungsleitung.",
        ),
        link(
            "Kontakt",
            "/kontakt/",
            "Kontaktmöglichkeiten für Softwareprojekte, technische Beratung und fachlichen Austausch.",
        ),
        "",
        "## Blog",
        "",
        link(
            stafastConfig.blog.title,
            "/blog/",
            "Übersicht aller veröffentlichten Beiträge, neueste zuerst.",
        ),
        ...posts.map((post) =>
            link(post.data.title, `/blog/${post.id}/`, post.data.description),
        ),
        "",
        "## Optional",
        "",
        link(
            "Blogthemen",
            "/blog/tags/",
            "Thematische Übersicht der Blogbeiträge.",
        ),
        link(
            "RSS-Feed",
            "/rss.xml",
            "Veröffentlichte Blogbeiträge mit Beschreibung und Veröffentlichungsdatum.",
        ),
        link("Impressum", "/impressum/", "Angaben zum Betreiber der Website."),
        link(
            "Datenschutzhinweis",
            "/datenschutz/",
            "Informationen zur Verarbeitung personenbezogener Daten auf der Website.",
        ),
        "",
    ].join("\n");

    return new Response(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};
