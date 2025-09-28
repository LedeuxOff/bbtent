import { Separator } from "@/components/ui/separator";
import { AppContainer } from "@/shared/ui-kit";
import { AtSignIcon, MapIcon, PhoneIcon } from "lucide-react";
import { Map, Placemark, YMaps } from "react-yandex-maps";

export const MainPageMapSection = () => {
  return (
    <div className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span className="text-[38px] font-[700]">Контакты</span>

          <div className="h-[400px] rounded-[16px] overflow-hidden relative">
            <div className="absolute top-8 left-8 p-4 bg-[rgba(9,9,9,0.45)] backdrop-blur-sm z-10 rounded-[16px] flex flex-col gap-4 shadow-lg text-white">
              <span className="text-[32px] font-[700]">BBTent</span>

              <Separator />

              <div className="flex flex-col gap-4">
                <span className="flex gap-2 items-center">
                  <PhoneIcon /> +7 927 228 62 48
                </span>

                <span className="flex gap-2 items-center">
                  <PhoneIcon /> +7 906 317 59 58
                </span>

                <span className="flex gap-2 items-center">
                  <AtSignIcon /> bokovandrey0015@gmail.com
                </span>
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
        </div>
      </AppContainer>
    </div>
  );
};
