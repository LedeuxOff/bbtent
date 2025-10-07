import { navigationData } from "@/shared/consts";
import { AppLink } from "@/shared/ui-kit";

export const AppNavigationDesktop = () => {
  return (
    <div className="flex items-center gap-8">
      {navigationData.map((link) => (
        <AppLink
          key={link.id}
          anchor={link.anchor}
          props={{
            href: link.href,
            className: "font-[600] hover:text-[#ffd580] transition-colors",
          }}
        >
          {link.label}
        </AppLink>
      ))}
    </div>
  );
};
