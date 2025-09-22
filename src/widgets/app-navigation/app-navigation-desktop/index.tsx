import { navigationData } from "@/shared/consts";
import { AppLink } from "@/shared/ui-kit";

export const AppNavigationDesktop = () => {
  return (
    <div className="flex items-center gap-8">
      {navigationData.map((link) => (
        <AppLink key={link.id} props={{ href: link.anchor }}>
          {link.label}
        </AppLink>
      ))}
    </div>
  );
};
