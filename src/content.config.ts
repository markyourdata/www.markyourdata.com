import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const cases = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/cases" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    description: z.string(),
    tagline: z.string(),
    tag: z.string(),
    logo: z.string(),
    photo: z.string(),
    intro: z.string(),
    outcomes: z.array(z.string()),
    tech: z.array(z.string()),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(["For your team", "In our stack"]),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    heroTitle: z.string(),
    tagline: z.string(),
    description: z.string(),
    photo: z.string(),
    order: z.coerce.number(),
    card: z.string(),
    cta: z.object({ heading: z.string(), text: z.string(), button: z.string() }),
  }),
});

export const collections = { cases, blog, services };
