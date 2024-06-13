import { z } from "zod";

const userSummary = z.object({
  avatar: z.string(),
  endorsement: z.object({
    frame: z.string(),
    level: z.number(),
  }),
  namecard: z.string(),
  title: z.string(),
  username: z.string(),
});

const allHerosSchema = z.object({
  category: z.string(),
  label: z.string(),
  stats: z.array(
    z.object({
      key: z.string(),
      label: z.string(),
      value: z.number(),
    }),
  ),
});

const statsSchema = z
  .object({
    career_stats: z.object({
      "all-heroes": z.array(allHerosSchema),
    }),
    heroes_comparisons: z.object({}),
  })
  .nullable();

const allStatsSchema = z
  .object({
    competitive: statsSchema,
    quickplay: statsSchema,
  })
  .nullable();

export const userStats = z.object({
  console: allStatsSchema,
  pc: allStatsSchema,
});

export const userSchema = z.object({
  summary: userSummary,
  stats: userStats,
});

export type UserSummary = z.infer<typeof userSummary>;

export type UserSchemaType = z.infer<typeof userSchema>;
