import { FeedbackType } from "./feedbackType";

export interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onRestartFeedback: () => void;
    onFeedbackSent: () => void;
}