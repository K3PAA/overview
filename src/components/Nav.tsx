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
      <ul className="flex gap-4">
        {routes.map((route) => {
          return (
            <li>
              <Link key={route.path} to={route.path}>
                {({ isActive }) => {
                  return (
                    <span
                      className={`${isActive ? "border-b-primary-400 border-b-4 text-slate-600" : "text-slate-300"} text-xl font-semibold uppercase transition-all duration-300 hover:text-slate-600`}
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
