/** @type {import('tailwindcss').Config} */

import typographyPlugin from "@tailwindcss/typography";

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        container: {
            center: true,
            padding: '1.25rem'
        },
        fontFamily: {
            'sans': ['"Noto Sans Variable"', 'ui-sans-serif', 'system-ui']
        },
        extend: {},
    },
    plugins: [typographyPlugin],
}
