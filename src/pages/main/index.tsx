import {
  MainPageAboutSection,
  MainPageBranchesSection,
  MainPageFeedbackSection,
  MainPageGetPriceSection,
  MainPageMapSection,
  MainPageVideoSection,
  MainPageWelcomeSection,
} from "./ui";
import { MainPageFAQSection } from "./ui/faq-section";

export const MainPage = () => {
  return (
    <div className="flex flex-col gap-8 pt-28">
      <MainPageWelcomeSection />
      <MainPageAboutSection />
      <MainPageBranchesSection />
      <MainPageGetPriceSection />
      <MainPageFeedbackSection />
      <MainPageFAQSection />
      <MainPageVideoSection />
      <MainPageMapSection />
    </div>
  );
};
