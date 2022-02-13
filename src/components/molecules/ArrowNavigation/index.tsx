import { useContext } from "react";
import useCounter from "../../../hooks/useCounter";
import { QuestionContext } from "../../../providers/context";
import Icon from "../../atoms/Icon";
import styles from "./arrowNavigation.module.css";

interface IArrowNavigation {
  moveUp: () => void;
  moveDown: () => void;
  checked: boolean | undefined;
}

const ArrowNavigation: React.FC<IArrowNavigation> = ({
  moveDown,
  moveUp,
  checked,
}) => {
  const { state } = useContext(QuestionContext);
  const { questionNumber, setCounter } = useCounter(state.currentQuestion);
  const isFirstQuestion = state.questions.indexOf(state.currentQuestion) === 0;
  return (
    <div className={styles.arrowNavigation}>
      <span className={`${isFirstQuestion ? styles.disabled : ""}`}>
        <Icon
          onClick={() => {
            moveDown();
            setCounter(questionNumber - 1);
          }}
          disabled={isFirstQuestion}
          rotate={true}
        />
      </span>
      <span className={`${!checked ? styles.disabled : ""}`}>
        <Icon
          onClick={() => {
            moveUp();
            setCounter(questionNumber + 1);
          }}
          disabled={!checked}
        />
      </span>
    </div>
  );
};

export default ArrowNavigation;
