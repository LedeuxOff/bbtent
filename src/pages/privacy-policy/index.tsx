import { Button } from "@/components/ui/button";
import { AppContainer } from "@/shared/ui-kit";
import { ChevronLeft } from "lucide-react";

export const PrivacyPolicyPage = () => {
  return (
    <div className="flex justify-center pt-28">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <div>
            <div className="relative inline-block">
              <div className="flex gap-4 items-center">
                <Button
                  type="button"
                  className="cursor-pointer bg-[#09090973]"
                  onClick={() => window.history.back()}
                >
                  <ChevronLeft />
                </Button>
                <span className="text-[38px] font-[700]">
                  Политика конфиденциальности
                </span>
              </div>
              <div className="bg-[#ffd580] h-[2px] absolute w-full" />
            </div>
          </div>

          <div className="shadow-lg border-[1px] rounded-[16px] p-8 flex flex-col gap-6 bg-[#112138cc]">
            <span className="text-[#FFF] text-[18px]">
              Раздел находится в разработке
            </span>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
