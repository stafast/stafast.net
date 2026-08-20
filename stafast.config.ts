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
            "André Stafast ist Software Engineer aus Kiel und entwickelt komplexe digitale Produkte mit technischer Tiefe, klarer Struktur und guter Benutzerführung.",
        defaultImage: "/og.png",
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
        { title: "Über mich", url: "/" },
        { title: "Projekte", url: "/" },
        { title: "Blog", url: "/" },
        { title: "Kontakt", url: "/" },
    ],
    footerMenu: [
        {
            title: "Leistungen",
            items: [
                { title: "Mehr zu Astro Entwicklung", url: "/kontakt/" },
                { title: "Festivalberatung", url: "/impressum/" },
                { title: "Vue.js Programmierung", url: "/impressum/" },
                { title: "Mehr über Mich", url: "/datenschutz/" },
            ],
        },
        {
            title: "Artikel",
            items: [
                { title: "Festival-Krise 2026", url: "/kontakt/" },
                { title: "Schriften preloading", url: "/impressum/" },
                { title: "Meine Mac Apps", url: "/datenschutz/" },
                { title: "Alle Blogartikel", url: "/datenschutz/" },
            ],
        },
        {
            title: "Rechtliches",
            items: [
                { title: "Impressum", url: "/impressum/" },
                { title: "Datenschutz", url: "/datenschutz/" },
            ],
        },
    ],
});
