import { AppContainer } from "@/shared/ui-kit";

export const MainPageVideoSection = () => {
  return (
    <div className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span className="text-[38px] font-[700]">Видео нашей работы</span>
          <video height="500" controls className="rounded-[16px]">
            <source src="/video/1.mp4" type="video/mp4" />{" "}
          </video>
        </div>
      </AppContainer>
    </div>
  );
};
