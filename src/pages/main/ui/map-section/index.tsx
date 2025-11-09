import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AppContainer } from "@/shared/ui-kit";
import { AtSignIcon, MapIcon, PhoneIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Map, Placemark, YMaps } from "react-yandex-maps";

export const MainPageMapSection = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div id="#contacts" className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span
            ref={ref1}
            className={cn(
              "text-[38px] font-[700] transition-all duration-1000 ease-out",
              inView1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            Контакты
          </span>

          <div
            className={cn(
              "h-[200px] sm:h-[300px] md:h-[400px] rounded-[16px] overflow-hidden relative transition-all duration-1000 ease-out",
              inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
            ref={ref2}
          >
            <div className="hidden md:flex absolute top-8 left-8 p-4 bg-[rgba(9,9,9,0.45)] backdrop-blur-sm z-10 rounded-[16px] flex-col gap-4 shadow-lg text-white">
              <span className="text-[32px] font-[700]">BBTent</span>

              <Separator />

              <div className="flex flex-col gap-4">
                <div className="flex gap-2 group relative">
                  <PhoneIcon className="group-hover:text-[#ffd580]" />
                  <a
                    href="tel:+79271478165"
                    className="flex gap-2 items-center group-hover:text-[#ffd580] transition-all relative"
                  >
                    +7 927 147 81 65
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#ffd580] transition-all duration-300 w-0 group-hover:w-full`}
                    />
                  </a>
                </div>

                <div className="flex gap-2 group relative">
                  <PhoneIcon className="group-hover:text-[#ffd580]" />
                  <a
                    href="tel:+79272286248"
                    className="flex gap-2 items-center group-hover:text-[#ffd580] transition-all relative"
                  >
                    +7 927 228 62 48
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#ffd580] transition-all duration-300 w-0 group-hover:w-full`}
                    />
                  </a>
                </div>

                <div className="flex gap-2 group relative">
                  <PhoneIcon className="group-hover:text-[#ffd580]" />
                  <a
                    href="tel:+79063175958"
                    className="flex gap-2 items-center group-hover:text-[#ffd580] transition-all relative"
                  >
                    +7 906 317 59 58
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#ffd580] transition-all duration-300 w-0 group-hover:w-full`}
                    />
                  </a>
                </div>

                <div className="flex gap-2 group relative">
                  <AtSignIcon className="group-hover:text-[#ffd580]" />
                  <a
                    href="mailto:bokovandrey0015@gmail.com"
                    className="flex gap-2 items-center group-hover:text-[#ffd580] transition-all relative"
                  >
                    bb.tent@yandex.ru
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#ffd580] transition-all duration-300 w-0 group-hover:w-full`}
                    />
                  </a>
                </div>
              </div>

              <Separator />

              <span className="flex gap-2 items-center">
                <MapIcon /> Саратовская область , г. Энгельс
              </span>
            </div>
            <YMaps>
              <Map
                width="100%"
                height="100%"
                defaultState={{
                  center: [51.448858, 46.079523],
                  zoom: 15,
                }}
              >
                <Placemark geometry={[51.448858, 46.079523]} />
              </Map>
            </YMaps>
          </div>

          <div className="flex md:hidden p-4 bg-[rgba(9,9,9,0.45)] backdrop-blur-sm z-10 rounded-[16px] flex-col gap-4 shadow-lg text-white">
            <div className="flex flex-col gap-4">
              <a href="tel:+79271478165" className="flex gap-2 items-center">
                <PhoneIcon /> +7 927 147 81 65
              </a>

              <a href="tel:+79272286248" className="flex gap-2 items-center">
                <PhoneIcon /> +7 927 228 62 48
              </a>

              <a href="tel:+79063175958" className="flex gap-2 items-center">
                <PhoneIcon /> +7 906 317 59 58
              </a>

              <a
                href="mailto:bokovandrey0015@gmail.com"
                className="flex gap-2 items-center"
              >
                <AtSignIcon /> bb.tent@yandex.ru
              </a>
            </div>

            <Separator />

            <div className="flex gap-4">
              <a href="https://wa.me/79271478165" target="_blank">
                <img src="/messengers/whats-app.png" className="w-10" />
              </a>

              {/* TODO: добавить ссылку на телеграм группу */}
              <a>
                <img src="/messengers/telegramm.png" className="w-10" />
              </a>
            </div>

            <Separator />

            <span className="flex gap-2 items-center">
              <MapIcon /> Саратовская область , г. Энгельс
            </span>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
