import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getPlayerStats } from "../../api/player";
import { IoArrowBack } from "react-icons/io5";
import Banner from "../../components/Banner";
export const Route = createFileRoute("/users/$name")({
  component: User,
});

function User() {
  const { name } = Route.useParams();

  const { data, isError, isPending, error } = useQuery({
    queryKey: ["users", name],
    queryFn: () => getPlayerStats(name),
  });

  if (isPending) return <h2>Loading ... </h2>;
  if (isError) return <h2>{error.toString()}</h2>;

  return (
    <section className="container mx-auto mt-8 px-2">
      <Link
        to="/"
        className="mt-8 flex w-fit items-center rounded-md bg-primary-400 px-8 py-2 text-2xl"
      >
        <IoArrowBack />
        Back{" "}
      </Link>

      <Banner summary={data.summary} />

      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.stats.pc?.competitive?.career_stats["all-heroes"].map((el) => {
          return (
            <li key={el.label} className="rounded-md bg-slate-700 p-4">
              <div className="">
                <h3 className="text-2xl font-semibold text-primary-700">
                  {el.label}
                </h3>
                <ul>
                  {el.stats.map((stat, i) => {
                    return (
                      <li key={`${stat.label}${i}`}>
                        <p className="text-slate-400">{stat.label}</p>
                        <p>{stat.value}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
