import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { AppContainer } from "@/shared/ui-kit";
import { AppGetPriceBanner, EnrollWidget } from "@/widgets";
import { ImagesViewerWidget } from "@/widgets/images-viewer";
import { useRouter } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";

const data = [
  "/photo/laguni/1.jpg",
  "/photo/laguni/2.jpg",
  "/photo/laguni/3.jpg",
  "/photo/laguni/4.jpg",
  "/photo/laguni/5.jpg",
  "/photo/laguni/6.jpg",
  "/photo/laguni/7.jpg",
  "/photo/laguni/8.jpg",
  "/photo/laguni/9.jpg",
  "/photo/laguni/10.jpg",
  "/photo/laguni/11.jpg",
  "/photo/laguni/12.jpg",
  "/photo/laguni/13.jpg",
  "/photo/laguni/14.jpg",
];

const video = [
  {
    value: "laguni-1",
    src: "/video/laguni-1.mp4",
    title: "Гидроизоляция лагуны ПВХ-мембраной — BBTent, Энгельс",
  },
  {
    value: "laguni-2",
    src: "/video/laguni-2.mp4",
    title:
      "Сварка геомембраны для нефтеамбара — производство в Саратовской области",
  },
  {
    value: "laguni-3",
    src: "/video/laguni-3.mp4",
    title: "Проверка швов на герметичность — лагуны и водоёмы",
  },
];

export const LaguniPage = () => {
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

  const { ref: ref5, inView: inView5 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // ✅ JSON-LD микроразметка
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      "Гидроизоляция лагун и промышленных объектов ПВХ и геомембраной",
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
      "Гидроизоляция лагун, нефтеамбаров, шламовых амбаров, фундаментов и водоёмов в г. Энгельс, Саратовская область. Используем ПВХ-мембрану (1200–1500 г/м²), геомембрану, ПП/ПЭ. Термосварка, проверка швов, гарантия до 15 лет.",
    offers: {
      "@type": "Offer",
      url: "https://bbtent.ru/laguni",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      {/* ✅ Уникальные мета-теги */}
      <Helmet>
        <title>
          Гидроизоляция лагун в Энгельсе — ПВХ и геомембрана для амбаров |
          BBTent
        </title>
        <meta
          name="description"
          content="Гидроизоляция лагун, нефтеамбаров, шламовых амбаров и фундаментов в г. Энгельс, Саратовская область. ПВХ-мембрана 1200–1500 г/м², геомембрана, термосварка, проверка швов. Гарантия до 15 лет. Доставка по РФ."
        />
        <link rel="canonical" href="https://bbtent.ru/laguni" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Гидроизоляция лагун в Энгельсе — ПВХ и геомембрана для амбаров | BBTent"
        />
        <meta
          property="og:description"
          content="Гидроизоляция лагун, нефтеамбаров, шламовых амбаров и фундаментов в г. Энгельс, Саратовская область. ПВХ-мембрана 1200–1500 г/м², геомембрана, термосварка."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bbtent.ru/laguni" />
        <meta
          property="og:image"
          content="https://bbtent.ru/photo/laguni/1.jpg"
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
                    Гидроизоляция лагун
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
                Выполняем гидроизоляцию лагун, нефтеамбаров, шламовых амбаров,
                фундаментов и промышленных водоёмов. Используем ПВХ-мембрану
                (1200–1500 г/м²), геомембрану, полипропилен (ПП) и полиэтилен
                (ПЭ). Все швы выполняем методом термосварки на профессиональном
                оборудовании, проводим проверку герметичности (вакуум, искровой
                тест). Гарантия на работу — до 15 лет.
              </p>

              <EnrollWidget
                categoryKey="laguni"
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
              Фото гидроизоляции лагун
            </h2>

            <ImagesViewerWidget images={data} name="Лагуны" />

            {/* ✅ Усиленный CTA */}
            <AppGetPriceBanner
              title="Рассчитать стоимость гидроизоляции лагуны"
              categoryKey="laguni"
            />

            {/* ✅ Видео секция */}
            <div className="flex flex-col gap-8">
              <h2
                ref={ref5}
                className={cn(
                  "text-[30px] md:text-[38px] font-[700] transition-all duration-1000 ease-out",
                  inView5
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                )}
              >
                Видео гидроизоляции лагун
              </h2>

              <div className="flex w-full flex-col gap-6">
                <Tabs defaultValue={video[0].value} className="gap-6">
                  <TabsList className="bg-[#09090973] py-6 px-2">
                    {video.map((v, index) => (
                      <TabsTrigger
                        key={v.value}
                        value={v.value}
                        className="data-[state=active]:bg-[#ffd58077] text-white py-4 px-4"
                      >
                        {`Видео ${index + 1}`}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {video.map((v) => (
                    <TabsContent key={v.value} value={v.value}>
                      <video
                        height="500"
                        controls
                        title={v.title}
                        aria-label={v.title}
                        className="rounded-[16px] max-h-[600px] w-full bg-[#09090973]"
                      >
                        <source src={v.src} type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                      </video>

                      {/* ✅ Скрытый SEO-текст для видео */}
                      <div className="sr-only">
                        <p>
                          {v.title}. Процесс гидроизоляции промышленных объектов
                          методом термосварки ПВХ-мембраны и геомембраны на
                          производстве BBTent в г. Энгельс, Саратовская область.
                        </p>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>

            <div className="pb-8"></div>
          </div>
        </AppContainer>
      </div>
    </>
  );
};
