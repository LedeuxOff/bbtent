import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEnrollModel } from "@/entities/enroll/model";
import { BadgeRussianRubleIcon } from "lucide-react";
import {
  CheckDataSlide,
  ChooseCategorySlide,
  ErrorSlide,
  FillFieldsSlide,
  SuccessSlide,
} from "./slides";
import { EnrollHeader } from "./header";
import { EnrollStepsController } from "./steps-controller";
import { AppContainer } from "@/shared/ui-kit";

interface EnrollWidgetProps {
  categoryKey?: string;
}

export const EnrollDesktopWidget = ({ categoryKey }: EnrollWidgetProps) => {
  const { form, onSubmit, slide, setSlide, open, onOpenChange } =
    useEnrollModel({ categoryKey });

  return (
    <Sheet open={open} onOpenChange={(value) => onOpenChange(value)}>
      <SheetTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="bg-[#ffd58077] font-[600] border-none text-white cursor-pointer hover:bg-[#ffd580AA] hover:text-white py-8 px-12 text-[16px]"
        >
          <BadgeRussianRubleIcon className="w-10! h-10!" />
          Расчет стоимости
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full min-w-full [&>button]:hidden">
        <SheetHeader className="p-0">
          <EnrollHeader slide={slide} onOpenChange={onOpenChange} />
        </SheetHeader>
        <div className="flex justify-center">
          <AppContainer>
            <div className="flex gap-4">
              <div className="flex-1">
                {slide.key === "choose-category" && (
                  <ChooseCategorySlide form={form} />
                )}
                {slide.key === "fill-fields" && (
                  <FillFieldsSlide form={form} setSlide={setSlide} />
                )}
                {slide.key === "check-data" && (
                  <CheckDataSlide form={form} setSlide={setSlide} />
                )}
                {slide.key === "success" && (
                  <SuccessSlide form={form} setSlide={setSlide} />
                )}
                {slide.key === "error" && (
                  <ErrorSlide form={form} setSlide={setSlide} />
                )}
              </div>

              <EnrollStepsController
                form={form}
                slide={slide}
                setSlide={setSlide}
                onSubmit={onSubmit}
              />
            </div>
          </AppContainer>
        </div>
      </SheetContent>
    </Sheet>
  );
};
