import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AppContainer } from "@/shared/ui-kit";
import { AppGetPriceBanner, EnrollWidget } from "@/widgets";
import { ImagesViewerWidget } from "@/widgets/images-viewer";
import { useRouter } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

const data = [
  "/photo/angari/1.jpg",
  "/photo/angari/2.jpg",
  "/photo/angari/3.jpg",
  "/photo/angari/4.jpg",
  "/photo/angari/5.jpg",
  "/photo/angari/6.jpg",
  "/photo/angari/7.jpg",
  "/photo/angari/8.jpg",
  "/photo/angari/9.jpg",
];

export const AngariPage = () => {
  const { navigate } = useRouter();

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

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // ✅ JSON-LD для услуги
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Изготовление тентовых ангаров из ПВХ-ткани",
    provider: {
      "@type": "LocalBusiness",
      name: "BBTent",
      url: "https://bbtent.ru",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Энгельс",
        addressRegion: "Саратовская область",
        addressCountry: "RU",
      },
    },
    areaServed: "RU",
    description:
      "Производство и монтаж тентовых ангаров из ПВХ-ткани в г. Энгельс, Саратовская область. Ангары любой формы и размера под снеговую и ветровую нагрузку. Гарантия качества, доставка по России.",
    offers: {
      "@type": "Offer",
      url: "https://bbtent.ru/angari",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      {/* ✅ Уникальные мета-теги */}
      <Helmet>
        <title>
          Производство тентовых ангаров в Энгельсе — ПВХ-ангары под ключ |
          BBTent
        </title>
        <meta
          name="description"
          content="Изготовление тентовых ангаров из ПВХ-ткани в г. Энгельс, Саратовская область. Ангары любой формы и размера под снеговую и ветровую нагрузку. Гарантия, монтаж, доставка по РФ."
        />
        <link rel="canonical" href="https://bbtent.ru/angari" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Производство тентовых ангаров в Энгельсе — ПВХ-ангары под ключ | BBTent"
        />
        <meta
          property="og:description"
          content="Изготовление тентовых ангаров из ПВХ-ткани в г. Энгельс, Саратовская область. Ангары любой формы и размера под снеговую и ветровую нагрузку."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bbtent.ru/angari" />
        <meta
          property="og:image"
          content="https://bbtent.ru/photo/angari/1.jpg"
        />
        <meta property="og:locale" content="ru_RU" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(serviceJsonLd)}
        </script>
      </Helmet>

      <div className="flex flex-col gap-8 pt-28 items-center">
        <AppContainer>
          <div className="flex flex-col gap-8">
            <div
              ref={ref1}
              className={cn(
                "transition-all duration-1000 ease-out",
                inView1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              )}
            >
              <div className="relative inline-block">
                <div className="flex gap-4 items-center">
                  <Button
                    type="button"
                    className="cursor-pointer bg-[#09090973]"
                    onClick={() => navigate({ to: "/" })}
                  >
                    <ChevronLeft />
                  </Button>
                  {/* ✅ <h1> с ключевым запросом */}
                  <h1 className="text-[30px] md:text-[38px] font-[700]">
                    Производство тентовых ангаров
                  </h1>
                </div>
                <div className="bg-[#ffd580] h-[2px] absolute w-full" />
              </div>
            </div>

            <div
              ref={ref2}
              className={cn(
                "shadow-lg border-[1px] rounded-[16px] p-8 flex flex-col gap-6 bg-[#112138cc]"
              )}
            >
              <p
                className={cn(
                  "text-[#FFF] text-[18px] transition-all duration-1000 ease-out",
                  inView2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                Изготовление и монтаж тентовых ангаров из ПВХ-ткани в г.
                Энгельс, Саратовская область. Ангары любой конструкции и
                размеров, с учётом снеговой и ветровой нагрузки региона.
                Используем ПВХ-ткань плотностью 630–900 г/м², сварку горячим
                воздухом, усиленные стропы и фурнитуру. Гарантия до 3 лет.
                Доставка по России.
              </p>

              <EnrollWidget
                categoryKey="angari"
                ref={ref3}
                className={cn(
                  "transition-all duration-1000 ease-out",
                  inView3
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                )}
              />
            </div>

            {/* ✅ <h2> для фото */}
            <h2
              ref={ref4}
              className={cn(
                "text-[30px] md:text-[38px] font-[700] transition-all duration-1000 ease-out",
                inView4
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              )}
            >
              Фото тентовых ангаров
            </h2>

            {/* Десктопная верстка изображений */}
            <ImagesViewerWidget images={data} name="Ангары" />

            {/* Баннер получения стоимости */}
            <AppGetPriceBanner
              title="Рассчитать стоимость тентового ангара в Энгельсе"
              categoryKey="angari"
            />

            <div className="pb-8"></div>
          </div>
        </AppContainer>
      </div>
    </>
  );
};
