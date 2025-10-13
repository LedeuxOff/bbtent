import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AppContainer } from "@/shared/ui-kit";
import { EnrollWidget } from "@/widgets";
import { MailIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const MainPageWelcomeSection = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div id="#welcome" className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8 md:gap-12 items-center justify-center bg-[#112138cc] py-8 md:py-16 px-4 rounded-[16px]">
          <span
            ref={ref1}
            className={cn(
              "text-[48px] md:text-[64px] font-[700] text-white transition-opacity duration-1000 ease-out",
              inView1 ? "opacity-100" : "opacity-0"
            )}
          >
            BBTent
          </span>
          <span
            ref={ref1}
            className={cn(
              "text-[20px] md:text-[32px] text-center max-w-[810px] font-[500] text-white transition-all duration-1000 ease-out",
              inView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Добро пожаловать в нашу компанию, где мы создаем тентовые укрытия и
            гидроизоляцию, обеспечивающие защиту и комфорт в любых погодных
            условиях!
          </span>

          <div className="flex flex-col md:flex-row gap-4">
            <EnrollWidget
              ref={ref2}
              className={cn(
                "transition-all duration-1000 ease-out",
                inView2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              )}
            />
            <Button
              size="lg"
              type="button"
              className={cn(
                "bg-[#80b1ff77] font-[600] border-none text-white cursor-pointer hover:bg-[#80b1ffAA] hover:text-white py-8 px-12 text-[16px] transition-all duration-1000 ease-out",
                inView2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              )}
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
