import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({
        base: "./src/data/blog",
        pattern: "**/*.md",
    }),
    schema: ({ image }) =>
        z
            .object({
                title: z.string().trim().min(1),
                description: z.string().trim().min(70),
                slug: z
                    .string()
                    .trim()
                    .regex(
                        /^[a-z0-9]+(?:[/-][a-z0-9]+)*$/,
                        "Slugs may only contain lowercase letters, numbers, hyphens, and slashes.",
                    )
                    .optional(),
                teaser: image().optional(),
                teaserAlt: z.string().trim().min(1).optional(),
                published: z.coerce.date(),
                updated: z.coerce.date().optional(),
                tags: z.array(z.string()),
                draft: z.boolean().default(false),
                canonicalUrl: z.url().optional(),
            })
            .superRefine((post, context) => {
                if (post.teaser && !post.teaserAlt) {
                    context.addIssue({
                        code: "custom",
                        message: "teaserAlt is required when teaser is set.",
                        path: ["teaserAlt"],
                    });
                }

                if (post.updated && post.updated < post.published) {
                    context.addIssue({
                        code: "custom",
                        message: "updated must not be earlier than published.",
                        path: ["updated"],
                    });
                }
            }),
});

export const collections = { blog };
