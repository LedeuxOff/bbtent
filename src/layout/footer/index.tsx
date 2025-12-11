import { Separator } from "@/components/ui/separator";
import { navigationData } from "@/shared/consts";
import { AppContainer, AppLink } from "@/shared/ui-kit";
import { Link } from "@tanstack/react-router";

export const AppFooter = () => {
  return (
    <footer className="bg-[#909090] flex justify-center">
      {" "}
      {/* ✅ <footer> */}
      <AppContainer>
        <div className="flex flex-col gap-4 py-4">
          {/* ✅ Подписанная навигация */}
          <nav aria-label="Навигация в подвале">
            <div className="flex flex-col md:flex-row gap-4">
              {navigationData.map((link) => (
                <AppLink
                  key={link.id}
                  anchor={link.anchor}
                  props={{
                    href: link.href,
                    className:
                      "font-[600] hover:text-[#ffd580] transition-colors",
                  }}
                >
                  {link.label}
                </AppLink>
              ))}
            </div>
          </nav>

          <Separator />

          <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:items-center">
            <Link
              to="/"
              aria-label="На главную — BBTent, производство тентов в Энгельсе"
            >
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
            </Link>

            <Link to="/privacy-policy" className="text-white underline">
              Политика конфиденциальности
            </Link>
          </div>

          {/* ✅ Усиленный копирайт с гео и ключами */}
          <span className="text-white">
            © 2005–2025 BBTent — производство тентов и укрытий в г. Энгельс,
            Саратовская область (ИП Бычков В.Ю.)
          </span>
        </div>
      </AppContainer>
    </footer>
  );
};
