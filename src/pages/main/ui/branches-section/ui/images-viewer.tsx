import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { type BranchDetailDataItemType } from "@/shared/consts/branches-detail-data";
import { XIcon } from "lucide-react";
import { useState } from "react";

interface ImagesViewerProps {
  branch: BranchDetailDataItemType;
  open: boolean;
  onOpenDesktopViewerChange: (idx: number, value: boolean) => void;
  imageIndex?: number;
}

export const ImagesViewer = ({
  branch,
  open,
  onOpenDesktopViewerChange,
  imageIndex = 0,
}: ImagesViewerProps) => {
  const [imagePreview, setImagePreview] = useState<string>(
    branch.data[imageIndex].src
  );

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => onOpenDesktopViewerChange(0, value)}
    >
      <DialogContent className="min-w-[96vw] max-w-[96vw] min-h-[98vh] max-h-[98vh] border-none flex flex-col sm:grid overflow-y-scroll sm:overflow-y-hidden focus:outline-none [&>button]:hidden">
        <DialogTitle className="text-[20px] flex justify-between items-start">
          <span>{branch.name}</span>
          <XIcon
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => onOpenDesktopViewerChange(0, false)}
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
            {branch.data.map((item) => (
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
