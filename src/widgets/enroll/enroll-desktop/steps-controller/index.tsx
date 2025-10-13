import { Button } from "@/components/ui/button";
import { SLIDES_DATA } from "@/entities/enroll/model/consts";
import type {
  EnrollFormValues,
  SlideType,
} from "@/entities/enroll/model/types";
import { cn } from "@/lib/utils";
import {
  CheckIcon,
  ClipboardIcon,
  MailCheckIcon,
  TentIcon,
} from "lucide-react";
import type { UseFormReturn } from "react-hook-form";

interface EnrollStepsControllerProps {
  form: UseFormReturn<EnrollFormValues>;
  slide: SlideType;
  onSubmit: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  handleNextSlide: () => void;
  handlePrevSlide: () => void;
}

export const EnrollStepsController = ({
  form,
  slide,
  handleNextSlide,
  handlePrevSlide,
  onSubmit,
}: EnrollStepsControllerProps) => {
  return (
    <div className="hidden md:flex flex-row lg:flex-col items-start justify-between p-6 bg-[#f8f8f8] rounded-[16px] max-h-fit">
      {SLIDES_DATA.slice(0, 3).map((item) => (
        <>
          {item.step !== 1 && (
            <div className="w-10 h-6 flex flex-1 justify-center items-center my-2 mx-2 lg:mx-0">
              <div className="h-[2px] lg:h-6 w-full lg:w-[2px] bg-[#e6e6e6]" />
            </div>
          )}
          <div key={item.step} className="flex flex-row lg:flex-col">
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full relative",
                  item.step === slide.step &&
                    slide.step !== 3 &&
                    "bg-[#e6f1ff] text-[#1f66cd] border border-[#75adff]",
                  item.step > slide.step && "bg-[#e6e6e6] text-[#969696]",
                  (item.step < slide.step || slide.step === 3) &&
                    "bg-[#e6e6e6] text-[black]"
                )}
              >
                {item.step === 1 && <TentIcon />}
                {item.step === 2 && <ClipboardIcon />}
                {item.step === 3 && <MailCheckIcon />}
                {slide.step > item.step && (
                  <div className="absolute bottom-[-6px] right-[-6px] rounded-full p-1 flex items-center justify-center bg-green-600">
                    <CheckIcon className="text-white w-3 h-3" />
                  </div>
                )}
              </div>
              <span
                className={cn(
                  "hidden lg:block text-[14px] font-normal",
                  item.step <= slide.step ? "text-black" : "text-[#969696]"
                )}
              >
                {item.label}
              </span>
            </div>
          </div>
        </>
      ))}
      <div className="hidden lg:flex flex-col w-full gap-4 mt-10">
        {slide.step !== 1 && (
          <Button
            type="button"
            variant="outline"
            className="p-6 bg-white shadow-none border-none"
            onClick={handlePrevSlide}
            disabled={form.formState.disabled}
          >
            Назад
          </Button>
        )}
        {slide.step === 3 && (
          <Button
            type="button"
            className="p-6"
            onClick={onSubmit}
            disabled={form.formState.disabled}
          >
            Отправить
          </Button>
        )}
        {slide.step !== 3 && (
          <Button
            type="button"
            className="p-6"
            onClick={handleNextSlide}
            disabled={form.formState.disabled}
          >
            Продолжить
          </Button>
        )}
      </div>
    </div>
  );
};
