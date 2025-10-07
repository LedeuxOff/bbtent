import { AppFooter, AppHeader } from "@/layout";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const RootLayout = () => (
  <div className="flex flex-col min-h-[200vh]">
    <AppHeader />
    <Outlet />
    <AppFooter />
    <TanStackRouterDevtools />
  </div>
);
