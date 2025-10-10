import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

interface ErrorSlideProps {
  onOpenChange: (value: boolean) => void;
}

export const ErrorSlide = ({ onOpenChange }: ErrorSlideProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="rounded-[16px] bg-gray-100 flex flex-col gap-8 items-center p-8 max-w-[320px] shadow-xl">
        <XIcon className="bg-red-600 w-[64px] h-[64px] text-white rounded-full p-4" />

        <div className="flex flex-col gap-4 items-center">
          <span className="text-[24px] font-[600]">Ошибка!</span>

          <span className="text-[16px] text-center">
            Мы уже исправляем ее. Попробуйте повторить позднее.
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
