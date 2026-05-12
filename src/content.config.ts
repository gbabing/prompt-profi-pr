import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const prompts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prompts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'Krisenkommunikation',
      'Pressemitteilungen',
      'Strategische Konzeption',
      'Social Media',
      'Stakeholder-Mapping',
      'Recherche & Analyse',
      'Sprachliche Qualitätskontrolle',
    ]),
    phase: z.enum(['Strategie', 'Umsetzung', 'Auswertung']),
    subject: z.string(),
    hint: z.string().optional(),
    prompt: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { prompts };