import data from "../../questionnaire.json";

const {
  questionnaire: { questions },
} = data;

const initialState = {
  questions,
  currentQuestion: questions[0],
};

export default initialState;
