import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface BranchDetailMobileImagesViewerProps {
  data: string[];
  name: string;
}

export const BranchDetailMobileImagesViewer = ({
  data,
  name,
}: BranchDetailMobileImagesViewerProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          size="lg"
          type="button"
          className="bg-[#112138cc] font-[600] border-none text-white cursor-pointer hover:bg-[#112138cc] hover:text-white py-8 px-12 text-[16px] w-full"
        >
          Показать все
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-[rgba(9,9,9,0.45)] backdrop-blur-sm border-0! p-4 max-h-[80vh]!">
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex gap-2 items-center">
              <span className="text-white font-[600] text-[24px]">{name}</span>
            </div>
          </DrawerTitle>
        </DrawerHeader>
        <div className="w-full overflow-scroll px-4">
          <div className="pb-8 flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4">
              {data.map((photo) => (
                <img
                  key={photo}
                  src={photo}
                  className="col-span-1 w-full rounded-[8px]"
                />
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
