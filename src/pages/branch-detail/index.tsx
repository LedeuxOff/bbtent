import { Button } from "@/components/ui/button";
import { BRANCHES_DETAIL_DATA } from "@/shared/consts/branches-detail-data";
import { AppContainer } from "@/shared/ui-kit";
import { useParams, useRouter } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { BranchDetailMobileImagesViewer } from "./mobile-images-viewer";
import { ImagesViewer } from "../main/ui/branches-section/ui/images-viewer";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppGetPriceBanner, EnrollWidget } from "@/widgets";

export const BranchDetailPage = () => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const { id } = useParams({ from: "/$id" });
  const { navigate } = useRouter();

  const branchData = BRANCHES_DETAIL_DATA[id];

  const onOpenDesktopViewerChange = (idx: number, value: boolean) => {
    setImageIndex(idx);
    setOpen(value);
  };

  return (
    <div className="flex flex-col gap-8 pt-28 items-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <div>
            <div className="relative inline-block">
              <div className="flex gap-4 items-center">
                <Button
                  type="button"
                  className="cursor-pointer bg-[#09090973]"
                  onClick={() => navigate({ to: "/" })}
                >
                  <ChevronLeft />
                </Button>
                <span className="text-[38px] font-[700]">
                  {branchData.name}
                </span>
              </div>
              <div className="bg-[#ffd580] h-[2px] absolute w-full" />
            </div>
          </div>

          <div className="shadow-lg border-[1px] rounded-[16px] p-8 flex flex-col gap-6 bg-[#112138cc]">
            <span className="text-[#FFF] text-[18px]">
              {branchData.description}
            </span>

            {id && <EnrollWidget categoryKey={id} />}
          </div>

          <span className="text-[28px] font-[700]">Фото наших работ</span>

          {/* Десктопная верстка изображений */}
          <div className="hidden md:grid grid-cols-4 lg:grid-cols-3 gap-4">
            {branchData.data.map((photo, index) => (
              <img
                key={photo.id}
                src={photo.src}
                className="col-span-2 lg:col-span-1 h-[240px] object-cover w-full rounded-[8px] bg-black hover:opacity-90 cursor-pointer"
                onClick={() => onOpenDesktopViewerChange(index, true)}
              />
            ))}

            {/* Десктопное меню с изображениями */}
            {open && (
              <ImagesViewer
                branch={branchData}
                imageIndex={imageIndex}
                open={open}
                onOpenDesktopViewerChange={onOpenDesktopViewerChange}
              />
            )}
          </div>

          {/* Мобильная верстка изображений */}
          <div className="grid md:hidden grid-cols-1 gap-4">
            {branchData.data.slice(0, 3).map((photo) => (
              <img
                key={photo.id}
                src={photo.src}
                className="col-span-1 h-[280px] object-cover w-full rounded-[8px]"
              />
            ))}

            {/* Мобильное меню с изображениями */}
            {branchData.data.length > 3 && (
              <BranchDetailMobileImagesViewer branch={branchData} />
            )}
          </div>

          <AppGetPriceBanner
            title="Получите расчет стоимости"
            categoryKey={id}
          />

          {branchData.video.length > 0 && (
            <div className="flex flex-col gap-8">
              <span className="text-[28px] font-[700]">Видео наших работ</span>
              <div className="flex w-full flex-col gap-6">
                <Tabs
                  defaultValue={branchData.video[0].value}
                  className="gap-6"
                >
                  <TabsList className="bg-[#09090973] py-6 px-2">
                    {branchData.video.map((video, index) => (
                      <TabsTrigger
                        key={video.value}
                        value={video.value}
                        className="data-[state=active]:bg-[#ffd58077] text-white py-4 px-4"
                      >
                        {`Видео ${index + 1}`}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {branchData.video.map((video) => (
                    <TabsContent key={video.value} value={video.value}>
                      <video
                        height="500"
                        controls
                        className="rounded-[16px] max-h-[600px] w-full bg-[#09090973]"
                      >
                        <source src={video.src} type="video/mp4" />{" "}
                      </video>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          )}

          <div className="pb-8"></div>
        </div>
      </AppContainer>
    </div>
  );
};
