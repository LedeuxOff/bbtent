import { Button } from "@/components/ui/button";
import type { EnrollFormValues } from "@/entities/enroll/model/types";
import { cn } from "@/lib/utils";
import { BRANCHES_DATA } from "@/shared/consts";
import { CircleQuestionMarkIcon } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";

interface ChooseCategorySlideProps {
  form: UseFormReturn<EnrollFormValues>;
}

export const ChooseCategorySlide = ({ form }: ChooseCategorySlideProps) => {
  const selectedCategory = form.watch("chooseCategoryForm.categoryKey");

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <span className="text-[24px] md:text-[36px] md:px-0 font-[600] md:font-[800]">
        Выберите услугу
      </span>

      <div className="overflow-y-auto grid grid-cols-2 gap-8">
        {BRANCHES_DATA.map((branch) => (
          <div
            key={branch.key}
            className={cn(
              "relative col-span-2 md:col-span-1 flex flex-col gap-4 rounded-[16px] shadow-xl group border border-gray-100 h-[210px] overflow-hidden",
              !!selectedCategory &&
                selectedCategory !== branch.key &&
                "opacity-50"
            )}
          >
            <img
              src={branch.imgSrc}
              className="w-full h-full object-cover rounded-[16px] group-hover:scale-110 transition-transform"
            />

            <div className="absolute bg-[#202020BB] p-4 h-full w-[60%] flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-2">
                <branch.Icon className="text-[#b99548] w-[32px] md:w-[48px] h-[32px] md:h-[48px]" />

                <span className="text-[16px] md:text-[18px] font-[500] text-white">
                  {branch.label}
                </span>
              </div>

              <Button
                size="sm"
                type="button"
                disabled={!!selectedCategory && selectedCategory !== branch.key}
                className={cn(
                  "bg-[#87754f] font-[600] border-none text-white cursor-pointer hover:bg-[#907b4d] hover:text-white py-6 text-[14px] md:text-[16px]"
                )}
                onClick={() =>
                  form.setValue(
                    "chooseCategoryForm.categoryKey",
                    selectedCategory === branch.key ? "" : branch.key
                  )
                }
              >
                {selectedCategory === branch.key ? "Отмена" : "Выбрать"}
              </Button>
            </div>
          </div>
        ))}

        <div
          className={cn(
            "relative col-span-2 md:col-span-1 flex flex-col gap-4 rounded-[16px] shadow-xl border border-gray-100 h-[210px] overflow-hidden bg-gray-100",
            !!selectedCategory && selectedCategory !== "any" && "opacity-50"
          )}
        >
          <div className="absolute bg-[#202020BB] p-4 h-full w-[60%] flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-2">
              <CircleQuestionMarkIcon className="text-[#b99548] w-[48px] h-[48px]" />

              <span className="text-[18px] font-[500] text-white">Другое</span>
            </div>

            <Button
              size="sm"
              type="button"
              disabled={!!selectedCategory && selectedCategory !== "any"}
              className={cn(
                "bg-[#87754f] font-[600] border-none text-white cursor-pointer hover:bg-[#907b4d] hover:text-white py-6 text-[16px]"
              )}
              onClick={() =>
                form.setValue(
                  "chooseCategoryForm.categoryKey",
                  selectedCategory === "any" ? "" : "any"
                )
              }
            >
              {selectedCategory === "any" ? "Отмена" : "Выбрать"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
