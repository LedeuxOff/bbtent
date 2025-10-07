import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BadgeRussianRubleIcon } from "lucide-react";

interface AppGetPriceBannerProps {
  title?: string;
}

export const AppGetPriceBanner = ({ title }: AppGetPriceBannerProps) => (
  <div className="bg-[#112138cc] p-8 rounded-[16px] relative">
    <div className="flex flex-col gap-8 relative z-10">
      <div className="flex flex-col">
        {title ? (
          <span className="text-white font-[700] text-[32px] leading-[34px]">
            {title}
          </span>
        ) : (
          <>
            <span className="text-white font-[700] text-[32px] leading-[34px]">
              Получите расчет
            </span>
            <span className="text-white font-[700] text-[32px] leading-[34px]">
              стоимости тента
            </span>
          </>
        )}
      </div>

      <Separator className="max-w-[50%] bg-[#ffd580AA]" />

      <span className="text-white">
        Ответьте на несколько вопросов и мы свяжемся с вами для расчета
        стоимости
      </span>

      <div>
        <Button
          type="button"
          size="lg"
          className="bg-[#9a8d70] font-[600] border-none text-white cursor-pointer hover:bg-[#c0a877] hover:text-white py-8 px-12 text-[16px]"
        >
          <BadgeRussianRubleIcon className="w-10! h-10!" />
          Получить расчет
        </Button>
      </div>

      <span className="text-gray-400 text-[14px]">
        Нажимая кнопку "Получить расчет", Вы соглашаетесь с{" "}
        <a href="/" className="underline">
          Политикой конфиденциальности
        </a>
      </span>
    </div>

    <img
      src="/gazel.png"
      className="hidden md:flex absolute bottom-1 right-0 w-[300px] z-0"
    />
  </div>
);
