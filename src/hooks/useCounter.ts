import { useEffect, useState } from "react";
import { Question } from "../types/types";

export default function useCounter(question: Question): {
  questionNumber: number;
  setPage: React.Dispatch<React.SetStateAction<string>>;
} {
  const [counter, setCounter] = useState<number>(0);
  const [page, setPage] = useState("Next");

  useEffect(() => {
    if (page === "Next") {
      setCounter(counter + 1);
    } else if (page === "Prev") {
      setCounter(counter - 1);
    }
  }, [question]);

  return { questionNumber: counter, setPage };
}
