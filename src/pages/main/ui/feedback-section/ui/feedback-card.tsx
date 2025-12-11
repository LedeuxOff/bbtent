import { cn } from "@/lib/utils";
import type { FeedbackDataType } from "@/shared/consts/feedback-data";
import type { ClassValue } from "clsx";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface FeedbackCardProps {
  feedback: FeedbackDataType;
  className?: ClassValue;
  index: number;
}

export const FeedbackCard = ({
  feedback,
  className,
  index,
}: FeedbackCardProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [expandedText, setExpandedText] = useState(false);
  const [textHeight, setTextHeight] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, []);

  // ✅ Генерируем alt для изображения отзыва (например, фото объекта)
  const imgAlt = feedback.text
    ? `Фото укрытия или тента от клиента ${feedback.author}`
    : `Фото от клиента ${feedback.author}`;

  return (
    <div
      ref={ref}
      className={cn(
        `col-span-3 md:col-span-1 border-[1px] border-[#11213844] rounded-[8px] p-4 flex flex-col justify-between gap-8 shadow-lg transition-all duration-1000 ease-out`,
        inView
          ? `opacity-100 ${index % 2 !== 0 ? "-" : ""}translate-y-0`
          : `opacity-0 ${index % 2 !== 0 ? "-" : ""}translate-y-10`,
        className
      )}
    >
      <div className="flex flex-col gap-8">
        <img
          src={feedback.imgUrl}
          alt={imgAlt} // ✅ SEO и доступность
          className="rounded-[8px] max-h-[260px] md:max-h-[160px] object-cover w-full"
        />
        <div className="flex flex-col gap-2">
          <span
            ref={textRef}
            className={cn(
              "whitespace-pre-line",
              !expandedText && "line-clamp-3"
            )}
          >
            {feedback.text}
          </span>
          {((!!textHeight && textHeight >= 72) || expandedText) && (
            <button
              type="button"
              onClick={() => setExpandedText(!expandedText)}
              className="text-blue-500 cursor-pointer text-left"
              aria-expanded={expandedText}
            >
              {expandedText ? "Свернуть" : "Развернуть"}
            </button>
          )}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img
          src="/user.png"
          alt={`Аватар автора отзыва: ${feedback.author}`} // ✅ Доступность
          className="w-16 h-16 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <span className="font-[700] text-[18px]">{feedback.author}</span>
          <span className="text-gray-500">{feedback.date}</span>
        </div>
      </div>
    </div>
  );
};
