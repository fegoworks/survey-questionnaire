import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Questionnaire } from "../../../types/types";
import data from "../../../questionnaire.json";
import QuestionnaireCardList from "../../complexes/QuestionnaireCardList";
import Header from "../../complexes/Header";
import styles from "./home.module.css";

export interface IQuestionnaire {
  questionnaire: Questionnaire[];
}

const Home: React.FC = () => {
  const [questionnaires, setQuestionnaires] = useState<any>(data.questionnaire);
  const navigate = useNavigate();
  const handleClick = (questionnaireId: string) => {
    navigate(`/questionnaire/${questionnaireId}`);
  };
  return (
    <>
      <Header text="Questionnaires" isGrey={true} />
      <div className={`${styles.home} ${styles.multiBg}`}>
        <h3>Survey & questionnaire templates & examples</h3>
        <QuestionnaireCardList
          handleClick={handleClick}
          questionnaires={questionnaires}
        />
      </div>
    </>
  );
};

export default Home;
