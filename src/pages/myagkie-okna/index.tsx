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
  "/photo/myagkie-okna/1.jpg",
  "/photo/myagkie-okna/2.jpg",
  "/photo/myagkie-okna/3.jpg",
  "/photo/myagkie-okna/4.jpg",
];

export const MyagkieOknaPage = () => {
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
    serviceType: "Изготовление мягких окон из прозрачного ПВХ",
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
      "Изготовление мягких (безрамных) окон из прозрачного ПВХ в г. Энгельс, Саратовская область. Для беседок, веранд, балконов и кафе. Плотность 700–800 г/м², морозоустойчивость до -30°C, защита от УФ. Гарантия до 2 лет. Доставка по России.",
    offers: {
      "@type": "Offer",
      url: "https://bbtent.ru/myagkie-okna",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      {/* ✅ Уникальные мета-теги */}
      <Helmet>
        <title>
          Мягкие окна из ПВХ в Энгельсе — прозрачные тенты на веранду | BBTent
        </title>
        <meta
          name="description"
          content="Изготовление мягких окон из прозрачного ПВХ-ткани в г. Энгельс, Саратовская область. Для беседок, веранд, балконов и кафе. Плотность 700–800 г/м², морозоустойчивость до -30°C, защита от УФ. Гарантия до 2 лет. Доставка по России."
        />
        <link rel="canonical" href="https://bbtent.ru/myagkie-okna" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Мягкие окна из ПВХ в Энгельсе — прозрачные тенты на веранду | BBTent"
        />
        <meta
          property="og:description"
          content="Изготовление мягких окон из прозрачного ПВХ-ткани в г. Энгельс, Саратовская область. Для беседок, веранд, балконов и кафе."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bbtent.ru/myagkie-okna" />
        <meta
          property="og:image"
          content="https://bbtent.ru/photo/myagkie-okna/1.jpg"
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
                    Мягкие окна
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
                Изготавливаем мягкие (безрамные) окна из прозрачной ПВХ-ткани
                плотностью 700–800 г/м². Подходят для беседок, веранд, балконов,
                террас и летних кафе. Материал устойчив к морозу до -30°C,
                УФ-излучению и механическим повреждениям. Используем
                профессиональную фурнитуру: молнии, липучки, люверсы. Гарантия
                до 2 лет.
              </p>

              <EnrollWidget
                categoryKey="myagkie-okna"
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
              Фото мягких окон
            </h2>

            <ImagesViewerWidget images={data} name="Мягкие окна" />

            {/* ✅ Усиленный CTA с гео */}
            <AppGetPriceBanner
              title="Рассчитать стоимость мягких окон"
              categoryKey="myagkie-okna"
            />

            <div className="pb-8"></div>
          </div>
        </AppContainer>
      </div>
    </>
  );
};
