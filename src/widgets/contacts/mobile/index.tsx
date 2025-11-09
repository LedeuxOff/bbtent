import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AtSignIcon, MailIcon, MapIcon, PhoneIcon } from "lucide-react";
import { useState } from "react";

interface MobileContactsWidgetProps {
  ref: (node?: Element | null | undefined) => void;
  inView: boolean;
}

export const MobileContactsWidget = ({
  ref,
  inView,
}: MobileContactsWidgetProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={(value) => setOpen(value)}>
      <DrawerTrigger asChild>
        <Button
          ref={ref}
          size="lg"
          type="button"
          className={cn(
            "bg-[#80b1ff77] font-[600] border-none text-white cursor-pointer hover:bg-[#80b1ffAA] hover:text-white py-8 px-12 text-[16px] transition-all duration-1000 ease-out w-full",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}
        >
          <MailIcon className="w-10! h-10!" />
          Напишите нам
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-[rgba(9,9,9,0.45)] backdrop-blur-sm border-0!">
        <div className="w-full">
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
          <div className="flex p-4 flex-col gap-4 text-white">
            <Separator />

            <div className="flex flex-col gap-4">
              <div className="flex gap-2 group relative">
                <PhoneIcon className="group-hover:text-[#ffd580]" />
                <a
                  href="tel:+79271478165"
                  className="flex gap-2 items-center group-hover:text-[#ffd580] transition-all relative"
                >
                  +7 927 147 81 65
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#ffd580] transition-all duration-300 w-0 group-hover:w-full`}
                  />
                </a>
              </div>

              <div className="flex gap-2 group relative">
                <PhoneIcon className="group-hover:text-[#ffd580]" />
                <a
                  href="tel:+79272286248"
                  className="flex gap-2 items-center group-hover:text-[#ffd580] transition-all relative"
                >
                  +7 927 228 62 48
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#ffd580] transition-all duration-300 w-0 group-hover:w-full`}
                  />
                </a>
              </div>

              <div className="flex gap-2 group relative">
                <PhoneIcon className="group-hover:text-[#ffd580]" />
                <a
                  href="tel:+79063175958"
                  className="flex gap-2 items-center group-hover:text-[#ffd580] transition-all relative"
                >
                  +7 906 317 59 58
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#ffd580] transition-all duration-300 w-0 group-hover:w-full`}
                  />
                </a>
              </div>

              <div className="flex gap-2 group relative">
                <AtSignIcon className="group-hover:text-[#ffd580]" />
                <a
                  href="mailto:bokovandrey0015@gmail.com"
                  className="flex gap-2 items-center group-hover:text-[#ffd580] transition-all relative"
                >
                  bb.tent@yandex.ru
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#ffd580] transition-all duration-300 w-0 group-hover:w-full`}
                  />
                </a>
              </div>
            </div>

            <Separator />

            <span className="flex gap-2 items-center">
              <MapIcon /> Саратовская область , г. Энгельс
            </span>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
