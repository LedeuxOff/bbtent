import { FEEDBACK_DATA } from "@/shared/consts/feedback-data";
import { AppContainer } from "@/shared/ui-kit";
import { FeedbackCard } from "./ui/feedback-card";

export const MainPageFeedbackSection = () => {
  return (
    <div id="#feedback" className="w-full flex justify-center">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <span className="text-[38px] font-[700]">Отзывы клиентов</span>
          <div className="grid grid-cols-3 gap-8">
            {FEEDBACK_DATA.map((feedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
