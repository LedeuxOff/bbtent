import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { useEnrollModel } from "@/entities/enroll/model";
import { CheckDataSlide, ChooseCategorySlide, FillFieldsSlide } from "./slides";
import { EnrollHeader } from "./header";
import { EnrollStepsController } from "./steps-controller";
import { AppContainer } from "@/shared/ui-kit";
import { SuccessSlide } from "./statuses/success-slide";
import { ErrorSlide } from "./statuses/error-slide";
import type { Dispatch, SetStateAction } from "react";

interface EnrollWidgetProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  categoryKey?: string;
}

export const EnrollDesktopWidget = ({
  open,
  setOpen,
  categoryKey,
}: EnrollWidgetProps) => {
  const {
    form,
    onSubmit,
    slide,
    onOpenChange,
    status,
    handleNextSlide,
    handlePrevSlide,
  } = useEnrollModel({ categoryKey, open, setOpen });

  return (
    <Sheet open={open} onOpenChange={(value) => onOpenChange(value)}>
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
            {!status && (
              <div className="w-full flex gap-4">
                <div className="flex-1 h-screen overflow-y-auto pb-[120px]">
                  <div className="">
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
                </div>

                <EnrollStepsController
                  form={form}
                  slide={slide}
                  onSubmit={onSubmit}
                  handleNextSlide={handleNextSlide}
                  handlePrevSlide={handlePrevSlide}
                />
              </div>
            )}

            {!!status && (
              <div className="flex-1">
                {status === "success" && (
                  <SuccessSlide onOpenChange={onOpenChange} />
                )}

                {status === "error" && (
                  <ErrorSlide onOpenChange={onOpenChange} />
                )}
              </div>
            )}
            <div className="flex gap-4"></div>
          </AppContainer>
        </div>
      </SheetContent>
    </Sheet>
  );
};
