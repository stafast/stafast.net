export const seo = {
    title: "Berufserfahrung in der Softwareentwicklung",
    description:
        "André Stafast aus Kiel: Erfahrung in Frontend- und Full-Stack-Entwicklung, E-Commerce, technischer Beratung sowie Projekt- und Veranstaltungsleitung.",
};

export const hero = {
    eyebrow: "Arbeit",
    heading: "Softwareentwicklung und Projektverantwortung.",
    description:
        "Mein Schwerpunkt liegt heute auf der Frontend-Entwicklung komplexer Webanwendungen. Mein Weg führt durch Full-Stack-Entwicklung und E-Commerce. Selbständige Projekte, technische Beratung und Erfahrung in der Projekt- und Veranstaltungsleitung ergänzen meine Arbeit.",
};

interface ExperienceEntry {
    id: string;
    organization: string;
    role: string;
    period: string;
    description: string;
    highlights: string[];
}

interface ExperienceSection {
    id: string;
    title: string;
    description: string;
    entries: ExperienceEntry[];
}

export const experience: ExperienceSection[] = [
    {
        id: "softwareentwicklung",
        title: "Softwareentwicklung",
        description:
            "Von Websites und Online-Shops bis zu komplexen Anwendungen: Ich verbinde meinen heutigen Frontend-Schwerpunkt mit langjähriger Erfahrung im gesamten Web-Stack.",
        entries: [
            {
                id: "trinext",
                organization: "TriNext GmbH",
                role: "Frontend Engineer",
                period: "Seit Juli 2025",
                description:
                    "Bei TriNext entwickle ich Nextfolder weiter, eine Webanwendung zur Bearbeitung und Strukturierung von Dokumenten im Bankenumfeld. Mein Schwerpunkt liegt auf technischer Konzeption, Frontend-Architektur und wartbaren Benutzeroberflächen.",
                highlights: [
                    "Konzeption und Entwicklung neuer Funktionen und Produktbereiche mit Blick auf Benutzerfreundlichkeit und Performance.",
                    "Mitgestaltung der Frontend-Architektur, technischer Entscheidungen und Entwicklungsstandards.",
                    "Entwicklung wiederverwendbarer UI-Komponenten, komplexer Benutzeroberflächen und interner Anwendungen.",
                    "Enge Zusammenarbeit mit Produktmanagement, Design und Backend bei der Analyse von Anforderungen und der Umsetzung technischer Lösungen.",
                ],
            },
            {
                id: "intedia",
                organization: "intedia GmbH",
                role: "Software Developer · freiberuflich, später in Festanstellung",
                period: "September 2013–Juni 2025",
                description:
                    "Ab September 2013 arbeitete ich freiberuflich mit intedia an E-Commerce-Projekten, zunächst mit Magento und später mit Shopware. Von Oktober 2020 bis Juni 2025 war ich dort in Festanstellung tätig, mit Schwerpunkt auf Shopware 5 und 6 sowie Frontend-Entwicklung.",
                highlights: [
                    "Konzeption, Entwicklung und Optimierung individueller E-Commerce-Lösungen sowie langfristige Betreuung bestehender Kundenprojekte.",
                    "Entwicklung von Frontend-Anwendungen und Komponenten mit Vue.js.",
                    "Implementierung und Betreuung von Consent-Management und Tracking, unter anderem mit Google Analytics und Google Tag Manager.",
                    "Technische Suchmaschinenoptimierung, Performance-Optimierung und Abstimmung individueller Anforderungen mit Kunden.",
                ],
            },
            {
                id: "inmedium",
                organization: "INMEDIUM GmbH",
                role: "Full Stack Developer",
                period: "Februar 2015–Oktober 2020",
                description:
                    "Bei INMEDIUM entwickelte und betreute ich Websites und individuelle Webanwendungen im Frontend und Backend. Der Schwerpunkt lag auf TYPO3 sowie Anwendungen mit PHP und Laravel.",
                highlights: [
                    "Konzeption, Entwicklung und Optimierung von TYPO3-Websites und kundenspezifischen Extensions.",
                    "Entwicklung individueller Webanwendungen und Planung der zugehörigen Datenbankstrukturen.",
                    "Technische Betreuung, Wartung und Weiterentwicklung bestehender Kundenprojekte.",
                ],
            },
        ],
    },
    {
        id: "selbststaendigkeit",
        title: "Selbstständigkeit und Beratung",
        description:
            "Ich begleite digitale Projekte von der ersten Anforderung bis zur laufenden Betreuung und unterstütze bei technischen und organisatorischen Fragen.",
        entries: [
            {
                id: "andre-stafast",
                organization: "André Stafast",
                role: "Software Engineer & Consultant · selbständig",
                period: "Seit Februar 2013",
                description:
                    "Ich konzipiere, entwickle und betreue Websites, Online-Shops und individuelle Webanwendungen. Gemeinsam mit meinen Kunden analysiere ich Anforderungen und erarbeite Lösungen, die zu ihren Abläufen und technischen Rahmenbedingungen passen.",
                highlights: [
                    "Technische Beratung, Planung und Umsetzung digitaler Projekte sowie Wartung und kontinuierliche Weiterentwicklung bestehender Anwendungen.",
                    "Beratung von Festivals und Veranstaltungen zu organisatorischen Strukturen, Prozessen und technischen Lösungen.",
                    "Projektbezogene Übernahme von Artist Booking und Artist Relations.",
                ],
            },
        ],
    },
    {
        id: "projekte-und-veranstaltungen",
        title: "Projekte und Veranstaltungen",
        description:
            "In Community-Projekten und der Festivalorganisation habe ich Teams aufgebaut, Abläufe koordiniert und Verantwortung für die Umsetzung übernommen.",
        entries: [
            {
                id: "love-explosion",
                organization: "Love Explosion Festival",
                role: "Digital Projects & IT, Artist Management und Veranstaltungsleitung",
                period: "August 2021–November 2025",
                description:
                    "Mein Einstieg in die Festivalorganisation war 2021 die Website und die digitale Infrastruktur. Für die erste Ausgabe im Juni 2022 übernahm ich das Stage Management der Techno Stage. Ab Juli 2022 verantwortete ich das Artist Management und die Bühnenkoordination und war an der ganzjährigen Planung und Veranstaltungsleitung beteiligt.",
                highlights: [
                    "Artist Management für über 60 Artists: Booking, Vertragsabwicklung, Abrechnung, Logistik und Betreuung.",
                    "Planung der Running Order für drei Stages sowie Leitung und Koordination der Stage Manager und des Backstage-Bereichs.",
                    "Mitverantwortung für die Organisation eines mehrtägigen Festivals mit über 4.500 Gästen, einschließlich Bühnenplanung und Geländeplänen mit AutoCAD und GPS-Daten.",
                    "Verantwortung für Ticketing und Ticketshop sowie Umsetzung von Performance Marketing und Social Ads.",
                    "Entwicklung und Betreuung der Festival-Website und einer Timetable-Anwendung sowie Administration von Hosting, Cloud-Diensten, E-Mail und weiterer IT-Infrastruktur.",
                ],
            },
            {
                id: "just-aion",
                organization: "Just Aion",
                role: "Inhaber & Projektleiter",
                period: "Februar 2010–März 2017",
                description:
                    "Ich habe ein privates Online-Gaming- und Community-Projekt rund um Aion mit über 100.000 Community-Mitgliedern aufgebaut und geleitet. Dazu gehörten die Weiterentwicklung des Projekts und die Koordination eines Teams von zeitweise bis zu 20 Personen.",
                highlights: [
                    "Planung, Organisation und Priorisierung neuer Funktionen sowie Koordination der technischen und organisatorischen Umsetzung.",
                    "Aufbau und Koordination des Teams sowie Entwicklung von Community-, Support- und Moderationsstrukturen.",
                    "Konzeption und Entwicklung von Websites, Webanwendungen und Forensystemen sowie Gestaltung der Benutzeroberflächen.",
                ],
            },
        ],
    },
];
