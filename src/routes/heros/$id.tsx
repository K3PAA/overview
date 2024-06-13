import { Link, createFileRoute } from "@tanstack/react-router";
import { getSingleHero } from "../../api/heros";
import { IoArrowBack } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/heros/$id")({
  component: Hero,
});

function Hero() {
  const { id } = Route.useParams();
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["heros", id],
    queryFn: () => getSingleHero(id),
  });

  if (isPending) return <h2>Loading ... </h2>;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <section className="container mx-auto mt-4 rounded-md">
      <div className="mt-8 flex gap-4 rounded-xl bg-secondary-400 p-4 shadow-md">
        <img src={data.portrait} alt={data.name} className="" />
        <div className="">
          <div className="flex justify-between">
            <h1 className="text-6xl font-semibold text-slate-800">
              {data.name}
            </h1>
            <p className="text-xl text-slate-700">{data.role}</p>
          </div>
          <div className="flex flex-col">
            <p className="mt-8 text-2xl text-slate-300">{data.description}</p>

            <div className="mt-4 flex flex-col text-2xl text-slate-700">
              <div className="flex gap-4">
                <p>
                  Health <span>{data.hitpoints.health}</span>
                </p>
                <p>
                  Armor <span>{data.hitpoints.armor}</span>
                </p>
              </div>
              <div className="flex gap-4">
                <p>
                  Shields <span>{data.hitpoints.shields}</span>
                </p>
                <p>
                  Total <span>{data.hitpoints.total}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
