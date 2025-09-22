import { AppContainer } from "@/shared/ui-kit";
import { AppNavigationDesktop, AppNavigationMobile } from "@/widgets";

export const AppHeader = () => {
  return (
    <div className="w-full flex justify-center bg-gray-100">
      <AppContainer>
        <div className="w-full flex justify-between items-center gap-4">
          <div>Logo</div>

          <div className="hidden md:flex">
            <AppNavigationDesktop />
          </div>

          <div className="flex md:hidden">
            <AppNavigationMobile />
          </div>

          <div className="hidden md:flex">Contacts</div>
        </div>
      </AppContainer>
    </div>
  );
};
