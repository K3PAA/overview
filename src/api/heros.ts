import axios from "axios";
import { smallHeroArraySchema, heroSchema } from "../types/hero";

export const getHeros = async () => {
  const response = await axios.get("https://overfast-api.tekrop.fr/heroes");
  const validatedHeros = smallHeroArraySchema.safeParse(response.data);

  if (!validatedHeros.success) {
    throw new Error(validatedHeros.error.toString());
  }

  const heros = validatedHeros.data;
  return heros;
};

export const getSingleHero = async (key: string) => {
  const response = await axios.get(
    `https://overfast-api.tekrop.fr/heroes/${key}`,
  );

  const validatedHero = heroSchema.safeParse(response.data);
  if (!validatedHero.success) {
    throw new Error(validatedHero.error.toString());
  }

  const hero = validatedHero.data;
  return hero;
};
