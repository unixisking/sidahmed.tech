import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

import preact from '@astrojs/preact'

import { remarkReadingTime } from './src/utils/remark-reading-time.mts'

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [tailwind(), mdx(), preact()],
})
