export interface NavigationItem {
    title: string;
    url: string;
}

export interface Links {
    title: string;
    url: string;
}

export const author: string = 'André Stafast';
export const title: string = 'Software-Entwickler';
export const defaultPageDescription: string = 'André Stafast, Software-Entwickler aus Neumünster. Spezialisiert auf Frontend, E-Commerce, Webentwicklung & Backend. Nebenberuflich engagiert in der Festival-Organisation und leidenschaftlicher Läufer.'
export const intro: string = 'Moin 👋, ich bin André Stafast, Entwickler aus Neumünster in Schleswig-Holstein. Hauptberuflich arbeite ich bei <a href="/#trinext">TriNext</a> als Entwickler, nebenbei bin ich als <a href="/#self-employed">Freelancer</a> aktiv und engagiere mich in der Organisation eines <a href="/#koss-events">Musikfestivals</a>.'

export const navigation: NavigationItem[] = [
    { title: 'Home', url: '/' },
    { title: 'Blog', url: '/blog/' },
    { title: 'Kontakt', url: '/kontakt/' }
];

export const links: Links[] = [
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/stafast/' },
    { title: 'GitHub', url: 'https://github.com/stafast' },
    { title: 'Strava', url: 'https://www.strava.com/athletes/37370368' }
];
