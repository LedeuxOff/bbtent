import { AppFooter, AppHeader } from "@/layout";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { Toaster } from "sonner";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const RootLayout = () => (
  <div className="flex flex-col min-h-screen">
    <ScrollToTop />
    <AppHeader />
    <main className="flex-grow">
      <Outlet />
    </main>
    <AppFooter />
    <Toaster />
    <TanStackRouterDevtools />
  </div>
);
