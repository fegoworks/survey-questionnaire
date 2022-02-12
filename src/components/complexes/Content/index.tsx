import styles from "./content.module.css";
import { Question } from "../../../types/types";
import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../../../providers/context";
import ResponseList from "../ResponseList";
import QuestionText from "../../molecules/Question";
import Button from "../../atoms/Button";
import useCounter from "../../../hooks/useCounter";

interface IContent {
  animate: boolean;
  question: Question;
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Content: React.FC<IContent> = ({ animate, question, handleClick }) => {
  const { answerQuestion } = useContext(QuestionContext);
  const { questionNumber, setCounter } = useCounter(question);
  const [value, setValue] = useState<string>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBtnClick = () => {
    answerQuestion(value);
  };

  return (
    <div className={`${styles.content} ${animate ? styles.animate : ""}`}>
      <QuestionText
        questionNumber={questionNumber}
        questionText={question.headline}
      />
      {question?.choices ? (
        <ResponseList
          responseList={question.choices}
          handleClick={(event: React.MouseEvent<HTMLDivElement>) => {
            handleClick(event);
          }}
        />
      ) : (
        <form className={styles.answerForm}>
          <input
            value={question?.answer}
            type="text"
            placeholder="Type your answer here..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(event)
            }
            name={question?.identifier}
          />
          <Button
            text="Ok"
            checkmark={true}
            handleClick={() => handleBtnClick()}
          />
        </form>
      )}
    </div>
  );
};

export default Content;
