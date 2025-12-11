//@ts-expect-error-swiper-css
import "swiper/css";
//@ts-expect-error-swiper-autoplay
import "swiper/css/autoplay";
//@ts-expect-error-swiper-pagination
import "swiper/css/pagination";

import { BRANCHES_DATA } from "@/shared/consts";
import { useResponsiveValues } from "@/shared/libs/use-responsive-values";
import { AppContainer } from "@/shared/ui-kit";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "@tanstack/react-router";
import { useInView } from "react-intersection-observer";

// ✅ Добавим маппинг для SEO-описаний (можно вынести в consts, если нужно)
const BRANCH_ALT_MAP: Record<string, string> = {
  auto: "Автотенты из ПВХ-ткани — защита автомобиля от дождя, снега и солнца в Энгельсе",
  basseini:
    "Укрытия для бассейнов и лагун — ПВХ-вкладыши и тенты по индивидуальным размерам",
  selhoz_ukritya:
    "Сельхозукрытия из ПВХ — защита техники, силоса и урожая в Саратовской области",
  burovie_ukritya:
    "Буровые укрытия из ПВХ-ткани — надёжная защита оборудования на месторождениях",
  laguni:
    "Гидроизоляция лагун и водоёмов — прочные ПВХ-мембраны для промышленности",
  angari:
    "Тентовые ангары и павильоны — быстровозводимые конструкции из ПВХ в Энгельсе",
  paviloni:
    "Павильоны из ПВХ-ткани — решения для торговли, складов и мероприятий",
  krovlya:
    "Мягкая кровля и гидроизоляция крыш — ПВХ-материалы для зданий и сооружений",
  myagkie_okna:
    "Мягкие окна из ПВХ — прозрачные тенты для беседок и веранд в Саратовской области",
};

export const MainPageBranchesSection = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { navigate } = useRouter();
  const swiperRef = useRef<HTMLDivElement>(null);
  const { cardWidth: CARD_WIDTH } = useResponsiveValues({
    aspect: "16/9",
  });

  return (
    <div id="branches" className="w-full flex justify-center">
      {" "}
      {/* ✅ убран # */}
      <AppContainer>
        <div className="flex flex-col gap-8">
          {/* ✅ SEO: <h2> с усилением тематики */}
          <h2
            ref={ref1}
            className={cn(
              "text-[30px] md:text-[38px] font-[700] transition-all duration-1000 ease-out",
              inView1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            Направления производства тентов и укрытий
          </h2>

          <div
            ref={ref2}
            className={cn(
              "flex gap-2 relative transition-all duration-1000 ease-out",
              inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div
              className={cn(
                "items-center bg-[rgba(0,0,0,.4)] rounded-[8px] px-2 text-white hover:bg-[rgba(0,0,0,.6)] swiper-button-prev",
                "hidden md:flex"
              )}
            >
              <ChevronLeft />
            </div>
            <div ref={swiperRef}>
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView="auto"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                style={{ width: "100%", height: "100%" }}
              >
                {BRANCHES_DATA.map((el) => {
                  // ✅ Генерируем SEO-описание alt
                  const altText =
                    BRANCH_ALT_MAP[el.key] || `Укрытие ${el.label} от BBTent`;

                  return (
                    <SwiperSlide
                      key={el.id}
                      style={{ width: CARD_WIDTH }}
                      onClick={() => navigate({ to: `/${el.key}` })}
                    >
                      <div className="flex flex-col gap-4 cursor-pointer">
                        <div className="w-full h-[260px] sm:h-[260px] md:h-[280px] lg:h-[260px] rounded-[8px] overflow-hidden relative">
                          <img
                            src={el.imgSrc}
                            alt={altText} // ✅ Уникальный, SEO-дружественный alt
                            className="object-cover h-full w-full"
                          />

                          <div className="absolute bottom-4 bg-[rgba(0,0,0,.6)] mx-[4%] rounded-[8px] px-4 py-2">
                            <span className="text-[16px] font-[500] text-white">
                              {el.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div
              className={cn(
                "absolute top-0 bottom-0 w-16 md:w-30 bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none",
                "right-0 md:right-12"
              )}
            />

            <div
              className={cn(
                "items-center bg-[rgba(0,0,0,.4)] rounded-[8px] px-2 text-white hover:bg-[rgba(0,0,0,.6)] swiper-button-next relative z-11",
                "hidden md:flex"
              )}
            >
              <ChevronRight />
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
