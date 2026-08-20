import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { toSlug } from "@lib/toSlug.ts";

const dateWithoutTimezonePattern =
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?$/;

const frontmatterDateSchema = z.preprocess(
    (value) =>
        typeof value === "string" && dateWithoutTimezonePattern.test(value)
            ? `${value}Z`
            : value,
    z.coerce.date(),
);

const tagSchema = z
    .string()
    .trim()
    .min(1, "Tags must not be empty.")
    .refine((tag) => toSlug(tag).length > 0, {
        message: "Tags must contain at least one URL-safe character.",
    });

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
                published: frontmatterDateSchema,
                updated: frontmatterDateSchema.optional(),
                tags: z
                    .array(tagSchema)
                    .min(1)
                    .max(8)
                    .transform((tags) => [...new Set(tags)]),
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
