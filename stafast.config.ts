import { defineStafastConfig } from "./src/config/schema";

export default defineStafastConfig({
    site: {
        name: "André Stafast",
        url: "https://stafast.net",
        base: "/",
        language: "de",
        locale: "de_DE",
        timezone: "Europe/Berlin",
    },
    seo: {
        title: "André Stafast — Softwareentwicklung mit technischer Tiefe",
        titleTemplate: "%s — André Stafast",
        description:
            "André Stafast ist Software Engineer aus Kiel und entwickelt komplexe digitale Produkte mit technischer Tiefe, klarer Struktur und guter Benutzerführung.",
        defaultImage: undefined,
        robots: {
            index: true,
            follow: true,
        },
    },
});
