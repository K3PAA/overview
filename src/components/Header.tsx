import Nav from "./Nav";

const Header = () => {
  return (
    <header className="container mx-auto mt-4 px-2 shadow-sm">
      <div className="relative items-center justify-between rounded-md bg-gradient-to-r from-slate-300/85 via-slate-200/75 to-slate-100/60 p-4 sm:flex">
        <div className="flex cursor-pointer items-center gap-2">
          <img src="./over.png" alt="overwatch logo" className="w-20" />
          <h3 className="text-3xl font-bold text-slate-900">
            <span className="text-primary-400">Over</span>view
          </h3>
        </div>

        <Nav />
      </div>
    </header>
  );
};

export default Header;
