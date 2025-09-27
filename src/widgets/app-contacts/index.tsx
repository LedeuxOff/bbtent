import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AtSign, PhoneIcon } from "lucide-react";

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
        className="bg-[rgba(9,9,9,0.45)] backdrop-blur-sm rounded-[18px] px-6 py-4 border-none shadow-none"
      >
        <div className="flex flex-col gap-2 text-white">
          <a href="tel:+79272286248" className="flex gap-2 items-center">
            <PhoneIcon className="w-5 h-5" />
            <span>+7 927 228 62 48</span>
          </a>

          <a href="tel:+79063175958" className="flex gap-2 items-center">
            <PhoneIcon className="w-5 h-5" />
            <span>+7 906 317 59 58</span>
          </a>

          <a
            href="mailto:bokovandrey0015@gmail.com"
            className="flex gap-2 items-center"
          >
            <AtSign className="w-5 h-5" />
            <span>bokovandrey0015@gmail.com</span>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
};
