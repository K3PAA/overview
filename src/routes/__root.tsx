import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Footer, Header } from "../components";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <div className="">
          <Header />
          <Outlet />
        </div>

        <Footer />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
