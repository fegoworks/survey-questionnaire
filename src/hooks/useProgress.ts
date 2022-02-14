import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../providers/context";

export default function useProgress(): { progress: number } {
  const [progress, setProgress] = useState<number>(0);
  const { state } = useContext(QuestionContext);
  const { questions, currentQuestion } = state;

  useEffect(() => {
    const totalQuestions: number = questions.length;
    const currentQ: number = state.questions.indexOf(currentQuestion) + 1;
    const progress: number = Math.ceil((currentQ / totalQuestions) * 100);
    setProgress(progress);
  }, [currentQuestion]);

  return { progress };
}
