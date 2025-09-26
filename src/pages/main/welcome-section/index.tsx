import { AppContainer } from "@/shared/ui-kit";

export const MainPageWelcomeSection = () => {
  return (
    <div className="w-full flex justify-center">
      <AppContainer
        props={{
          className: "flex flex-col gap-12 items-center justify-center",
        }}
      >
        <span className="text-[56px] font-[700]">BBTent</span>
        <span className="text-[32px] text-center max-w-[810px] font-[400]">
          Добро пожаловать в нашу компанию, где мы создаем надежные тенты и
          укрытия, обеспечивающие защиту и комфорт в любых погодных условиях!
        </span>
      </AppContainer>
    </div>
  );
};
