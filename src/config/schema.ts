import {z} from "astro/zod";

export const socialPlatforms = [
    "instagram",
    "linkedin",
    "spotify",
    "apple-music",
    "youtube",
    "tiktok",
    "facebook",
    "threads",
    "x",
    "whatsapp",
    "soundcloud",
    "resident-advisor",
    "viberate",
    "beatport",
    "bluesky",
    "discogs",
    "mixcloud",
    "bandcamp",
    "email",
] as const;

export type SocialPlatform = (typeof socialPlatforms)[number];

export const socialPlatformLabels: Record<SocialPlatform, string> = {
    instagram: "Instagram",
    spotify: "Spotify",
    "apple-music": "Apple Music",
    linkedin: "LinkedIn",
    youtube: "YouTube",
    tiktok: "TikTok",
    facebook: "Facebook",
    threads: "Threads",
    x: "X",
    whatsapp: "WhatsApp",
    soundcloud: "SoundCloud",
    "resident-advisor": "Resident Advisor",
    viberate: "Viberate",
    beatport: "Beatport",
    bluesky: "Bluesky",
    discogs: "Discogs",
    mixcloud: "Mixcloud",
    bandcamp: "Bandcamp",
    email: "Email",
};

const basePathSchema = z
    .string()
    .trim()
    .regex(/^\/(?:[^/].*)?$/, "Base paths must start with a single slash.")
    .transform((value) => (value === "/" ? value : value.replace(/\/+$/, "")));

const imageSourceSchema = z.union([
    z.url(),
    z.string().regex(/^\//, "Local image paths must start with '/'."),
]);

const socialLinkSchema = z.object({
    platform: z.enum(socialPlatforms),
    url: z.url(),
    label: z.string().min(1).optional(),
});

export const stafastConfigSchema = z.object({
    site: z.object({
        name: z.string().min(1),
        url: z.url(),
        base: basePathSchema.default("/"),
        language: z.string().min(2).default("en"),
        locale: z.string().min(2).default("en_GB"),
        timezone: z.string().min(1).default("Europe/Berlin"),
    }),
    artist: z.object({
        name: z.string().min(1),
        tagline: z.string().min(1),
        location: z.string().min(1).optional(),
        genres: z.array(z.string().min(1)).default([]),
        bookingEmail: z.email().optional(),
    }),
    seo: z.object({
        title: z.string().min(1),
        titleTemplate: z.string().min(1),
        description: z.string().min(1).max(160),
        defaultImage: imageSourceSchema.optional(),
        robots: z
            .object({
                index: z.boolean().default(true),
                follow: z.boolean().default(true),
            })
            .default({index: true, follow: true}),
    }),
    social: z.array(socialLinkSchema).default([]),
});

export type StafastConfig = z.infer<typeof stafastConfigSchema>;
export type StafastConfigInput = z.input<typeof stafastConfigSchema>;

export function defineStafastConfig(config: StafastConfigInput): StafastConfig {
    return stafastConfigSchema.parse(config);
}
