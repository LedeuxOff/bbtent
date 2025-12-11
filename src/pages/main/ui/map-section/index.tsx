import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AppContainer } from "@/shared/ui-kit";
import { AtSignIcon, MapIcon, PhoneIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import { Helmet } from "react-helmet-async";

export const MainPageMapSection = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // ✅ JSON-LD микроразметка для LocalBusiness
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BBTent — производство тентов",
    image: "https://bbtent.ru/logo.jpg",
    url: "https://bbtent.ru",
    telephone: ["+79271478165", "+79272286248", "+79063175958"],
    email: "bb.tent@yandex.ru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "г. Энгельс", // ← уточните улицу и дом, если можно
      addressLocality: "Энгельс",
      addressRegion: "Саратовская область",
      postalCode: "413100",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.448858,
      longitude: 46.079523,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "₽₽",
    servesCuisine: undefined, // не для ресторанов
    description:
      "Производство автотентов, укрытий для бассейнов, сельхозтехники и ангаров из ПВХ-ткани в г. Энгельс, Саратовская область. Более 20 лет опыта.",
  };

  return (
    <>
      {/* ✅ Микроразметка LocalBusiness */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessJsonLd)}
        </script>
      </Helmet>

      <div id="contacts" className="w-full flex justify-center">
        {" "}
        {/* ✅ исправлен id */}
        <AppContainer>
          <div className="flex flex-col gap-8">
            {/* ✅ SEO: <h2> */}
            <h2
              ref={ref1}
              className={cn(
                "text-[30px] md:text-[38px] font-[700] transition-all duration-1000 ease-out",
                inView1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              )}
            >
              Контакты
            </h2>

            <div
              className={cn(
                "h-[200px] sm:h-[300px] md:h-[400px] rounded-[16px] overflow-hidden relative transition-all duration-1000 ease-out",
                inView2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              )}
              ref={ref2}
            >
              <div className="hidden md:flex absolute top-8 left-8 p-4 bg-[rgba(9,9,9,0.45)] backdrop-blur-sm z-10 rounded-[16px] flex-col gap-4 shadow-lg text-white">
                <span className="text-[32px] font-[700]">BBTent</span>

                <Separator />

                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 group relative">
                    <PhoneIcon className="group-hover:text-[#ffd580]" />
                    <a
                      href="tel:+79271478165"
                      className="flex gap-2 items-center group-hover:text-[#ffd580] transition-all relative"
                      aria-label="Позвонить: +7 927 147 81 65"
                    >
                      +7 927 147 81 65
                    </a>
                  </div>

                  <div className="flex gap-2 group relative">
                    <PhoneIcon className="group-hover:text-[#ffd580]" />
                    <a
                      href="tel:+79272286248"
                      className="flex gap-2 items-center group-hover:text-[#ffd580] transition-all relative"
                      aria-label="Позвонить: +7 927 228 62 48"
                    >
                      +7 927 228 62 48
                    </a>
                  </div>

                  <div className="flex gap-2 group relative">
                    <PhoneIcon className="group-hover:text-[#ffd580]" />
                    <a
                      href="tel:+79063175958"
                      className="flex gap-2 items-center group-hover:text-[#ffd580] transition-all relative"
                      aria-label="Позвонить: +7 906 317 59 58"
                    >
                      +7 906 317 59 58
                    </a>
                  </div>

                  <div className="flex gap-2 group relative">
                    <AtSignIcon className="group-hover:text-[#ffd580]" />
                    <a
                      href="mailto:bb.tent@yandex.ru"
                      className="flex gap-2 items-center group-hover:text-[#ffd580] transition-all relative"
                      aria-label="Написать на почту"
                    >
                      bb.tent@yandex.ru
                    </a>
                  </div>
                </div>

                <Separator />

                {/* ✅ Семантический адрес */}
                <address className="not-italic flex gap-2 items-center">
                  <MapIcon /> Саратовская область, г. Энгельс
                </address>
              </div>

              <YMaps>
                <Map
                  width="100%"
                  height="100%"
                  defaultState={{
                    center: [51.448858, 46.079523],
                    zoom: 15,
                  }}
                >
                  <Placemark geometry={[51.448858, 46.079523]} />
                </Map>
              </YMaps>
            </div>

            {/* Мобильная версия */}
            <div className="flex md:hidden p-4 bg-[rgba(9,9,9,0.45)] backdrop-blur-sm z-10 rounded-[16px] flex-col gap-4 shadow-lg text-white">
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+79271478165"
                  className="flex gap-2 items-center"
                  aria-label="Позвонить"
                >
                  <PhoneIcon /> +7 927 147 81 65
                </a>
                <a
                  href="tel:+79272286248"
                  className="flex gap-2 items-center"
                  aria-label="Позвонить"
                >
                  <PhoneIcon /> +7 927 228 62 48
                </a>
                <a
                  href="tel:+79063175958"
                  className="flex gap-2 items-center"
                  aria-label="Позвонить"
                >
                  <PhoneIcon /> +7 906 317 59 58
                </a>
                <a
                  href="mailto:bb.tent@yandex.ru"
                  className="flex gap-2 items-center"
                  aria-label="Написать на почту"
                >
                  <AtSignIcon /> bb.tent@yandex.ru
                </a>
              </div>

              <Separator />

              <div className="flex gap-4">
                <a
                  href="https://wa.me/79271478165"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Написать в WhatsApp"
                >
                  <img
                    src="/messengers/whats-app.png"
                    alt="WhatsApp"
                    className="w-10"
                  />
                </a>
                {/* TODO: добавить ссылку на Telegram */}
                <a
                  href="https://t.me/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Написать в Telegram"
                >
                  <img
                    src="/messengers/telegramm.png"
                    alt="Telegram"
                    className="w-10"
                  />
                </a>
              </div>

              <Separator />

              <address className="not-italic flex gap-2 items-center">
                <MapIcon /> Саратовская область, г. Энгельс
              </address>
            </div>
          </div>
        </AppContainer>
      </div>
    </>
  );
};
