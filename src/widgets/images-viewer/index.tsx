import { cn } from "@/lib/utils";
import { ImagesViewer } from "./images-viewer";
import { BranchDetailMobileImagesViewer } from "@/widgets/images-viewer/mobile-images-viewer";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

interface ImagesViewerWidgetProps {
  images: string[];
  name: string;
}

export const ImagesViewerWidget = ({
  images,
  name,
}: ImagesViewerWidgetProps) => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const onOpenDesktopViewerChange = (idx: number, value: boolean) => {
    setImageIndex(idx);
    setOpen(value);
  };
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <div
        ref={ref1}
        className="hidden md:grid grid-cols-4 lg:grid-cols-3 gap-4"
      >
        {images.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            className={cn(
              "col-span-2 lg:col-span-1 h-[240px] object-cover w-full rounded-[8px] bg-black hover:opacity-90 cursor-pointer transition-all duration-1000 ease-out",
              inView1 ? "opacity-100" : "opacity-0"
            )}
            onClick={() => onOpenDesktopViewerChange(index, true)}
          />
        ))}

        {/* Десктопное меню с изображениями */}
        {open && (
          <ImagesViewer
            data={images}
            name={name}
            imageIndex={imageIndex}
            open={open}
            onOpenDesktopViewerChange={onOpenDesktopViewerChange}
          />
        )}
      </div>

      {/* Мобильная верстка изображений */}
      <div ref={ref2} className="grid md:hidden grid-cols-1 gap-4">
        {images.slice(0, 3).map((photo) => (
          <img
            key={photo}
            src={photo}
            className={cn(
              "col-span-1 h-[280px] object-cover w-full rounded-[8px] transition-all duration-1000 ease-out",
              inView2 ? "opacity-100" : "opacity-0"
            )}
          />
        ))}

        {/* Мобильное меню с изображениями */}
        {images.length > 3 && (
          <BranchDetailMobileImagesViewer data={images} name={name} />
        )}
      </div>
    </>
  );
};
