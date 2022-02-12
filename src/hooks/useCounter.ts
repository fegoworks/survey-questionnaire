import { useEffect, useState } from "react";
import { Question } from "../types/types";

export default function useCounter(question: Question): {
    questionNumber: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
} {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    setCounter(counter + 1);
  }, [question]);

  return { questionNumber: counter, setCounter };
}
