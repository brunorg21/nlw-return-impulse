import { CloseButton } from "../CloseButton/CloseButton";
import { Bug, Lightbulb, Chats } from "phosphor-react";

import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackType } from "../../models/feedbackType";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    icon: <Bug width="50px" height="50px" weight="fill" />,
  },
  IDEA: {
    title: "Ideia",
    icon: <Lightbulb width="50px" height="50px" weight="fill" />,
  },
  OTHER: {
    title: "Outros",
    icon: <Chats width="50px" height="50px" weight="fill" />,
  },
};

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onRestartFeedback={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep setFeedbackType={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onRestartFeedback={handleRestartFeedback}
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com amor ♥ por {""}
        <a
          className="underline underline-offset-2"
          href="https://github.com/brunorg21"
        >
          Bruno Rafael
        </a>
      </footer>
    </div>
  );
}
