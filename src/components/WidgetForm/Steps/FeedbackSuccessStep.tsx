import { CheckSquare } from "phosphor-react";
import { CloseButton } from "../../CloseButton/CloseButton";
import { FeedbackSuccessStepProps } from "../../../models/feedbackSuccessStepProps";

export function FeedbackSuccessStep({
  onRestartFeedback,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <CheckSquare weight="fill" width="42px" height="42px" />
        <span className="text-xl mt-2">Agradecemos o feedback</span>
        <button
          onClick={onRestartFeedback}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
