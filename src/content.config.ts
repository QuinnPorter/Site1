import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const localized = z.object({ en: z.string(), es: z.string() });

const testimonials = defineCollection({
  loader: file('./src/content/testimonials.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: localized,
    rating: z.number().min(1).max(5).default(5),
    featured: z.boolean().default(false),
    lang: z.enum(['en', 'es']).default('en'),
    quote: localized,
  }),
});

const services = defineCollection({
  loader: file('./src/content/services.json'),
  schema: z.object({
    id: z.string(),
    audience: z.enum(['individual', 'business']),
    icon: z.string(),
    order: z.number().default(0),
    title: localized,
    summary: localized,
    href: z.string(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      author: z.string().default('JBS Corp'),
      lang: z.enum(['en', 'es']).default('en'),
      category: z.string().default('Tax'),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { testimonials, services, articles };
