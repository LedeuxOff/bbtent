import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AppContainer } from "@/shared/ui-kit";

export const MainPageFAQSection = () => {
  return (
    <div className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span className="text-[38px] font-[700]">Вопрос - ответ</span>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[18px]">
                От чего зависит стоимость тента?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-[16px]">
                  Цена изделия зависит от выбранного материала, габаритов
                  автомобиля, сложности конструкции, а так же от выбранных
                  дополнительных опций (размеров и качества рекламного
                  изображения и т. д.).
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[18px]">
                Почему тент из ПВХ лучше, чем из брезента?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-[16px]">
                  Ткани ПВХ более прочные, долговечные, не впитывают влагу, не
                  подвержены гниению и не боятся перепадов температур. Способ
                  производства изделий: спайка горячим воздухом двойной
                  проварки, что обеспечивает герметичность шва. Этот способ
                  надежнее сшивного.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[18px]">
                Как заказать тент с доставкой?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-[16px]">
                  Вы можете купить один или несколько тентов и заказать доставку
                  транспортными компаниями <strong>ПЭК</strong>,{" "}
                  <strong>СДЕК</strong>, <strong>Байкал</strong>. Доставка
                  осуществляется по всей России. Вы можете оплатить заказ по
                  счету или при получении в пункте выдачи.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </AppContainer>
    </div>
  );
};
