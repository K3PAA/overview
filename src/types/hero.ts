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
