import { cn } from "@/lib/utils";
import type { FeedbackDataType } from "@/shared/consts/feedback-data";
import type { ClassValue } from "clsx";
import { useEffect, useRef, useState } from "react";

interface FeedbackCardProps {
  feedback: FeedbackDataType;
  className?: ClassValue;
}

export const FeedbackCard = ({ feedback, className }: FeedbackCardProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [expandedText, setExpandedText] = useState(false);
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      className={cn(
        "col-span-3 md:col-span-1 border-[1px] border-[#11213844] rounded-[8px] p-4 flex flex-col justify-between gap-8 shadow-lg",
        className
      )}
    >
      <div className="flex flex-col gap-8">
        <img
          src={feedback.imgUrl}
          className="rounded-[8px] max-h-[260px] md:max-h-[160px] object-cover"
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
            <span
              onClick={() => setExpandedText(!expandedText)}
              className="text-blue-500 cursor-pointer"
            >
              {expandedText ? "Свернуть" : "Развернуть"}
            </span>
          )}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img src="/user.png" className="w-16 h-16" />
        <div className="flex flex-col gap-1">
          <span className="font-[700] text-[18px]">{feedback.author}</span>
          <span className="text-gray-500">{feedback.date}</span>
        </div>
      </div>
    </div>
  );
};
