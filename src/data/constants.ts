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
export const defaultPageDescription: string = 'André Stafast, Software-Entwickler aus Neumünster, spezialisiert auf Frontend & E-Commerce. Nebenberuflich engagiert in der Festival-Organisation und leidenschaftlicher Läufer.'

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
