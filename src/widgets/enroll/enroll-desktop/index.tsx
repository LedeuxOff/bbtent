import { useState } from "react";
import { EnrollDesktopWidget } from "./enroll-desktop-widget";
import { EnrollMobileWidget } from "./enroll-mobile-widget";
import { Button } from "@/components/ui/button";
import { BadgeRussianRubleIcon } from "lucide-react";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import type { ClassNameValue } from "tailwind-merge";
import { cn } from "@/lib/utils";

interface EnrollWidgetProps {
  categoryKey?: string;
  label?: string;
  className?: ClassNameValue;
  ref?: (node?: Element | null | undefined) => void;
}

export const EnrollWidget = ({
  categoryKey,
  label,
  ref,
  className,
}: EnrollWidgetProps) => {
  const [open, setOpen] = useState(false);
  const { isMobile } = useMediaQuery();

  return (
    <>
      <div>
        <Button
          ref={ref}
          type="button"
          size="lg"
          onClick={() => setOpen(!open)}
          className={cn(
            "bg-[#ffd58077] font-[600] border-none text-white cursor-pointer hover:bg-[#ffd580AA] hover:text-white py-8 px-12 text-[16px]",
            className
          )}
        >
          <BadgeRussianRubleIcon className="w-10! h-10!" />
          {label || "Расчет стоимости"}
        </Button>
      </div>

      {open && !isMobile && (
        <EnrollDesktopWidget
          open={open}
          setOpen={setOpen}
          categoryKey={categoryKey}
        />
      )}
      {open && isMobile && (
        <EnrollMobileWidget
          open={open}
          setOpen={setOpen}
          categoryKey={categoryKey}
        />
      )}
    </>
  );
};
