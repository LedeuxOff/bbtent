import { cn } from "@/lib/utils";
import { AppContainer } from "@/shared/ui-kit";
import { Clock2, Settings, ShellIcon, Trophy } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const MainPageAboutSection = () => {
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

  const { ref: ref5, inView: inView5 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div id="#about" className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span
            ref={ref1}
            className={cn(
              "text-[38px] font-[700] transition-all duration-1000 ease-out",
              inView1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            О компании
          </span>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-4 flex-wrap gap-4">
              <div
                ref={ref2}
                className={cn(
                  "col-span-4 md:col-span-2 lg:col-span-1 shadow-lg border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-8 flex flex-col gap-6 transition-all duration-1000 ease-out",
                  inView2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                <span className="text-[#ffab00] font-[700] text-[32px] leading-[28px]">
                  <Trophy className="w-12 h-12" />
                </span>

                <span className="text-[#000] text-[16px]">
                  Опыт изготовления: автотентов, пологов, буровых укрытий и
                  беседок, ангаров и павильонов, каркасных бассейнов и
                  вкладышей, строительных и сельхоз укрытий, гидроизоляция
                  нефтеамбаров, лагун, водоёмов, фундамента и шламовых амбаров -{" "}
                  <strong className="underline text-[#ffab00]">
                    более 20 лет!
                  </strong>
                </span>
              </div>

              <div
                ref={ref3}
                className={cn(
                  "col-span-4 md:col-span-2 lg:col-span-1 shadow-lg border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-8 flex flex-col gap-6 transition-all duration-1000 ease-out",
                  inView3
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 md:-translate-y-10"
                )}
              >
                <span className="text-[#ffab00] font-[700] text-[32px] leading-[28px] flex items-center gap-4">
                  <ShellIcon className="w-12 h-12" />
                </span>

                <span className="text-[#000] text-[16px]">
                  Мы используем высококачественные{" "}
                  <strong className="underline text-[#ffab00]">
                    изделия из ПВХ и других синтетических материалов
                  </strong>
                  , которые идеально подходят для защиты от солнца, дождя и
                  ветра.
                </span>
              </div>

              <div
                ref={ref4}
                className={cn(
                  "col-span-4 md:col-span-2 lg:col-span-1 shadow-lg border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-8 flex flex-col gap-6 transition-all duration-1000 ease-out",
                  inView4
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                <span className="text-[#ffab00] font-[700] text-[32px] leading-[28px] flex items-center gap-4">
                  <Clock2 className="w-12 h-12" />
                </span>

                <span className="text-[#000] text-[16px]">
                  Каждое изделие изготовлено из прочного и водоотталкивающего
                  материала, что гарантирует{" "}
                  <strong className="underline text-[#ffab00]">
                    долговечность и устойчивость
                  </strong>{" "}
                  к внешним воздействиям.
                </span>
              </div>

              <div
                ref={ref5}
                className={cn(
                  "col-span-4 md:col-span-2 lg:col-span-1 shadow-lg border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-8 flex flex-col gap-6 transition-all duration-1000 ease-out",
                  inView5
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10"
                )}
              >
                <span className="text-[#ffab00] font-[700] text-[32px] leading-[28px] flex items-center gap-4">
                  <Settings className="w-12 h-12" />
                </span>

                <span className="text-[#000] text-[16px]">
                  Наша продукция сочетает в себе{" "}
                  <strong className="underline text-[#ffab00]">
                    практичность и функциональность
                  </strong>
                  , что делает ее отличным выбором для тех, кто ценит качество и
                  комфорт.
                </span>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
