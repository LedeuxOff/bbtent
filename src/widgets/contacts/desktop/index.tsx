import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MailIcon } from "lucide-react";

interface DesktopContactsWidgetProps {
  ref: (node?: Element | null | undefined) => void;
  inView: boolean;
}

export const DesktopContactsWidget = ({
  ref,
  inView,
}: DesktopContactsWidgetProps) => {
  return (
    <Button
      ref={ref}
      size="lg"
      type="button"
      className={cn(
        "bg-[#80b1ff77] font-[600] border-none text-white cursor-pointer hover:bg-[#80b1ffAA] hover:text-white py-8 px-12 text-[16px] transition-all duration-1000 ease-out",
        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      )}
    >
      <MailIcon className="w-10! h-10!" />
      Напишите нам
    </Button>
  );
};
