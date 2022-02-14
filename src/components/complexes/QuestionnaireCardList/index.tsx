import { Questionnaire } from "../../../types/types";
import QuestionnaireCard from "../../molecules/QuestionnaireCard";
import { IQuestionnaire } from "../../pages/HomePage";
import styles from "./questionnaire.module.css";

interface IQuestionnaireCardList {
  questionnaires: IQuestionnaire;
  handleClick: (questionnaireId: string) => void;
}

const QuestionnaireCardList: React.FC<IQuestionnaireCardList> = ({
  questionnaires,
  handleClick,
}) => {
  return (
    <div className={styles.questionnaireCardList}>
      {Object.values(questionnaires).map((q: Questionnaire, index: number) => (
        <QuestionnaireCard
          key={`${index} + qcard`}
          handleClick={handleClick}
          questionnaire={q}
        />
      ))}
    </div>
  );
};

export default QuestionnaireCardList;
