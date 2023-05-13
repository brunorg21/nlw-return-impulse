import { ArrowLeft } from "phosphor-react";
import { FeedbackContentStepProps } from "../../../models/feedbackContentType";
import { CloseButton } from "../../CloseButton/CloseButton";
import { feedbackTypes } from "../WidgetForm";
import { ScreenshotButton } from "../ScreeenshotButton";
import { FormEvent, useState } from "react";
import { feedbackApi } from "../../../api/feedbackApi";
import { Loading } from "../Loading";

export function FeedbackContentStep({
  feedbackType,
  onRestartFeedback,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [submittedFeedback, setSubmittedFeedback] = useState("");
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedbackForm(e: FormEvent) {
    setLoading(true);
    e.preventDefault();

    await feedbackApi.post("/feedbacks", {
      type: feedbackType,
      comment: submittedFeedback,
      screenshot,
    });

    onFeedbackSent();
    setLoading(false);
  }
  return (
    <div>
      <header>
        <button
          onClick={onRestartFeedback}
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-lg leading-6 flex items-center justify-center gap-2">
          {feedbackTypeInfo.icon}
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedbackForm} className="my-4 w-full">
        <textarea
          onChange={(e) => setSubmittedFeedback(e.target.value)}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            disabled={submittedFeedback.length === 0 || loading}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {loading ? <Loading /> : "Enviar Feedback"}
          </button>
        </footer>
      </form>
    </div>
  );
}
