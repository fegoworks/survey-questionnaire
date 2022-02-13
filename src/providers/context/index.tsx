import { createContext, useReducer } from "react";
import {
  ActionTypes,
  Choice,
  Jump,
  MapJump,
  Question,
} from "../../types/types";
import initialState from "./initialState";
interface IQuestions {
  questions: Array<Question>;
  currentQuestion: Question;
}

interface IQuestionAction {
  type: ActionTypes;
  value?: string;
  questions?: Question[];
}

interface IValue {
  state: IQuestions;
  loadQuestionnaire: (questions: Question[] | undefined) => void;
  markAsSelected: (value: string) => void;
  answerQuestion: (value?: string) => void;
  setNextQuestion: (value?: string) => void;
  setPrevQuestion: () => void;
}

const QuestionContext = createContext<IValue>({
  state: initialState,
  loadQuestionnaire: () => {},
  markAsSelected: () => {},
  setNextQuestion: () => {},
  setPrevQuestion: () => {},
  answerQuestion: () => {},
});

const reducer: React.Reducer<any, IQuestionAction> = (
  state: IQuestions,
  action: IQuestionAction
) => {
  let newQuestion: Question | undefined;
  const { identifier, jumps } = state.currentQuestion;
  const index: number = state.questions.findIndex(
    (question: Question) => question.identifier === identifier
  );

  switch (action.type) {
    case ActionTypes.LOAD_QUESTIONNAIRE:
      const { questions: qs } = action;
      return {
        ...state,
        questions: qs,
        currentQuestion: qs && qs[0],
      };
    case ActionTypes.TOGGLE_SELECTED:
      const { questions, currentQuestion } = state;
      const newChoices: Choice[] | undefined = currentQuestion.choices?.map(
        (choice: Choice) =>
          choice.value === action.value
            ? { ...choice, selected: true }
            : { ...choice, selected: false }
      );
      const newQs = questions.map((q: Question) =>
        q.identifier === identifier
          ? { ...q, choices: newChoices, checked: true }
          : q
      );
      return {
        ...state,
        questions: newQs,
        currentQuestion: newQs[index],
      };
    case ActionTypes.SET_NEXT_QUESTION:
      console.log({ c: state.currentQuestion });
      if (index === state.questions.length - 1) {
        return { ...state, currentQuestion };
      }
      if (jumps.length === 0) {
        newQuestion = state.questions[index + 1];
        return { ...state, currentQuestion: newQuestion };
      }
      const j = jumps
        .map((jump: Jump) => {
          return {
            value: jump.conditions[0].value,
            destination: jump.destination.id,
          };
        })
        .find((jump: MapJump) => jump.value === action.value);

      newQuestion = state.questions.find(
        (question: Question) => question.identifier === j?.destination
      );
      return {
        ...state,
        currentQuestion: { ...newQuestion, reference: identifier },
      };

    case ActionTypes.PREV_QUESTION:
      console.log({c: state.currentQuestion})
      if (index === 0) {
        return { ...state, currentQuestion: state.currentQuestion };
      }
      if (state.currentQuestion.reference) {
        console.log("yeah we do")
        newQuestion = state.questions.find(
          (q) => q.identifier === state.currentQuestion.reference
        );
        return { ...state, currentQuestion: newQuestion };
      }
      newQuestion = state.questions[index - 1];
      return { ...state, currentQuestion: newQuestion };

    // Case - answer text based questions
    case ActionTypes.ANSWER_QUESTION:
      const oldQ = state.questions.map((q: Question) =>
        q.identifier === state.currentQuestion.identifier
          ? { ...q, answer: action.value }
          : q
      );
      return {
        ...state,
        questions: oldQ,
        currentQuestion: oldQ && oldQ[index + 1],
      };
    default:
      return state;
  }
};

const QuestionContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer<
    React.Reducer<IQuestions, IQuestionAction>
  >(reducer, initialState);
  const value: IValue = {
    state,
    loadQuestionnaire: (questions: Question[] | undefined) => {
      dispatch({ type: ActionTypes.LOAD_QUESTIONNAIRE, questions });
    },
    markAsSelected: (value: string) =>
      dispatch({
        type: ActionTypes.TOGGLE_SELECTED,
        value,
      }),
    setNextQuestion: (value?: string) =>
      dispatch({ type: ActionTypes.SET_NEXT_QUESTION, value }),
    setPrevQuestion: () => dispatch({ type: ActionTypes.PREV_QUESTION }),
    answerQuestion: (value?: string) =>
      dispatch({ type: ActionTypes.ANSWER_QUESTION, value }),
  };

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};

let QuestionContextConsumer = QuestionContext.Consumer;

export { QuestionContext, QuestionContextProvider, QuestionContextConsumer };
