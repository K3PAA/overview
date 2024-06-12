import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

import SmallCard from "../../components/SmallCard";
import { getHeros } from "../../api/heros";

export const Route = createLazyFileRoute("/heros/")({
  component: Heros,
});

function Heros() {
  const heros = useQuery({ queryKey: ["heros"], queryFn: getHeros });
  const [query, setQuery] = useState("");

  if (heros.isPending) return <h2>Loading ... </h2>;
  if (heros.isError) return <h2>Error</h2>;

  return (
    <section className="container mx-auto mt-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="query_hero" className="text-3xl">
          Find hero by name
        </label>
        <input
          type="text"
          id="query_hero"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-1/2 bg-slate-500 p-4 text-xl"
          placeholder="Rein..."
        />
      </div>

      <ul className="my-4 grid grid-cols-3 gap-4">
        {heros.data
          .filter((hero) =>
            hero.name.toLowerCase().startsWith(query.toLowerCase()),
          )
          .map((hero) => {
            return <SmallCard hero={hero} key={hero.key} />;
          })}
      </ul>
    </section>
  );
}
