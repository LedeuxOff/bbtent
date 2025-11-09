import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { AppContainer } from "@/shared/ui-kit";
import { useInView } from "react-intersection-observer";

export const MainPageVideoSection = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span
            ref={ref1}
            className={cn(
              "text-[38px] font-[700] transition-all duration-1000 ease-out",
              inView1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            Видео наших работ
          </span>
          <div className="flex w-full flex-col gap-6">
            <Tabs defaultValue="svarka-1" className="gap-6">
              <TabsList
                ref={ref2}
                className={cn(
                  "bg-[#09090973] py-6 px-2 transition-all duration-1000 ease-out",
                  inView2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                )}
              >
                <TabsTrigger
                  value="svarka-1"
                  className="data-[state=active]:bg-[#ffd58077] text-white py-4 px-4"
                >
                  Сварка геомембраны
                </TabsTrigger>
                <TabsTrigger
                  value="svarka-PVH"
                  className="data-[state=active]:bg-[#ffd58077] text-white py-4 px-4"
                >
                  Сварка ПВХ
                </TabsTrigger>
              </TabsList>
              <TabsContent
                ref={ref3}
                value="svarka-1"
                className={cn(
                  "transition-all duration-1000 ease-out",
                  inView3
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
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
