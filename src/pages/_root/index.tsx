import { AppFooter, AppHeader } from "@/layout";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const RootLayout = () => (
  <div className="flex flex-col min-h-screen">
    <AppHeader />
    <main className="flex-grow">
      <Outlet />
    </main>
    <AppFooter />
    <TanStackRouterDevtools />
  </div>
);
