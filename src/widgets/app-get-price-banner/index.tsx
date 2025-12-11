import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { EnrollWidget } from "../enroll";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface AppGetPriceBannerProps {
  title?: string;
  categoryKey?: string;
}

export const AppGetPriceBanner = ({
  title,
  categoryKey,
}: AppGetPriceBannerProps) => {
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

  // ✅ SEO-оптимизированный заголовок по умолчанию
  const defaultTitle = (
    <>
      <h2 className="text-white font-[700] text-[24px] md:text-[32px] leading-[34px]">
        Получите расчёт стоимости тента
      </h2>
      <h3 className="text-white font-[700] text-[24px] md:text-[32px]">
        под ваш проект
      </h3>
    </>
  );

  return (
    <div className="bg-[#112138cc] p-8 rounded-[16px] relative">
      <div className="flex flex-col gap-8 relative z-10">
        <div
          ref={ref1}
          className={cn(
            "flex flex-col transition-all ease-out duration-1000",
            inView1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}
        >
          {title ? (
            // Если title передан — остаётся как есть (например, на странице /auto)
            <h2 className="text-white font-[700] text-[32px] leading-[34px]">
              {title}
            </h2>
          ) : (
            // Иначе — SEO-оптимизированный заголовок
            defaultTitle
          )}
        </div>

        <Separator className="max-w-[50%] bg-[#ffd580AA]" />

        <p
          ref={ref2}
          className={cn(
            "text-white transition-all ease-out duration-1000",
            inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}
        >
          Ответьте на несколько вопросов — и мы рассчитаем стоимость
          производства тента из ПВХ-ткани в г. Энгельс, Саратовская область.
          Доставка по России.
        </p>

        <EnrollWidget
          ref={ref3}
          label="Получить расчёт"
          categoryKey={categoryKey}
          className={cn(
            "transition-all ease-out duration-1000",
            inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        />

        <p
          ref={ref4}
          className={cn(
            "text-gray-400 text-[14px] transition-all ease-out duration-1000",
            inView4 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}
        >
          Нажимая кнопку «Получить расчёт», вы соглашаетесь с{" "}
          <Link to="/privacy-policy" className="underline">
            Политикой конфиденциальности
          </Link>
        </p>
      </div>
    </div>
  );
};
