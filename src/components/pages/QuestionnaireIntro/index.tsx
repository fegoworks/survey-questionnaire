import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import styles from "./questionnaireIntro.module.css";

interface IQuestionnaireIntro {
  questionnaireName: string | undefined;
  questionnaireDescription: string | undefined;
  handleClick: () => void;
}

const QuestionnaireIntro: React.FC<IQuestionnaireIntro> = ({
  questionnaireName,
  questionnaireDescription,
  handleClick,
}) => (
  <div className={styles.questionnaireIntro}>
    <h2>{questionnaireName}</h2>
    <Text text={questionnaireDescription} />
    <Button handleClick={handleClick} text="Take the Quiz" />
  </div>
);

export default QuestionnaireIntro;
