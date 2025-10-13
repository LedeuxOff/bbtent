import { Button } from "@/components/ui/button";
import { useEnrollModel } from "@/entities/enroll/model";
import { CheckDataSlide, ChooseCategorySlide, FillFieldsSlide } from "./slides";
import { SuccessSlide } from "./statuses/success-slide";
import { ErrorSlide } from "./statuses/error-slide";
import { Drawer, DrawerContent, DrawerFooter } from "@/components/ui/drawer";
import type { Dispatch, SetStateAction } from "react";

interface EnrollMobileWidgetProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  categoryKey?: string;
}

export const EnrollMobileWidget = ({
  open,
  setOpen,
  categoryKey,
}: EnrollMobileWidgetProps) => {
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
    <Drawer open={open} onOpenChange={(value) => onOpenChange(value)}>
      <DrawerContent className="border-0! max-h-[90vh]!">
        <div className="flex flex-col overflow-y-auto pt-4 px-4">
          {!status && (
            <div className="overflow-y-auto">
              {slide.key === "choose-category" && (
                <ChooseCategorySlide form={form} />
              )}
              {slide.key === "fill-fields" && <FillFieldsSlide form={form} />}
              {slide.key === "check-data" && <CheckDataSlide form={form} />}
            </div>
          )}

          {!!status && (
            <div className="flex-1">
              {status === "success" && (
                <SuccessSlide onOpenChange={onOpenChange} />
              )}

              {status === "error" && <ErrorSlide onOpenChange={onOpenChange} />}
            </div>
          )}
          <DrawerFooter className="flex gap-2 flex-row px-0">
            {slide.step > 1 && (
              <Button
                variant="outline"
                type="button"
                onClick={handlePrevSlide}
                className="py-6 flex-1"
              >
                Назад
              </Button>
            )}
            <Button
              type="button"
              onClick={slide.step === 3 ? onSubmit : handleNextSlide}
              className="py-6 flex-1"
            >
              {slide.step === 3 ? "Отправить" : "Далее"}
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
