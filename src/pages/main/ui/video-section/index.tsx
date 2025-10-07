import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppContainer } from "@/shared/ui-kit";

export const MainPageVideoSection = () => {
  return (
    <div className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span className="text-[38px] font-[700]">Видео наших работы</span>
          <div className="flex w-full flex-col gap-6">
            <Tabs defaultValue="svarka-1" className="gap-6">
              <TabsList className="bg-[#09090973] py-6 px-2">
                <TabsTrigger
                  value="svarka-1"
                  className="data-[state=active]:bg-[#ffd58077] text-white py-4 px-4"
                >
                  Название 1
                </TabsTrigger>
                <TabsTrigger
                  value="svarka-PVH"
                  className="data-[state=active]:bg-[#ffd58077] text-white py-4 px-4"
                >
                  Сварка ПВХ машинкой
                </TabsTrigger>
              </TabsList>
              <TabsContent value="svarka-1">
                <video
                  height="500"
                  controls
                  className="rounded-[16px] max-h-[600px] w-full bg-[#09090973]"
                >
                  <source src="/video/1.mp4" type="video/mp4" />{" "}
                </video>
              </TabsContent>
              <TabsContent value="svarka-PVH">
                <video
                  height="500"
                  controls
                  className="rounded-[16px] max-h-[600px] w-full bg-[#09090973]"
                >
                  <source src="/video/svarka-PVH.mp4" type="video/mp4" />{" "}
                </video>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
