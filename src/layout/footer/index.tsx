import { Separator } from "@/components/ui/separator";
import { navigationData } from "@/shared/consts";
import { AppContainer, AppLink } from "@/shared/ui-kit";

export const AppFooter = () => {
  return (
    <div className="bg-[#909090] flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {navigationData.map((link) => (
              <AppLink
                key={link.id}
                props={{
                  href: link.anchor,
                  className:
                    "font-[600] hover:text-[#ffd580] transition-colors",
                }}
              >
                {link.label}
              </AppLink>
            ))}
          </div>

          <Separator />

          <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:items-center">
            <a href="/">
              <div className="flex gap-2 items-center">
                <img src="/logo.jpg" className="w-10 h-10 rounded-[4px]" />
                <span className="text-white font-[600] text-[24px]">
                  BBTent
                </span>
              </div>
            </a>

            <a href="/" className="text-white underline">
              Политика конфиденциальности
            </a>
          </div>

          <span className="text-white">
            © 2005-2025 Производственная компания "BBTent" (ИП Петров П.П.)
          </span>
        </div>
      </AppContainer>
    </div>
  );
};
