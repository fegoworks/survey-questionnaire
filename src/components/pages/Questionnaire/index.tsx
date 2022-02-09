import { useContext } from "react";
import { QuestionContext } from "../../../providers/context";
import Content from "../../complexes/Content";
import Footer from "../../complexes/Footer";
import Header from "../../complexes/Header";
import styles from "./questionnaire.module.css";

const Questionnaire: React.FC = () => {
  const { state, markAsSelected, setNextQuestion, setPrevQuestion } =
    useContext(QuestionContext);
  const { currentQuestion } = state;

  const selectChoice = (event: React.MouseEvent<HTMLDivElement>) => {
    const textContent = event.currentTarget.id;
    markAsSelected(textContent);
    setNextQuestion(textContent);
  };

  return (
    <div className={styles.questionnaire}>
      <Header text="Survey Questions" />
      <Content question={currentQuestion} handleClick={selectChoice} />
      <Footer
        moveDown={() => setPrevQuestion()}
        moveUp={() => setNextQuestion()}
        checked={currentQuestion?.checked}
      />
    </div>
  );
};

export default Questionnaire;
