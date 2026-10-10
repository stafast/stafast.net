import { defineStafastConfig } from "@/config/schema.ts";

export default defineStafastConfig({
    site: {
        name: "André Stafast",
        url: "https://stafast.net",
        language: "de",
        locale: "de_DE",
    },
    seo: {
        title: "André Stafast — Softwareentwicklung mit technischer Tiefe",
        titleTemplate: "%s — André Stafast",
        description:
            "André Stafast ist Software Engineer aus Kiel mit Schwerpunkt Frontend. Er entwickelt wartbare Webanwendungen und berät bei der technischen Umsetzung.",
        defaultImage: "/og.png",
    },
    blog: {
        title: "Persönlicher Blog",
        description:
            "Gedanken und Erfahrungen zu Softwareentwicklung, Eventbranche, Laufen und allem, was mich sonst beschäftigt – persönlich und direkt.",
        introduction:
            "Was mich beschäftigt, landet früher oder später hier. Mal geht es um Softwareentwicklung, mal um die Eventbranche, das Laufen oder etwas völlig anderes. Manches ist praktisch, manches persönlich – und manches möchte ich einfach festhalten.",
        tagPages: {
            laufen: {
                title: "Laufen, Spaß und Schmerzen",
                description:
                    "Laufen ist mehr als ein Hobby – es ist eine Leidenschaft.",
            },
        },
    },
    social: [
        {
            platform: "linkedin",
            url: "https://www.linkedin.com/in/stafast/",
        },
        {
            platform: "github",
            url: "https://github.com/stafast",
        },
        {
            platform: "strava",
            url: "https://www.strava.com/athletes/37370368",
        },
    ],
    navigation: [
        { title: "Über mich", url: "/ueber-mich/" },
        { title: "Arbeit", url: "/arbeit/" },
        { title: "Blog", url: "/blog/" },
        { title: "Kontakt", url: "/kontakt/" },
    ],
    footerMenu: [
        {
            title: "Erfahre mehr",
            items: [
                { title: "Über mich", url: "/ueber-mich/" },
                { title: "Arbeit", url: "/arbeit/" },
                { title: "Webentwicklung", url: "/webentwicklung/" },
                { title: "Beratung", url: "/beratung/" },
                { title: "Astro Entwicklung", url: "/astro-entwicklung/" },
            ],
        },
        {
            title: "Ausgewählte Artikel",
            items: [
                {
                    title: "Festival-Krise 2026",
                    url: "/blog/festival-krise-2026-aus-warnzeichen-wird-ein-strukturproblem/",
                },
                {
                    title: "Schriften preloading",
                    url: "/blog/preload-fontsource/",
                },
                {
                    title: "Kiel.Lauf",
                    url: "/blog/kiellauf-2024/",
                },
                { title: "Meine Mac Apps", url: "/blog/mac-apps/" },
                { title: "Alle Blogartikel", url: "/blog/" },
            ],
        },
        {
            title: "Rechtliches",
            items: [
                { title: "Kontakt", url: "/kontakt/" },
                { title: "Datenschutzhinweis", url: "/datenschutz/" },
                { title: "Impressum", url: "/impressum/" },
            ],
        },
    ],
});
