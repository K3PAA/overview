import { Link } from "@tanstack/react-router";
import { SmallHero } from "../types/hero";

type SmallCardProps = {
  hero: SmallHero;
};

const SmallCard = ({ hero }: SmallCardProps) => {
  return (
    <li className="flex flex-col rounded-md border-2 bg-slate-500 transition-colors duration-300 hover:bg-slate-600">
      <img src={hero.portrait} alt={hero.name} />

      <div className="mx-2 my-2 flex items-center justify-between">
        <h3 className="text-2xl text-slate-100">{hero.name}</h3>
        <p className="text-slate-300">{hero.role}</p>
      </div>
      <Link className="block rounded-md bg-primary-400 py-2 text-center text-xl transition-colors duration-300 hover:bg-primary-700 focus:bg-primary-700">
        See more
      </Link>
    </li>
  );
};

export default SmallCard;
