import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file, glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.string().date(),
    tags: z.array(z.string()),
    image: z.string(),
    slug: z.string(),
    githubURL: z.string(),
    liveSiteURL: z.string()
  }),
});

const writeups = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/writeups" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.string().date(),
    tags: z.array(z.string()),
    image: z.string(),
    slug: z.string(),
    machineURL: z.string()
  }),
});

const notes = defineCollection({
  loader: file('src/data/notes.json'),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    IsIt: z.string(),
    content: z.array(z.string())
  })
});



export const collections = { notes, blog, writeups };