import { AppContainer } from "@/shared/ui-kit";

export const MainPageFeedbackSection = () => {
  return (
    <div className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span className="text-[38px] font-[700]">Отзывы клиентов</span>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-3 md:col-span-1 border-[1px] border-[#11213844] rounded-[8px] p-4 flex flex-col justify-between gap-8 shadow-lg">
              <div className="flex flex-col gap-8">
                <img
                  src="/feedback/gazel.jpg"
                  className="rounded-[8px] max-h-[260px] md:max-h-[160px] object-cover"
                />
                <span>
                  Делали тент на газель, все сделали на 100 баллов, даже со
                  всеми моими косяками по каркасу, быстро, качественно,
                  подсказали как в дальнейшем изготавливать каркас. Специалисты
                  своего дела👍
                </span>
              </div>
              <div className="flex gap-4">
                <img src="/user.png" className="w-16" />
                <div className="flex flex-col gap-1">
                  <span className="font-[700] text-[18px]">Артем И.</span>
                  <span className="text-gray-500">19 февраля 2025</span>
                </div>
              </div>
            </div>

            <div className="col-span-3 md:col-span-1 border-[1px] border-[#11213844] rounded-[8px] p-4 flex flex-col justify-between gap-8 shadow-lg">
              <div className="flex flex-col gap-8">
                <img
                  src="/feedback/pricep-1.jpg"
                  className="rounded-[8px] max-h-[260px] md:max-h-[160px] object-cover"
                />
                <span>
                  Заказал тент на прицеп - оперативно и не дорого сделали 👍!
                </span>
              </div>
              <div className="flex gap-4">
                <img src="/user.png" className="w-16" />
                <div className="flex flex-col gap-1">
                  <span className="font-[700] text-[18px]">Максим</span>
                  <span className="text-gray-500">23 ноября 2024</span>
                </div>
              </div>
            </div>

            <div className="col-span-3 md:col-span-1 border-[1px] border-[#11213844] rounded-[8px] p-4 flex flex-col justify-between gap-8 shadow-lg">
              <div className="flex flex-col gap-8">
                <img
                  src="/feedback/pricep-2.jpg"
                  className="rounded-[8px] max-h-[260px] md:max-h-[160px] object-cover"
                />

                <span>
                  Отличная компания, ребята молодцы, проконсультировали,
                  ответили на все вопросы, а самое главное для меня тент сделали
                  быстро и качественно. Рекомендую!
                </span>
              </div>
              <div className="flex gap-4">
                <img src="/user.png" className="w-16" />
                <div className="flex flex-col gap-1">
                  <span className="font-[700] text-[18px]">Никита</span>
                  <span className="text-gray-500">3 сентября 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
