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
    <div id="#branches" className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span
            ref={ref1}
            className={cn(
              "text-[38px] font-[700] transition-all duration-1000 ease-out",
              inView1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            Наши направления
          </span>

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
                {BRANCHES_DATA.map((el) => (
                  <SwiperSlide
                    key={el.id}
                    style={{ width: CARD_WIDTH }}
                    onClick={() =>
                      navigate({ to: `/$id`, params: { id: el.key } })
                    }
                  >
                    <div className="flex flex-col gap-4 cursor-pointer">
                      <div className="w-full h-[260px] sm:h-[260px] md:h-[280px] lg:h-[260px] rounded-[8px] overflow-hidden relative">
                        <img
                          src={el.imgSrc}
                          alt="image-cover"
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
                ))}
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
