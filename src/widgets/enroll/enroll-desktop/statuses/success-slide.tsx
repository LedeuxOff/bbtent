import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

interface SuccessSlideProps {
  onOpenChange: (value: boolean) => void;
}

export const SuccessSlide = ({ onOpenChange }: SuccessSlideProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="rounded-[16px] bg-gray-100 flex flex-col gap-8 items-center p-8 max-w-[320px] shadow-xl">
        <CheckIcon className="bg-green-600 w-[64px] h-[64px] text-white rounded-full p-4" />

        <div className="flex flex-col gap-4 items-center">
          <span className="text-[24px] font-[600]">Успешно!</span>

          <span className="text-[16px] text-center">
            Ваша заявка отправлена. В ближайшее время мы свяжемся с Вами.
          </span>
        </div>

        <Button
          size="lg"
          type="button"
          onClick={() => onOpenChange(false)}
          className="bg-[#649ffe] font-[600] border-none text-white cursor-pointer hover:bg-[#5092fc] hover:text-white py-6 w-full text-[16px]"
        >
          Закрыть
        </Button>
      </div>
    </div>
  );
};
