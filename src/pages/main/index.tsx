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
import { Helmet } from "react-helmet-async";

export const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Производство тентов в Энгельсе — Автотенты, Укрытия | BBTent
        </title>
        <meta
          name="description"
          content="Официальный сайт BBTent — производство автотентов, укрытий для бассейнов, техники и сельхозназначения в г. Энгельс, Саратовская область. Более 20 лет опыта. Гарантия качества, доставка по РФ."
        />
        <link rel="canonical" href="https://bbtent.ru" />
        <meta
          property="og:title"
          content="Производство тентов в Энгельсе — Автотенты, Укрытия | BBTent"
        />
        <meta
          property="og:description"
          content="Официальный сайт BBTent — производство автотентов, укрытий для бассейнов, техники и сельхозназначения в г. Энгельс, Саратовская область. Более 20 лет опыта."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bbtent.ru" />
        <meta property="og:image" content="https://bbtent.ru/og-image.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="flex flex-col gap-8 pt-28 overflow-hidden">
        <MainPageWelcomeSection />
        <MainPageAboutSection />
        <MainPageBranchesSection />
        <MainPageGetPriceSection />
        <MainPageFeedbackSection />
        <MainPageFAQSection />
        <MainPageVideoSection />
        <MainPageMapSection />
      </div>
    </>
  );
};
