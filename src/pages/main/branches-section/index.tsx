//@ts-expect-error-swiper-css
import "swiper/css";
//@ts-expect-error-swiper-autoplay
import "swiper/css/autoplay";
//@ts-expect-error-swiper-pagination
import "swiper/css/pagination";

import { BRANCHES_DATA } from "@/shared/consts";
import { useResponsiveValues } from "@/shared/libs/use-responsive-values";
import { AppContainer } from "@/shared/ui-kit";
import { useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImagesViewer } from "./ui/images-viewer";
import type { PHOTO_DATA } from "@/shared/consts/photo-data";

export const MainPageBranchesSection = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<keyof typeof PHOTO_DATA | undefined>(
    undefined
  );
  const swiperRef = useRef<HTMLDivElement>(null);
  const { cardWidth: CARD_WIDTH } = useResponsiveValues({
    aspect: "16/9",
  });

  return (
    <>
      <div className="w-full flex justify-center">
        <AppContainer>
          <div className="flex flex-col gap-8">
            <span className="text-[38px] font-[700]">Наши направления</span>

            <div className="flex gap-2 relative">
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
                    <SwiperSlide key={el.id} style={{ width: CARD_WIDTH }}>
                      <div className="flex flex-col gap-4 group">
                        <div className="w-full h-[260px] sm:h-[260px] md:h-[280px] lg:h-[260px] rounded-[8px] overflow-hidden relative bg-[#000]">
                          <img
                            src={el.imgSrc}
                            alt="image-cover"
                            className="object-cover h-full w-full opacity-100 group-hover:opacity-50"
                          />

                          <div className="absolute bottom-4 bg-[rgba(0,0,0,.6)] mx-[4%] rounded-[8px] px-4 py-2">
                            <span className="text-[16px] font-[500] text-white">
                              {el.label}
                            </span>
                          </div>

                          <div
                            onClick={() => {
                              setCategory(el.key);
                              setOpen(true);
                            }}
                            className="hidden group-hover:flex absolute top-1/2 left-1/2 transform -translate-1/2 bg-[rgba(0,0,0,.6)] rounded-[8px] px-4 py-2 cursor-pointer"
                          >
                            <span className="text-[20px] font-[500] text-white">
                              {el.photoCount} Фото
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

      {open && category && (
        <ImagesViewer
          open={open}
          setOpen={setOpen}
          category={category}
          setCategory={setCategory}
        />
      )}
    </>
  );
};
