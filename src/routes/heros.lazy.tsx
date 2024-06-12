import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import axios from "axios";
import SmallCard from "../components/SmallCard";

import { smallHeroArraySchema } from "../types/hero";

export const Route = createLazyFileRoute("/heros")({
  component: Heros,
});

const getHeros = async () => {
  const response = await axios.get("https://overfast-api.tekrop.fr/heroes");
  const validatedHeros = smallHeroArraySchema.safeParse(response.data);

  if (!validatedHeros.success) {
    throw new Error(validatedHeros.error.toString());
  }

  const heros = validatedHeros.data;
  return heros;
};

function Heros() {
  const heros = useQuery({ queryKey: ["heros"], queryFn: getHeros });

  if (heros.isPending) return <h2>Loading ... </h2>;
  if (heros.isError) return <h2>Error</h2>;

  return (
    <ul className="container mx-auto my-4 grid grid-cols-3 gap-4">
      {heros.data.map((hero) => {
        return <SmallCard hero={hero} key={hero.name} />;
      })}
    </ul>
  );
}
