// import BackgroundOne from "../../../svg/bgOne";
import { Questionnaire } from "../../../types/types";
import styles from "./questionnaireCard.module.css";
import { randImgs } from "./data/randomImages";
import { randomNoRepeats } from "../../../helpers/utils";

interface IQuestionnaireCard {
  questionnaire: Questionnaire;
  handleClick: (questionnaireId: string) => void;
}

const QuestionnaireCard: React.FC<IQuestionnaireCard> = ({
  questionnaire,
  handleClick,
}) => {
  const { src, credit } =  randomNoRepeats(randImgs);

  return (
    <div
      onClick={() => handleClick(questionnaire.identifier)}
      className={`${styles.questionnaireCard}`}
    >
      <img src={src} alt={credit} />
      <div className={styles.description}>
        <p className={styles.surveyName}>{questionnaire.name}</p>
        <p className={styles.surveyDescription}>{questionnaire.description}</p>
      </div>
    </div>
  );
};

export default QuestionnaireCard;
