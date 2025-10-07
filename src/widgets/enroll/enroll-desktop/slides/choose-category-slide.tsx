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
    <div className="flex flex-col gap-8">
      <span className="text-[36px] font-[800]">Выберите услугу</span>

      <div className="overflow-y-auto p-4 pb-8 h-[calc(100vh-240px)] grid grid-cols-3 gap-8">
        {BRANCHES_DATA.map((branch) => (
          <div
            key={branch.key}
            className={cn(
              "col-span-1 flex flex-col gap-4 rounded-[16px] p-4 shadow-xl hover:scale-105 transition-transform border border-gray-100",
              !!selectedCategory &&
                selectedCategory !== branch.key &&
                "opacity-50"
            )}
          >
            <img
              src={branch.imgSrc}
              className="w-full h-[120px] object-cover rounded-[16px]"
            />

            <div className="flex flex-col gap-8 w-full">
              <span className="text-[16px] font-[500]">{branch.label}</span>

              <Button
                size="sm"
                type="button"
                disabled={!!selectedCategory && selectedCategory !== branch.key}
                className={cn(
                  "font-[600] border-none text-white cursor-pointer  hover:text-white py-6 px-6 text-[14px]",
                  selectedCategory === branch.key
                    ? "bg-red-400 hover:bg-red-500"
                    : "bg-[#65a0fe] hover:bg-[#4e91fd]"
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
            "col-span-1 flex flex-col gap-4 rounded-[16px] p-4 shadow-xl hover:scale-105 transition-transform border border-gray-100",
            !!selectedCategory && selectedCategory !== "any" && "opacity-50"
          )}
        >
          <div className="w-full h-[120px] bg-gray-200 rounded-[16px] flex items-center justify-center">
            <CircleQuestionMarkIcon className="text-gray-400" />
          </div>

          <div className="flex flex-col gap-8 w-full">
            <span className="text-[16px] font-[500]">Другое</span>

            <Button
              size="sm"
              type="button"
              disabled={!!selectedCategory && selectedCategory !== "any"}
              className={cn(
                "font-[600] border-none text-white cursor-pointer  hover:text-white py-6 px-6 text-[14px]",
                selectedCategory === "any"
                  ? "bg-red-400 hover:bg-red-500"
                  : "bg-[#65a0fe] hover:bg-[#4e91fd]"
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
