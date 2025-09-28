import { Button } from "@/components/ui/button";
import { AppContainer } from "@/shared/ui-kit";
import { BadgeRussianRubleIcon, MailIcon } from "lucide-react";

export const MainPageWelcomeSection = () => {
  return (
    <div className="w-full flex justify-center">
      <AppContainer props={{}}>
        <div className="flex flex-col gap-8 md:gap-12 items-center justify-center bg-[#112138cc] py-8 md:py-16 px-4 rounded-[16px]">
          <span className="text-[48px] md:text-[64px] font-[700] text-white">
            BBTent
          </span>
          <span className="text-[20px] md:text-[32px] text-center max-w-[810px] font-[500] text-white">
            Добро пожаловать в нашу компанию, где мы создаем надежные тенты и
            укрытия, обеспечивающие защиту и комфорт в любых погодных условиях!
          </span>

          <div className="flex flex-col md:flex-row gap-4">
            <Button
              type="button"
              size="lg"
              className="bg-[#ffd58077] font-[600] border-none text-white cursor-pointer hover:bg-[#ffd580AA] hover:text-white py-8 px-12 text-[16px]"
            >
              <BadgeRussianRubleIcon className="w-10! h-10!" />
              Расчет стоимости
            </Button>
            <Button
              size="lg"
              type="button"
              className="bg-[#80b1ff77] font-[600] border-none text-white cursor-pointer hover:bg-[#80b1ffAA] hover:text-white py-8 px-12 text-[16px]"
            >
              <MailIcon className="w-10! h-10!" />
              Напишите нам
            </Button>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
