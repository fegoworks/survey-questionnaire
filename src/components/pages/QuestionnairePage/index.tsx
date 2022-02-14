import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCounter from "../../../hooks/useCounter";
import useQuestionnaire from "../../../hooks/useQuestionnaire";
import { QuestionContext } from "../../../providers/context";
import Content from "../../complexes/Content";
import Footer from "../../complexes/Footer";
import Header from "../../complexes/Header";
import QuestionnaireIntro from "../QuestionnaireIntro";
import styles from "./questionnaire.module.css";

const Questionnaire: React.FC = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const { questionnaireId } = useParams();
  const { questions, name, description } = useQuestionnaire(questionnaireId);
  const {
    state,
    markAsSelected,
    setNextQuestion,
    setPrevQuestion,
    loadQuestionnaire,
  } = useContext(QuestionContext);

  useEffect(() => {
    if (questions) {
      loadQuestionnaire(questions);
    }
  }, [questions]);

  const { currentQuestion } = state;
  const { setPage, questionNumber } = useCounter(currentQuestion);

  const selectChoice = (event: React.MouseEvent<HTMLDivElement>) => {
    const textContent = event.currentTarget.id;

    markAsSelected(textContent);
    setNextQuestion(textContent);
    setAnimate(!animate);
  };

  return (
    <div className={styles.questionnaire}>
      {showIntro ? (
        <QuestionnaireIntro
          questionnaireName={name}
          questionnaireDescription={description}
          handleClick={() => setShowIntro(!showIntro)}
        />
      ) : (
        <>
          <Header>{name}</Header>
          <Content
            question={currentQuestion}
            handleClick={selectChoice}
            animate={animate}
            questionNumber={questionNumber}
            setPage={setPage}
          />
          <Footer
            moveDown={() => setPrevQuestion()}
            moveUp={() => setNextQuestion()}
            checked={currentQuestion?.checked}
            setPage={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Questionnaire;
