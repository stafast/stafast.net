import {defineCollection, z} from "astro:content";
import {glob, file} from "astro/loaders";

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/data/blog",
    }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().min(70),
        teaser: image().optional(),
        teaserAlt: z.string().optional(),
        published: z.coerce.date(),
        updated: z.coerce.date().optional(),
        tags: z.array(z.string())
    })
})

const jobs = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/data/jobs",
    }),
    schema: z.object({
        sortOrder: z.number(),
        company: z.string(),
        url: z.string().url().optional(),
        job: z.string().optional(),
        since: z.coerce.date()
    })
})

const skills = defineCollection({
    loader: file('./src/data/skills.json'),
    schema: z.object({
        id: z.string(),
        url: z.string().optional(),
        icon: z.string().optional()
    })
})

export const collections = {
    blog,
    jobs,
    skills
}