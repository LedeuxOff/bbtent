import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { navigationData } from "@/shared/consts";
import { AppLink } from "@/shared/ui-kit";
import { Menu } from "lucide-react";

export const AppNavigationMobile = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="border border-white text-white bg-transparent"
        >
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-[rgba(9,9,9,0.45)] backdrop-blur-sm border-0!">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>
              <a href="/">
                <div className="flex gap-2 items-center">
                  <img src="/logo.jpg" className="w-10 h-10 rounded-[4px]" />
                  <span className="text-white font-[600] text-[24px]">
                    BBTent
                  </span>
                </div>
              </a>
            </DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-8 flex flex-col gap-4">
            <Separator />

            {navigationData.map((link) => (
              <AppLink
                key={link.id}
                props={{
                  href: link.anchor,
                  className:
                    "font-[500] hover:text-[#ffd580] transition-colors",
                }}
              >
                {link.label}
              </AppLink>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
