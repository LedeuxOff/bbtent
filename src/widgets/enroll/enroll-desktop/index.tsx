import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEnrollModel } from "@/entities/enroll/model";
import { BadgeRussianRubleIcon } from "lucide-react";
import { CheckDataSlide, ChooseCategorySlide, FillFieldsSlide } from "./slides";
import { EnrollHeader } from "./header";
import { EnrollStepsController } from "./steps-controller";
import { AppContainer } from "@/shared/ui-kit";
import { SuccessSlide } from "./statuses/success-slide";
import { ErrorSlide } from "./statuses/error-slide";

interface EnrollWidgetProps {
  categoryKey?: string;
}

export const EnrollDesktopWidget = ({ categoryKey }: EnrollWidgetProps) => {
  const { form, onSubmit, slide, setSlide, open, onOpenChange, status } =
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
      <SheetContent className="hidden md:flex w-full min-w-full [&>button]:hidden">
        <SheetHeader className="p-0">
          <EnrollHeader
            slide={slide}
            onOpenChange={onOpenChange}
            status={status}
          />
        </SheetHeader>
        <div className="flex justify-center">
          <AppContainer>
            <div className="flex gap-4">
              {!status && (
                <>
                  <div className="flex-1">
                    {slide.key === "choose-category" && (
                      <ChooseCategorySlide form={form} />
                    )}
                    {slide.key === "fill-fields" && (
                      <FillFieldsSlide form={form} />
                    )}
                    {slide.key === "check-data" && (
                      <CheckDataSlide form={form} />
                    )}
                  </div>

                  <EnrollStepsController
                    form={form}
                    slide={slide}
                    setSlide={setSlide}
                    onSubmit={onSubmit}
                  />
                </>
              )}

              {!!status && (
                <div className="flex-1">
                  {status === "success" && (
                    <SuccessSlide onOpenChange={onOpenChange} />
                  )}

                  {status === "error" && (
                    <ErrorSlide onOpenChange={onOpenChange} />
                  )}
                  {/* {slide.key === "success" && (
                    
                  )}
                  {slide.key === "error" && (
                    <ErrorSlide form={form} setSlide={setSlide} />
                  )} */}
                </div>
              )}
            </div>
          </AppContainer>
        </div>
      </SheetContent>
    </Sheet>
  );
};
