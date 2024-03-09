import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        href: z.string(),
        // description: z.string(),
        publishedDate: z.string(),
        category: z.string(),
        // image: z.object({
        //     path: z.string(),
        //     alt: z.string()
        // })
    })
})

export const collections = {
    blog: blogCollection
}