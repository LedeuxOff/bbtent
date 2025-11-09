import { cn } from "@/lib/utils";
import { AppContainer } from "@/shared/ui-kit";
import { ContactsWidget, EnrollWidget } from "@/widgets";
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

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref4, inView: inView4 } = useInView({
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
            <ContactsWidget
              mobileRef={ref3}
              desctopRef={ref4}
              inViewMobile={inView3}
              inViewDesctop={inView4}
            />
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
