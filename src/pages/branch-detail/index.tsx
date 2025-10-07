import { Button } from "@/components/ui/button";
import { BRANCHES_DETAIL_DATA } from "@/shared/consts/branches-detail-data";
import { AppContainer } from "@/shared/ui-kit";
import { useParams, useRouter } from "@tanstack/react-router";
import { BadgeRussianRubleIcon, ChevronLeft } from "lucide-react";
import { BranchDetailMobileImagesViewer } from "./mobile-images-viewer";
import { ImagesViewer } from "../main/ui/branches-section/ui/images-viewer";
import { useState } from "react";

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

            <div>
              <Button
                type="button"
                size="lg"
                className="bg-[#ffd58077] font-[600] border-none text-white cursor-pointer hover:bg-[#ffd580AA] hover:text-white py-8 px-12 text-[16px]"
              >
                <BadgeRussianRubleIcon className="w-10! h-10!" />
                Расчет стоимости
              </Button>
            </div>
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
        </div>
      </AppContainer>
    </div>
  );
};
