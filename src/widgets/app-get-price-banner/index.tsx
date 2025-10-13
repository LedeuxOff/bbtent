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
            <span className="text-white font-[700] text-[32px] leading-[34px]">
              {title}
            </span>
          ) : (
            <>
              <span className="text-white font-[700] text-[32px] leading-[34px]">
                Получите расчет
              </span>
              <span className="text-white font-[700] text-[32px] leading-[34px]">
                стоимости тента
              </span>
            </>
          )}
        </div>

        <Separator className="max-w-[50%] bg-[#ffd580AA]" />

        <span
          ref={ref2}
          className={cn(
            "text-white transition-all ease-out duration-1000",
            inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}
        >
          Ответьте на несколько вопросов и мы свяжемся с вами для расчета
          стоимости
        </span>

        <EnrollWidget
          ref={ref3}
          label="Получить расчет"
          categoryKey={categoryKey}
          className={cn(
            "transition-all ease-out duration-1000",
            inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        />

        <span
          ref={ref4}
          className={cn(
            "text-gray-400 text-[14px] transition-all ease-out duration-1000",
            inView4 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}
        >
          Нажимая кнопку "Получить расчет", Вы соглашаетесь с{" "}
          <Link to="/privacy-policy" className="underline">
            Политикой конфиденциальности
          </Link>
        </span>
      </div>

      <img
        src="/gazel.png"
        className="hidden md:flex absolute bottom-1 right-0 w-[300px] z-0"
      />
    </div>
  );
};
