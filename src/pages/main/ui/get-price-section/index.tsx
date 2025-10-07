import { AppContainer } from "@/shared/ui-kit";
import { AppGetPriceBanner } from "@/widgets";

export const MainPageGetPriceSection = () => {
  return (
    <div className="w-full flex justify-center">
      <AppContainer>
        <AppGetPriceBanner />
      </AppContainer>
    </div>
  );
};
