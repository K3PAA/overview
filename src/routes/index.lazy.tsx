import { createLazyFileRoute } from "@tanstack/react-router";

import axios from "axios";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    const getPlayerData = async () => {
      const player_id = "TeKrop-2217";
      const response = await axios.get(
        `https://overfast-api.tekrop.fr/players/${player_id}/summary`,
      );

      console.log(response.data);
    };

    getPlayerData();
  }, []);
  return (
    <main className="container mx-auto px-2">
      <img
        src="/over_hero_desktop.png"
        alt=""
        className="absolute inset-0 z-[-100] hidden h-screen w-full object-cover object-right brightness-[0.7] xl:block"
      />

      <img
        src="/over_hero_tablet.png"
        alt=""
        className="absolute inset-0 z-[-100] hidden h-screen w-full object-cover object-center brightness-[0.7] md:block xl:hidden"
      />
      <img
        src="/over_hero_mobile.png"
        alt=""
        className="absolute inset-0 z-[-100] h-screen w-full object-cover object-center brightness-[0.7] md:hidden"
      />

      <section className="mt-2">
        <h1 className="mx-auto w-fit rounded-md px-4 py-2 text-center text-5xl font-bold uppercase">
          Check your <span className="text-secondary-400">stats</span>
        </h1>

        <div className="mx-auto mt-4 w-full max-w-2xl">
          <label htmlFor="" className="text-xl text-white/80">
            Enter your name and hash
          </label>
          <div className="flex">
            <input
              type="text"
              className="w-full rounded p-4 text-slate-800"
              placeholder="Example-2217"
            />
            <button className="btn border-0 bg-primary-400 px-8 uppercase hover:bg-primary-700">
              search
            </button>
          </div>
        </div>

        <section className="mx-auto mt-14 w-full max-w-2xl">
          <h2 className="text-3xl">Last Checks</h2>
        </section>
      </section>
    </main>
  );
}
