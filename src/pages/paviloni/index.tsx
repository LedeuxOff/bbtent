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
  "/photo/paviloni/1.jpg",
  "/photo/paviloni/2.jpg",
  "/photo/paviloni/3.jpg",
  "/photo/paviloni/4.jpg",
  "/photo/paviloni/5.jpg",
  "/photo/paviloni/6.jpg",
  "/photo/paviloni/7.jpg",
  "/photo/paviloni/8.jpg",
  "/photo/paviloni/9.jpg",
  "/photo/paviloni/10.jpg",
  "/photo/paviloni/11.jpg",
  "/photo/paviloni/12.jpg",
];

export const PaviloniPage = () => {
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
    serviceType: "Изготовление ПВХ-павильонов и летних кафе",
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
      "Изготовление ПВХ-павильонов, летних кафе, навесов и палаток сварщика в г. Энгельс, Саратовская область. ПВХ-ткань 650–900 г/м², прозрачные вставки (мягкие окна), москитные сетки. По чертежам или замерам. Гарантия до 3 лет. Доставка по России.",
    offers: {
      "@type": "Offer",
      url: "https://bbtent.ru/paviloni",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      {/* ✅ Уникальные мета-теги */}
      <Helmet>
        <title>
          Павильоны из ПВХ в Энгельсе — летние кафе и навесы | BBTent
        </title>
        <meta
          name="description"
          content="Изготовление ПВХ-павильонов, летних кафе, навесов и палаток сварщика в г. Энгельс, Саратовская область. ПВХ-ткань 650–900 г/м², прозрачные вставки, москитные сетки. Гарантия до 3 лет. Доставка по РФ."
        />
        <link rel="canonical" href="https://bbtent.ru/paviloni" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Павильоны из ПВХ в Энгельсе — летние кафе и навесы | BBTent"
        />
        <meta
          property="og:description"
          content="Изготовление ПВХ-павильонов, летних кафе, навесов и палаток сварщика в г. Энгельс, Саратовская область. ПВХ-ткань 650–900 г/м², прозрачные вставки, москитные сетки."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bbtent.ru/paviloni" />
        <meta
          property="og:image"
          content="https://bbtent.ru/photo/paviloni/1.jpg"
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
                    Павильоны из ПВХ
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
                Изготавливаем ПВХ-павильоны, летние кафе, навесы и палатки
                сварщика в г. Энгельс, Саратовская область. Используем ПВХ-ткань
                плотностью 650–900 г/м², прозрачные вставки (мягкие окна),
                москитные сетки и усиленную фурнитуру. Работаем по вашим
                чертежам или выполняем замеры на месте. Подходят для рынков,
                ярмарок, дач и уличной торговли. Гарантия до 3 лет. Доставка по
                всей России.
              </p>

              <EnrollWidget
                categoryKey="paviloni"
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
              Фото ПВХ-павильонов
            </h2>

            <ImagesViewerWidget images={data} name="Павильоны" />

            {/* ✅ Усиленный CTA с гео */}
            <AppGetPriceBanner
              title="Рассчитать стоимость павильона в Энгельсе"
              categoryKey="paviloni"
            />

            <div className="pb-8"></div>
          </div>
        </AppContainer>
      </div>
    </>
  );
};
