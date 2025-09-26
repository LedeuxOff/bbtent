import { AppContainer } from "@/shared/ui-kit";

export const MainPageAboutSection = () => {
  return (
    <div className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span className="text-[38px] font-[700]">О компании</span>

          <div className="flex flex-col gap-4">
            <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-sm shadow-sm border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-4 flex flex-col gap-6 justify-between">
              <span className="text-white font-[700] text-[24px] leading-[28px]">
                Более 20 лет!
              </span>

              <span className="text-[#cfcfcf] text-[14px]">
                Опыт изготовления: тентов, пологов, укрытий, навесов, ангаров,
                пленочных хранилищ из геомембран, а так же бассейнов - более 20
                лет!
              </span>
            </div>

            <div className="flex gap-4">
              <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-sm shadow-sm border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-4 flex flex-col gap-6 justify-between">
                <span className="text-white font-[700] text-[24px] leading-[28px]">
                  Изделия из ПВХ
                </span>

                <span className="text-[#cfcfcf] text-[14px]">
                  Мы используем высококачественные изделия из ПВХ, которые
                  идеально подходят для защиты от солнца, дождя и ветра. Эти
                  универсальные укрытия могут использоваться как на открытых
                  площадках, так и в закрытых помещениях, обеспечивая надежную
                  защиту в любых условиях.
                </span>
              </div>

              <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-sm shadow-sm border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-4 flex flex-col gap-6 justify-between">
                <span className="text-white font-[700] text-[24px] leading-[28px]">
                  Долговечность и устойчивость
                </span>

                <span className="text-[#cfcfcf] text-[14px]">
                  Каждое изделие изготовлено из прочного и водоотталкивающего
                  материала, что гарантирует долговечность и устойчивость к
                  внешним воздействиям. Мы изготовляем разнообразные размеры и
                  цвета, чтобы вы могли выбрать идеальное решение.
                </span>
              </div>

              <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-sm shadow-sm border-[1px] border-[rgba(0, 0, 0, 0.06)] rounded-[16px] p-4 flex flex-col gap-6 justify-between">
                <span className="text-white font-[700] text-[24px] leading-[28px]">
                  Практичность и функциональность
                </span>

                <span className="text-[#cfcfcf] text-[14px]">
                  Наша продукция сочетает в себе практичность и
                  функциональность, что делает ее отличным выбором для тех, кто
                  ценит качество и комфорт. Ознакомьтесь с нашим ассортиментом и
                  найдите идеальный тент или полог для своих нужд!
                </span>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
