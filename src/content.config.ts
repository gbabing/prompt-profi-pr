import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const prompts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prompts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'Unterrichtsvorbereitung',
      'Kreativer Unterricht',
      'Arbeitsorganisation',
      'Differenzierung',
      'Feedback',
      'Elternkommunikation',
    ]),
    stage: z.enum(['Grundschule', 'Sek I', 'Sek II', 'Berufsschule', 'Alle']),
    subject: z.string(),
    hint: z.string().optional(),
    prompt: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { prompts };
