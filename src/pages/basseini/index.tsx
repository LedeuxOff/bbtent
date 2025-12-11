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
  "/photo/basseini/1.jpg",
  "/photo/basseini/2.webp",
  "/photo/basseini/3.jpg",
  "/photo/basseini/4.jpg",
  "/photo/basseini/5.jpg",
  "/photo/basseini/6.jpg",
  "/photo/basseini/7.jpg",
];

export const BasseiniPage = () => {
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
    serviceType: "Изготовление ПВХ-вкладышей и укрытий для бассейнов",
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
      "Производство ПВХ-вкладышей и укрытий для каркасных и стационарных бассейнов в г. Энгельс, Саратовская область. Вкладыши из ПВХ-ткани плотностью 800–900 г/м², крышки от пыли и мусора, защита от УФ и мороза. Гарантия до 3 лет.",
    offers: {
      "@type": "Offer",
      url: "https://bbtent.ru/basseini",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      {/* ✅ Уникальные мета-теги */}
      <Helmet>
        <title>
          ПВХ-вкладыши для бассейнов в Энгельсе — укрытия и крышки | BBTent
        </title>
        <meta
          name="description"
          content="Изготовление ПВХ-вкладышей и укрытий для бассейнов в г. Энгельс, Саратовская область. Вкладыши из ПВХ-ткани плотностью 800–900 г/м², крышки от пыли и мусора. Гарантия до 3 лет. Доставка по России."
        />
        <link rel="canonical" href="https://bbtent.ru/basseini" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="ПВХ-вкладыши для бассейнов в Энгельсе — укрытия и крышки | BBTent"
        />
        <meta
          property="og:description"
          content="Изготовление ПВХ-вкладышей и укрытий для бассейнов в г. Энгельс, Саратовская область. Вкладыши из ПВХ-ткани плотностью 800–900 г/м², крышки от пыли и мусора."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bbtent.ru/basseini" />
        <meta
          property="og:image"
          content="https://bbtent.ru/photo/basseini/1.jpg"
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
                    Бассейны
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
                Изготавливаем ПВХ-вкладыши и укрытия для каркасных и
                стационарных бассейнов. Используем ПВХ-ткань плотностью 800–900
                г/м², устойчивую к УФ, хлору и морозу до -50°C. Делаем вкладыши
                по вашим размерам, а также крышки от пыли, листьев и мусора.
                Сварка горячим воздухом обеспечивает 100% герметичность.
                Гарантия до 3 лет.
              </p>

              <EnrollWidget
                categoryKey="basseini"
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
              Фото ПВХ-вкладышей и укрытий для бассейнов
            </h2>

            <ImagesViewerWidget images={data} name="Бассейны" />

            {/* ✅ Усиленный CTA с гео */}
            <AppGetPriceBanner
              title="Рассчитать стоимость вкладыша для бассейна"
              categoryKey="basseini"
            />

            <div className="pb-8"></div>
          </div>
        </AppContainer>
      </div>
    </>
  );
};
