import { defineStafastConfig } from "./src/config/schema";

export default defineStafastConfig({
    site: {
        name: "Your DJ Name",
        // Replace this with the canonical production URL before deployment.
        url: "https://example.com",
        base: "/",
        language: "en",
        locale: "en_GB",
        timezone: "Europe/Berlin",
    },
    artist: {
        name: "Your DJ Name",
        tagline: "DJ · Producer · Selector",
        location: "Berlin, Germany",
        genres: ["House", "Techno", "Electronic"],
        bookingEmail: "booking@example.com",
    },
    seo: {
        title: "Your DJ Name — DJ & Producer",
        titleTemplate: "%s — Your DJ Name",
        description:
            "Official website of Your DJ Name — DJ, producer and selector.",
        // Add a 1200 × 630px image in /public when social sharing is set up.
        defaultImage: undefined,
        robots: {
            index: true,
            follow: true,
        },
    }
});
