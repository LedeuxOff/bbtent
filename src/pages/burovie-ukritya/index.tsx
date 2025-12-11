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
  "/photo/burovie-ukritya/1.jpg",
  "/photo/burovie-ukritya/2.jpg",
  "/photo/burovie-ukritya/3.jpg",
  "/photo/burovie-ukritya/4.jpg",
  "/photo/burovie-ukritya/5.jpg",
  "/photo/burovie-ukritya/6.jpg",
  "/photo/burovie-ukritya/7.jpg",
  "/photo/burovie-ukritya/8.jpg",
  "/photo/burovie-ukritya/9.jpg",
];

export const BurovieUkrityaPage = () => {
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

  // ✅ JSON-LD микроразметка
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Производство буровых укрытий из ПВХ-ткани",
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
      "Изготовление утеплённых буровых укрытий из ПВХ-ткани в г. Энгельс, Саратовская область. Укрытия для буровых установок, вышек и оборудования с возможностью быстрого монтажа/демонтажа. Плотность ткани 900–1100 г/м², утеплитель 50–100 мм, морозоустойчивость до -50°C. Гарантия до 3 лет.",
    offers: {
      "@type": "Offer",
      url: "https://bbtent.ru/burovie-ukritya",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      {/* ✅ Уникальные мета-теги */}
      <Helmet>
        <title>
          Буровые укрытия из ПВХ в Энгельсе — утеплённые промышленные тенты |
          BBTent
        </title>
        <meta
          name="description"
          content="Производство буровых укрытий из ПВХ-ткани в г. Энгельс, Саратовская область. Утеплённые укрытия для буровых установок с быстрым монтажом, плотность 900–1100 г/м², морозоустойчивость до -50°C. Гарантия до 3 лет. Доставка по России."
        />
        <link rel="canonical" href="https://bbtent.ru/burovie-ukritya" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Буровые укрытия из ПВХ в Энгельсе — утеплённые промышленные тенты | BBTent"
        />
        <meta
          property="og:description"
          content="Производство буровых укрытий из ПВХ-ткани в г. Энгельс, Саратовская область. Утеплённые укрытия для буровых установок с быстрым монтажом, плотность 900–1100 г/м²."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bbtent.ru/burovie-ukritya" />
        <meta
          property="og:image"
          content="https://bbtent.ru/photo/burovie-ukritya/1.jpg"
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
                    Буровые укрытия
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
                Изготавливаем утеплённые буровые укрытия из ПВХ-ткани плотностью
                900–1100 г/м². Укрытия для буровых вышек, установок и
                оборудования с возможностью быстрого монтажа и демонтажа.
                Используем утеплитель 50–100 мм, морозоустойчивую фурнитуру и
                сварку горячим воздухом. Работаем по чертежам заказчика или
                выполняем замеры на месте. Гарантия до 3 лет.
              </p>

              <EnrollWidget
                categoryKey="burovie-ukritya"
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
              Фото буровых укрытий
            </h2>

            <ImagesViewerWidget images={data} name="Буровые укрытия" />

            {/* ✅ Усиленный CTA с гео */}
            <AppGetPriceBanner
              title="Рассчитать стоимость бурового укрытия"
              categoryKey="burovie-ukritya"
            />

            <div className="pb-8"></div>
          </div>
        </AppContainer>
      </div>
    </>
  );
};
