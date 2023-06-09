import { FeedbackType } from "../../../models/feedbackType";
import { CloseButton } from "../../CloseButton/CloseButton";
import { feedbackTypes } from "../WidgetForm";

interface FeedbackTypeStepProps {
  setFeedbackType: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ setFeedbackType }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
              onClick={() => setFeedbackType(key as FeedbackType)}
            >
              {value.icon}
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
