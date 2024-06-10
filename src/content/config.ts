import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    excerpt: z.string(),
    href: z.string(),
    publishedDate: z.string(),
    category: z.string(),
  }),
})

export const collections = {
  blog: blogCollection,
}
