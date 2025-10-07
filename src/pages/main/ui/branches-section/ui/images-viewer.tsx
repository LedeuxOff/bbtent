import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  PHOTO_DATA,
  type PHOTO_DATA as PHOTO_DATA_TYPE,
} from "@/shared/consts/photo-data";
import { XIcon } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";

interface ImagesViewerProps {
  category: keyof typeof PHOTO_DATA_TYPE;
  setCategory: Dispatch<
    SetStateAction<keyof typeof PHOTO_DATA_TYPE | undefined>
  >;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ImagesViewer = ({
  category,
  setCategory,
  open,
  setOpen,
}: ImagesViewerProps) => {
  const images = PHOTO_DATA[category].data;
  const name = PHOTO_DATA[category].name;

  const [imagePreview, setImagePreview] = useState<string>(images[0].src);

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value) {
          setCategory(undefined);
        }
        setOpen(value);
      }}
    >
      <DialogContent className="min-w-[96vw] max-w-[96vw] min-h-[98vh] max-h-[98vh] border-none flex flex-col sm:grid overflow-y-scroll sm:overflow-y-hidden focus:outline-none [&>button]:hidden">
        <DialogTitle className="text-[20px] flex justify-between items-start">
          <span>{name}</span>
          <XIcon
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => {
              setCategory(undefined);
              setOpen(false);
            }}
          />
        </DialogTitle>
        <div className="hidden sm:block items-center aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img
            src={imagePreview}
            alt="Tertiary Image"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="flex justify-center sm:overflow-x-hidden h-auto">
          <div className="flex flex-col sm:flex-row gap-2 h-auto sm:overflow-x-auto whitespace-nowrap pb-4">
            {images?.map((item) => (
              <div
                key={item?.id}
                className="aspect-w-16 min-w-[180px] aspect-h-9 h-full max-h-[140px] rounded-lg overflow-hidden"
                onMouseEnter={() => setImagePreview(item.src)}
              >
                <img
                  src={item.src}
                  alt="Tertiary Image"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
