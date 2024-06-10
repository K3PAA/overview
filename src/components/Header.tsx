import Nav from "./Nav";

const Header = () => {
  return (
    <header className="container relative top-4 mx-auto shadow-sm">
      <div className="relative flex items-center justify-between rounded-md bg-gradient-to-r from-slate-300 to-slate-100 p-4">
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
