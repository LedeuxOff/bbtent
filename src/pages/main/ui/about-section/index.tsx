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
    <div id="about" className="w-full flex justify-center">
      {" "}
      {/* ✅ убран # */}
      <AppContainer>
        <div className="flex flex-col gap-8">
          {/* ✅ SEO: <h2> вместо <span> */}
          <h2
            ref={ref1}
            className={cn(
              "text-[30px] md:text-[38px] font-[700] transition-all duration-1000 ease-out",
              inView1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            О компании BBTent
          </h2>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-4 flex-wrap gap-4">
              <div
                ref={ref2}
                className={cn(
                  "col-span-4 md:col-span-2 lg:col-span-2 shadow-lg border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-8 flex flex-col gap-6 transition-all duration-1000 ease-out",
                  inView2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                <span className="text-[#ffab00] font-[700] text-[32px] leading-[28px]">
                  <Trophy className="w-12 h-12" />
                </span>

                <p className="text-[#000] text-[16px]">
                  {" "}
                  {/* ✅ <p> вместо <span> */}
                  Более 20 лет мы занимаемся производством тентов и укрытий в г.
                  Энгельс, Саратовская область. Изготавливаем автотенты, пологи,
                  буровые укрытия, беседки, ангары, павильоны, каркасные
                  бассейны, вкладыши, сельхоз- и строительные укрытия, а также
                  выполняем гидроизоляцию нефтеамбаров, лагун, водоёмов и
                  фундаментов.
                </p>
              </div>

              <div
                ref={ref3}
                className={cn(
                  "col-span-4 md:col-span-2 lg:col-span-2 shadow-lg border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-8 flex flex-col gap-6 transition-all duration-1000 ease-out",
                  inView3
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 md:-translate-y-10"
                )}
              >
                <span className="text-[#ffab00] font-[700] text-[32px] leading-[28px] flex items-center gap-4">
                  <ShellIcon className="w-12 h-12" />
                </span>

                <p className="text-[#000] text-[16px]">
                  Используем высококачественные ПВХ-ткани и синтетические
                  материалы от проверенных поставщиков. Наши автотенты и укрытия
                  надёжно защищают от дождя, снега, ветра и УФ-излучения даже в
                  условиях Саратовской области.
                </p>
              </div>

              <div
                ref={ref4}
                className={cn(
                  "col-span-4 md:col-span-2 lg:col-span-2 shadow-lg border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-8 flex flex-col gap-6 transition-all duration-1000 ease-out",
                  inView4
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                <span className="text-[#ffab00] font-[700] text-[32px] leading-[28px] flex items-center gap-4">
                  <Clock2 className="w-12 h-12" />
                </span>

                <p className="text-[#000] text-[16px]">
                  Все изделия изготавливаются из прочных, водоотталкивающих и
                  морозоустойчивых материалов. Это гарантирует долговечность и
                  надёжную защиту ваших объектов на территории России, включая
                  Саратовскую область и город Энгельс.
                </p>
              </div>

              <div
                ref={ref5}
                className={cn(
                  "col-span-4 md:col-span-2 lg:col-span-2 shadow-lg border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-8 flex flex-col gap-6 transition-all duration-1000 ease-out",
                  inView5
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10"
                )}
              >
                <span className="text-[#ffab00] font-[700] text-[32px] leading-[28px] flex items-center gap-4">
                  <Settings className="w-12 h-12" />
                </span>

                <p className="text-[#000] text-[16px]">
                  Наша продукция — это сочетание практичности, функциональности
                  и индивидуального подхода. Мы производим тенты и укрытия по
                  вашим размерам в Энгельсе, обеспечивая высокое качество и
                  комфорт при эксплуатации.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
