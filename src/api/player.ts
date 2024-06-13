import axios from "axios";
import { userSchema } from "../types/player";

export const getPlayerStats = async (user: string) => {
  const response = await axios.get(
    `https://overfast-api.tekrop.fr/players/${user}`,
  );

  console.log(response.data);
  const validatedUser = userSchema.safeParse(response.data);

  if (!validatedUser.success) {
    throw new Error(validatedUser.error.toString());
  }
  const data = validatedUser.data;
  return data;
};
