import { AppContainer } from "@/shared/ui-kit";
import { Clock2, Settings, ShellIcon, Trophy } from "lucide-react";

export const MainPageAboutSection = () => {
  return (
    <div id="#about" className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span className="text-[38px] font-[700]">О компании</span>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-4 flex-wrap gap-4">
              <div className="col-span-4 md:col-span-2 lg:col-span-1 shadow-lg border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-8 flex flex-col gap-6">
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

              <div className="col-span-4 md:col-span-2 lg:col-span-1 shadow-lg border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-8 flex flex-col gap-6">
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

              <div className="col-span-4 md:col-span-2 lg:col-span-1 shadow-lg border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-8 flex flex-col gap-6">
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

              <div className="col-span-4 md:col-span-2 lg:col-span-1 shadow-lg border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-8 flex flex-col gap-6">
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
