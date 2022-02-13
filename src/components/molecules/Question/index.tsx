import ArrowRight from "../../../svg/arrowright";
import Text from "../../atoms/Text";
import styles from "./question.module.css";

interface IQuestion {
  questionNumber: number;
  questionText: string;
}

const Question: React.FC<IQuestion> = ({ questionNumber, questionText }) => (
  <div className={styles.question}>
    <span>
      {questionNumber} <ArrowRight width="12" height="12" color="white" />
    </span>
    <Text text={questionText} />
  </div>
);

export default Question;
