import { z } from "zod";

export const smallHeroSchema = z.object({
  key: z.string(),
  name: z.string(),
  portrait: z.string(),
  role: z.string(),
});

export const smallHeroArraySchema = z.array(smallHeroSchema);

export type SmallHero = z.infer<typeof smallHeroSchema>;
export type SmallHeroArray = z.infer<typeof smallHeroArraySchema>;

export const heroSchema = z.object({
  name: z.string(),
  age: z.number(),
  description: z.string(),
  portrait: z.string(),
  role: z.string(),

  hitpoints: z.object({
    health: z.number(),
    armor: z.number(),
    shields: z.number(),
    total: z.number(),
  }),
});

export type Hero = z.infer<typeof heroSchema>;
