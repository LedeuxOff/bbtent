import type { EnrollFormValues } from "@/entities/enroll/model/types";
import { BRANCHES_DETAIL_DATA } from "@/shared/consts/branches-detail-data";
import type { UseFormReturn } from "react-hook-form";

interface CheckDataSlideProps {
  form: UseFormReturn<EnrollFormValues>;
}

export const CheckDataSlide = ({ form }: CheckDataSlideProps) => {
  const formValues = form.watch();
  const categoryLabel =
    formValues.chooseCategoryForm.categoryKey === "any"
      ? "Другое"
      : BRANCHES_DETAIL_DATA[formValues.chooseCategoryForm.categoryKey].name;

  return (
    <div className="flex flex-col gap-8 max-h-screen pb-36 overflow-auto">
      <span className="text-[36px] font-[800]">Проверьте данные</span>

      <div className="flex flex-col gap-4">
        <div className="bg-[#f8f8f8] rounded-[16px] p-8 flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <span className="text-[24px] font-[700]">Услуга</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end gap-3">
              <span className="text-[#969696] text-[14px]">
                Выбранная услуга
              </span>
              <div className="border-b border-dashed border-[#969696] flex-1 mb-1" />
              <span className="text-[14px]">{categoryLabel}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#f8f8f8] rounded-[16px] p-8 flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <span className="text-[24px] font-[700]">Заявитель</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end gap-3">
              <span className="text-[#969696] text-[14px]">Фамилия</span>
              <div className="border-b border-dashed border-[#969696] flex-1 mb-1" />
              <span className="text-[14px]">
                {formValues.personalDataForm.lastName}
              </span>
            </div>

            <div className="flex justify-between items-end gap-3">
              <span className="text-[#969696] text-[14px]">Имя</span>
              <div className="border-b border-dashed border-[#969696] flex-1 mb-1" />
              <span className="text-[14px]">
                {formValues.personalDataForm.firstName}
              </span>
            </div>

            {formValues.personalDataForm.middleName && (
              <div className="flex justify-between items-end gap-3">
                <span className="text-[#969696] text-[14px]">Отчество</span>
                <div className="border-b border-dashed border-[#969696] flex-1 mb-1" />
                <span className="text-[14px]">
                  {formValues.personalDataForm.middleName}
                </span>
              </div>
            )}

            <div className="flex justify-between items-end gap-3">
              <span className="text-[#969696] text-[14px]">Почта</span>
              <div className="border-b border-dashed border-[#969696] flex-1 mb-1" />
              <span className="text-[14px]">
                {formValues.personalDataForm.email}
              </span>
            </div>

            <div className="flex justify-between items-end gap-3">
              <span className="text-[#969696] text-[14px]">Телефон</span>
              <div className="border-b border-dashed border-[#969696] flex-1 mb-1" />
              <span className="text-[14px]">
                {formValues.personalDataForm.phone}
              </span>
            </div>

            {formValues.personalDataForm.categoryDetail && (
              <div className="flex flex-col gap-1">
                <span className="text-[#969696] text-[14px]">Что вы ищете</span>
                <span className="text-[14px]">
                  {formValues.personalDataForm.categoryDetail}
                </span>
              </div>
            )}

            {formValues.personalDataForm.comment && (
              <div className="flex flex-col gap-1">
                <span className="text-[#969696] text-[14px]">
                  Ваш комментарий
                </span>
                <span className="text-[14px]">
                  {formValues.personalDataForm.comment}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
