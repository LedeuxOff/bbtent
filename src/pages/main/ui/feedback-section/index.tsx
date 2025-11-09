import { FEEDBACK_DATA } from "@/shared/consts/feedback-data";
import { AppContainer } from "@/shared/ui-kit";
import { FeedbackCard } from "./ui/feedback-card";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export const MainPageFeedbackSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div id="#feedback" className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span
            ref={ref}
            className={cn(
              "text-[38px] font-[700] transition-all duration-1000 ease-out",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            Отзывы клиентов
          </span>
          <div className="grid grid-cols-3 gap-8">
            {FEEDBACK_DATA.map((feedback, index) => (
              <FeedbackCard
                key={feedback.id}
                feedback={feedback}
                index={index}
              />
            ))}
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
