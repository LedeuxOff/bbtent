import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AtSignIcon, PhoneIcon } from "lucide-react";

export const AppContacts = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#ffd58077] font-[600] border-none text-white cursor-pointer hover:bg-[#ffd580AA] hover:text-white"
        >
          <PhoneIcon />
          Контакты
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        alignOffset={-26}
        sideOffset={26}
        className="bg-[rgba(9,9,9,0.45)] backdrop-blur-sm rounded-[18px] px-6 py-4 border-none shadow-none w-auto"
      >
        <div className="flex flex-col gap-2 text-white">
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
      </PopoverContent>
    </Popover>
  );
};
