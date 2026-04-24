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

// const project = defineCollection({
//   loader: file('src/data/projects.json'),
//   schema: z.object({
//     title: z.string(),
//     description: z.string().optional(),
//     image: z.string(),
//     slug: z.string(),
//     IsIt: z.string(),
//     githubURL: z.string(),
//     liveSiteURL: z.string()
//   })
// });


// const websites = defineCollection({
//   loader: file('src/data/websites.json'),
//   schema: z.object({
//     title: z.string(),
//     description: z.string().optional(),
//     image: z.string(),
//     slug: z.string(),
//     IsIt: z.string(),
//     githubURL: z.string(),
//     liveSiteURL: z.string()
//   })
// });

// const work = defineCollection({
//   loader: file('src/data/work.json'),
//   schema: z.object({ 
//     interprise: z.string(),
//     title: z.string(),
//     description: z.string().optional(),
//     image: z.string(),
//     slug: z.string(),
//     responsability: z.string(),
//     learning: z.string(),
//     date: z.string()
//   })
// });

// const games = defineCollection({
//   loader: file('src/data/games.json'),
//   schema: z.object({
//     title: z.string(),
//     description: z.string().optional(),
//     image: z.string(),
//     slug: z.string(),
//     IsIt: z.string(),
//     githubURL: z.string(),
//     liveSiteURL: z.string()
//   })
// });

const notes = defineCollection({
  loader: file('src/data/notes.json'),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    IsIt: z.string(),
  })
});



export const collections = { notes, blog };