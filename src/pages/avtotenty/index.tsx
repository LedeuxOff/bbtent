import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AppContainer } from "@/shared/ui-kit";
import { AppGetPriceBanner, EnrollWidget } from "@/widgets";
import { ImagesViewerWidget } from "@/widgets/images-viewer";
import { useRouter } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";

const data = [
  "/photo/pricepi/1.jpg",
  "/photo/pricepi/2.jpg",
  "/photo/pricepi/3.jpg",
  "/photo/pricepi/4.jpg",
  "/photo/pricepi/5.jpg",
  "/photo/pricepi/6.jpg",
  "/photo/pricepi/7.jpg",
  "/photo/pricepi/8.jpg",
  "/photo/pricepi/9.jpg",
  "/photo/pricepi/10.jpg",
  "/photo/pricepi/11.jpg",
  "/photo/pricepi/12.jpg",
  "/photo/pricepi/13.jpg",
  "/photo/pricepi/14.jpg",
  "/photo/pricepi/15.jpg",
  "/photo/pricepi/16.jpg",
  "/photo/pricepi/17.jpg",
  "/photo/pricepi/18.jpg",
  "/photo/furi/1.jpg",
  "/photo/furi/2.jpg",
  "/photo/furi/3.jpg",
  "/photo/furi/4.jpg",
  "/photo/furi/5.jpg",
];

export const AvtotentyPage = () => {
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
    serviceType: "Изготовление автотентов из ПВХ-ткани",
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
      "Производство автотентов из ПВХ-ткани в г. Энгельс, Саратовская область. Тенты на автомобили, фуры, спецтехнику по индивидуальным размерам. Сварка горячим воздухом, плотность ткани 630–900 г/м², гарантия до 3 лет.",
    offers: {
      "@type": "Offer",
      url: "https://bbtent.ru/auto",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      {/* ✅ Уникальные мета-теги */}
      <Helmet>
        <title>
          Производство автотентов в Энгельсе — ПВХ-тенты на авто и фуры | BBTent
        </title>
        <meta
          name="description"
          content="Изготовление автотентов из ПВХ-ткани в г. Энгельс, Саратовская область. Тенты на автомобили, фуры, прицепы и спецтехнику по вашим размерам. Сварка горячим воздухом, плотность 630–900 г/м², гарантия до 3 лет. Доставка по России."
        />
        <link rel="canonical" href="https://bbtent.ru/auto" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Производство автотентов в Энгельсе — ПВХ-тенты на авто и фуры | BBTent"
        />
        <meta
          property="og:description"
          content="Изготовление автотентов из ПВХ-ткани в г. Энгельс, Саратовская область. Тенты на автомобили, фуры, прицепы и спецтехнику по вашим размерам."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bbtent.ru/auto" />
        <meta
          property="og:image"
          content="https://bbtent.ru/photo/pricepi/1.jpg"
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
                    Автотенты
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
                Изготавливаем автотенты из высококачественной ПВХ-ткани
                (плотность 630–900 г/м²). Тенты на легковые авто, фуры, прицепы,
                спецтехнику и прицепы — по вашим чертежам или нашим замерам.
                Используем сварку горячим воздухом (прочнее сшивки), усиленные
                люверсы, стропы и ленты. Гарантия до 3 лет.
              </p>

              <EnrollWidget
                categoryKey="auto"
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
              Фото автотентов
            </h2>

            <ImagesViewerWidget images={data} name="Автотенты" />

            {/* ✅ Усиленный CTA с гео */}
            <AppGetPriceBanner
              title="Рассчитать стоимость автотента"
              categoryKey="auto"
            />

            <div className="pb-8"></div>
          </div>
        </AppContainer>
      </div>
    </>
  );
};
