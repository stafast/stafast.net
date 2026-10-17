import { defineStafastConfig } from "@/config/schema.ts";

export default defineStafastConfig({
    site: {
        name: "stafast",
        url: "https://stafast.net",
        language: "de",
        locale: "de_DE",
    },
    person: {
        name: "André Stafast",
        sameAs: [
            "https://www.instagram.com/sanjoelstak/",
            "https://www.instagram.com/andre.stafast/",
        ],
    },
    seo: {
        title: "stafast — Softwareentwicklung mit technischer Tiefe",
        titleTemplate: "%s — stafast",
        description:
            "stafast steht für Softwareentwicklung und technische Beratung aus Kiel. André Stafast entwickelt wartbare Webanwendungen mit Schwerpunkt Frontend.",
        defaultImage: "/og-stafast.png",
    },
    blog: {
        title: "Persönlicher Blog",
        description:
            "Gedanken und Erfahrungen zu Softwareentwicklung, Eventbranche, Laufen und allem, was mich sonst beschäftigt – persönlich und direkt.",
        introduction:
            "Was mich beschäftigt, landet früher oder später hier. Mal geht es um Softwareentwicklung, mal um die Eventbranche, das Laufen oder etwas völlig anderes. Manches ist praktisch, manches persönlich – und manches möchte ich einfach festhalten.",
        tagPages: {
            astro: {
                title: "Astro: Grundlagen und Performance",
                description:
                    "Astro im Blog: Grundlagen, Codebeispiele und Prefetch für schnelle Websites mit wenig JavaScript. Meine Erfahrungen aus der Webentwicklung.",
            },
            ausrustung: {
                title: "Meine Ausrüstung fürs Laufen im Winter",
                description:
                    "Laufbekleidung und Zubehör für kalte, dunkle Tage: meine Erfahrungen mit reflektierender Kleidung, Stirnlampe und weiterer Winterlauf-Ausrüstung.",
            },
            booker: {
                title: "Artist Booking und Festivalorganisation",
                description:
                    "Meine Erfahrungen im Artist Booking: Künstlerauswahl, Gagen, Running Order und die Zusammenarbeit mit Artists und Agenturen bei Festivals.",
            },
            calcsize: {
                title: "CSS calc-size(): Syntax und Beispiele",
                description:
                    "Beiträge zur CSS-Funktion calc-size(): Berechnungen mit intrinsischen Größen wie auto und fit-content sowie Beispiele für Layouts und Animationen.",
            },
            chatgpt: {
                title: "ChatGPT: Werbung und Ads Manager",
                description:
                    "Beiträge zu ChatGPT Ads: Werbung im Gesprächskontext, der Ads Manager und meine Einordnung der Chancen und Grenzen für Unternehmen.",
            },
            cloudflare: {
                title: "Cloudflare und Edge-Computing",
                description:
                    "Wie ich Cloudflare für meine Website nutze und was Edge-Computing bedeutet: Beiträge zur verteilten Auslieferung von Inhalten und Web-Performance.",
            },
            "color-schema": {
                title: "CSS-Farbschemata: Light und Dark Mode",
                description:
                    "Helle und dunkle Farbschemata in CSS: Beiträge zu color-scheme und light-dark(), mit Beispielen für einen einfachen Wechsel der Farben.",
            },
            css: {
                title: "CSS: Funktionen und praktische Beispiele",
                description:
                    "Praktische CSS-Beispiele zu calc-size() und light-dark(): intrinsische Größen berechnen, Layouts animieren und helle oder dunkle Farben gestalten.",
            },
            edgecomputing: {
                title: "Edge-Computing verständlich erklärt",
                description:
                    "Was Edge-Computing bedeutet, wie es sich von klassischem Hosting unterscheidet und warum nahe Serverstandorte bei der Web-Performance helfen können.",
            },
            event: {
                title: "Eventbranche und Veranstaltungsorganisation",
                description:
                    "Einblicke in die Eventbranche: Festivalorganisation, Künstlerbooking und die wirtschaftlichen Herausforderungen von Veranstaltungen aus meiner Perspektive.",
            },
            festival: {
                title: "Festivals: Organisation und Branchenkrise",
                description:
                    "Meine Beiträge über Festivals: Erfahrungen hinter den Kulissen von Love Explosion und eine Einordnung der Kosten, Ticketverkäufe und Branchenkrise.",
            },
            font: {
                title: "Webfonts und Fontsource",
                description:
                    "Webfonts mit Fontsource einbinden und vorladen: Beiträge über Font-Preloading, die Darstellung von Schriften und die Performance von Websites.",
            },
            framework: {
                title: "Web-Frameworks: Einstieg in Astro",
                description:
                    "Beiträge zu Web-Frameworks am Beispiel von Astro: Islands-Architektur, Komponenten, Markdown und praktische Codebeispiele für schnelle Websites.",
            },
            google: {
                title: "Google: Suchtrends und Jahresrückblick",
                description:
                    "Google-Suchtrends im Rückblick: Ereignisse, Serien, Persönlichkeiten und häufige Fragen, deren Suchinteresse im Laufe des Jahres stark gestiegen ist.",
            },
            javascript: {
                title: "JavaScript und Astro-Webentwicklung",
                description:
                    "JavaScript in der Webentwicklung mit Astro: Beiträge über Komponenten, Daten aus Markdown und APIs sowie schnelle Websites mit wenig JavaScript.",
            },
            kiel: {
                title: "Laufen in Kiel: Erfahrungen beim Kiellauf",
                description:
                    "Meine Lauferfahrungen in Kiel: persönliche Eindrücke vom Kiellauf, der Strecke entlang der Förde und der Stimmung zwischen Start und Ziel.",
            },
            kiellauf: {
                title: "Kiellauf: Mein Laufbericht aus Kiel",
                description:
                    "Mein Kiellauf und die Erfahrungen auf der Strecke: 10,4 Kilometer, Hitze, Steigungen und Unterstützung durch das Publikum in Kiel.",
            },
            laufen: {
                title: "Laufen, Spaß und Schmerzen",
                description:
                    "Laufberichte aus Kiel und Lübeck sowie meine Erfahrungen mit Ausrüstung für den Winter. Vom Wettkampf bis zum Lauf bei Kälte und Dunkelheit.",
            },
            "love-explosion": {
                title: "Love Explosion: Hinter den Kulissen",
                description:
                    "Meine Erfahrungen beim Love Explosion Festival: vom Website-Projekt zum Artist Management, mit Einblicken in Booking, Organisation und Festivalalltag.",
            },
            lubeck: {
                title: "Laufen in Lübeck: Mein 10-km-Lauf",
                description:
                    "Persönliche Lauferfahrungen in Lübeck: mein 10-km-Lauf beim Stadtwerke Lübeck Marathon, die Stimmung in der Altstadt und Eindrücke von der Organisation.",
            },
            mac: {
                title: "Mac-Apps für meinen Arbeitsalltag",
                description:
                    "Meine macOS-Apps im Alltag: Beiträge über Programme für Zwischenablage, Dateisuche, Passwortverwaltung und Bildoptimierung – und wofür ich sie nutze.",
            },
            marketing: {
                title: "Marketing: ChatGPT als Werbekanal",
                description:
                    "ChatGPT Ads aus Marketing-Perspektive: Gesprächskontext, Anzeigen, Landingpages und Erfolgsmessung. Meine Einordnung für Unternehmen und ihre Kampagnen.",
            },
            nacht: {
                title: "Laufen im Dunkeln: Meine Ausrüstung",
                description:
                    "Was ich beim Laufen im Dunkeln nutze: reflektierende Kleidung, Stirnlampe und weitere Ausrüstung. Persönliche Erfahrungen aus meinen Winterläufen.",
            },
            performance: {
                title: "Web-Performance: Schnellere Websites",
                description:
                    "Beiträge zur Web-Performance: Prefetch, Font-Preloading und Edge-Computing. Praktische Beispiele und Erfahrungen mit schnelleren Websites.",
            },
            prefetch: {
                title: "Prefetch in Astro: Seiten vorab laden",
                description:
                    "Prefetch in Astro aktivieren und konfigurieren: Beiträge über Lade-Strategien, data-astro-prefetch und schnellere Navigation zwischen Seiten.",
            },
            preload: {
                title: "Font-Preloading für schnellere Websites",
                description:
                    "Schriften mit preload vorab laden: praktische Beispiele mit Fontsource und Erfahrungen zur Darstellung von Webfonts und zur Website-Performance.",
            },
            sport: {
                title: "Laufberichte: Wettkämpfe in Kiel und Lübeck",
                description:
                    "Meine persönlichen Laufberichte aus Kiel und Lübeck: Erlebnisse bei Laufveranstaltungen, Herausforderungen auf der Strecke und die Stimmung im Ziel.",
            },
            technologie: {
                title: "Technologie: Webentwicklung und Tools",
                description:
                    "Beiträge über Webentwicklung und digitale Tools: Astro, CSS, Web-Performance, Edge-Computing, Mac-Apps und ChatGPT – mit Beispielen und eigenen Erfahrungen.",
            },
            trends: {
                title: "Suchtrends: Was Menschen beschäftigt",
                description:
                    "Einblicke in die Suchtrends von Google: welche Ereignisse, Themen und Fragen stark an Interesse gewonnen haben und was sich im Jahresrückblick zeigt.",
            },
            werbung: {
                title: "Werbung in ChatGPT: Anzeigen im Gespräch",
                description:
                    "Werbung in ChatGPT und ihre Besonderheiten: Anzeigen im Gesprächskontext, der Ads Manager und die Abgrenzung zur eigentlichen Antwort.",
            },
            winter: {
                title: "Laufen im Winter: Kleidung und Ausrüstung",
                description:
                    "Meine Erfahrungen beim Laufen im Winter: Kleidung für kalte Tage, reflektierende Ausrüstung für dunkle Strecken und praktische Tipps aus meinem Alltag.",
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
                { title: "Blog", url: "/blog/" },
                // { title: "Beratung", url: "/beratung/" },
                // { title: "Astro Entwicklung", url: "/astro-entwicklung/" },
            ],
        },
        {
            title: "Leistungen",
            items: [
                { title: "Webentwicklung", url: "/webentwicklung/" },
                {
                    title: "Individuelle Anwendungen",
                    url: "/webentwicklung/",
                },
                {
                    title: "Festival- und Veranstaltungswebsites",
                    url: "/webentwicklung/",
                },
                { title: "Vue-Entwicklung", url: "/webentwicklung/" },
                // { title: "Beratung", url: "/beratung/" },
                // { title: "Astro Entwicklung", url: "/astro-entwicklung/" },
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
