import { AppContainer } from "@/shared/ui-kit";
import {
  AppContacts,
  AppNavigationDesktop,
  AppNavigationMobile,
} from "@/widgets";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const AppHeader = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`supports-backdrop-blur:bg-background/60 fixed top-0 z-40 w-full transform ${isVisible ? "translate-y-0" : "-translate-y-96"} transition-all duration-300 ease-in-out overflow-hidden`}
    >
      <AppContainer props={{ className: "mx-auto" }}>
        <div className="w-full flex justify-between items-center gap-4 bg-[rgba(9,9,9,0.45)] backdrop-blur-sm rounded-[18px] px-6 py-4">
          <Link
            to="/"
            aria-label="На главную — BBTent, производство тентов в Энгельсе"
          >
            {isHomePage ? (
              <h1 className="flex gap-2 items-center">
                <img
                  src="/logo.jpg"
                  alt="BBTent — производство тентов в Энгельсе"
                  className="w-10 h-10 rounded-[4px]"
                />
                <span className="text-white font-[600] text-[24px]">
                  BBTent
                </span>
              </h1>
            ) : (
              <div className="flex gap-2 items-center">
                <img
                  src="/logo.jpg"
                  alt="BBTent — производство тентов в Энгельсе"
                  className="w-10 h-10 rounded-[4px]"
                />
                <span className="text-white font-[600] text-[24px]">
                  BBTent
                </span>
              </div>
            )}
          </Link>

          <nav aria-label="Основное меню" className="hidden md:flex">
            <AppNavigationDesktop />
          </nav>

          <div className="flex md:hidden">
            <AppNavigationMobile />
          </div>

          <div className="hidden md:flex">
            <AppContacts />
          </div>
        </div>
      </AppContainer>
    </header>
  );
};
