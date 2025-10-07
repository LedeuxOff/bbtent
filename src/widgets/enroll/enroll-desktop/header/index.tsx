import { SheetTitle } from "@/components/ui/sheet";
import { SLIDES_DATA } from "@/entities/enroll/model/consts";
import type { SlideType } from "@/entities/enroll/model/types";
import { cn } from "@/lib/utils";
import { AppContainer } from "@/shared/ui-kit";
import { XIcon } from "lucide-react";

interface EnrollHeaderProps {
  slide: SlideType;
  onOpenChange: (value: boolean) => void;
}

export const EnrollHeader = ({ slide, onOpenChange }: EnrollHeaderProps) => {
  return (
    <>
      <div className="flex justify-center">
        <AppContainer
          props={{ className: "p-[16px] flex justify-between items-center" }}
        >
          <SheetTitle className="text-[16px] font-normal flex gap-4">
            {slide.label}
            <span className="text-[#969696]">
              {slide.step}/{SLIDES_DATA.length - 2}
            </span>
          </SheetTitle>
          <XIcon
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              onOpenChange(false);
            }}
          />
        </AppContainer>
      </div>
      <div className="flex mt-[-2px]">
        {SLIDES_DATA.slice(0, 3).map((item, index) => (
          <div
            key={item.key}
            className={cn(
              "h-1 flex-1",
              index + 1 > slide.step ? "bg-[#e6e6e6]" : "bg-[#f2db20]",
              slide.key === "check-data" && "bg-[#4d95ff]",
              item.key === "success" && "bg-[#21df9b]",
              item.key === "error" && "bg-red-500"
            )}
          />
        ))}
      </div>
    </>
  );
};
