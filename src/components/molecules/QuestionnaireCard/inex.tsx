// import BackgroundOne from "../../../svg/bgOne";
import { Questionnaire } from "../../../types/types";
import styles from "./questionnaireCard.module.css";

interface IQuestionnaireCard {
  questionnaire: Questionnaire;
  handleClick: (questionnaireId: string) => void;
}

const QuestionnaireCard: React.FC<IQuestionnaireCard> = ({
  questionnaire,
  handleClick,
}) => (
  <div
    onClick={() => handleClick(questionnaire.identifier)}
    className={`${styles.questionnaireCard}`}
  >
    <div className={styles.imgBackground}>
      <img src="../../../svg/bgOne.svg" alt="" />
    </div>
    <div className={styles.description}>
      <p className={styles.surveyName}>{questionnaire.name}</p>
      <p className={styles.surveyDescription}>{questionnaire.description}</p>
    </div>
  </div>
);

export default QuestionnaireCard;
