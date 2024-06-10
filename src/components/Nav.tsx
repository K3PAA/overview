import { Link } from "@tanstack/react-router";

const Nav = () => {
  const routes = [
    {
      path: "/",
      text: "home",
    },
    {
      path: "/heros",
      text: "Heros",
    },
  ];

  return (
    <nav>
      <ul className="mt-4 flex gap-4 sm:mt-0">
        {routes.map((route) => {
          return (
            <li>
              <Link key={route.path} to={route.path}>
                {({ isActive }) => {
                  return (
                    <span
                      className={`${isActive ? "border-b-4 border-b-primary-400 text-slate-800" : "text-slate-500 hover:border-b-2"} text-xl font-semibold uppercase transition-all duration-300 hover:border-b-primary-400 hover:text-slate-600`}
                    >
                      {route.text}
                    </span>
                  );
                }}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
