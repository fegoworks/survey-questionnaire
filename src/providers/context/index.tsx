import { createContext, useReducer } from "react";
import { Choice, Jump, MapJump, Question } from "../../types/types";
import initialState from "./initialState";

enum ActionTypes {
  PREV_QUESTION = "PREV_QUESTION",
  SET_NEXT_QUESTION = "SET_NEXT_QUESTION",
  TOGGLE_SELECTED = "TOGGLE_SELECTED",
  IS_SELECTED = "IS_SELECTED",
}

interface IQuestions {
  questions: Array<Question>;
  currentQuestion: Question;
}

interface IQuestionAction {
  type: ActionTypes;
  value?: string;
}

interface IValue {
  state: IQuestions;
  markAsSelected: (value: string) => void;
  setNextQuestion: (value?: string) => void;
  setPrevQuestion: () => void;
}

const QuestionContext = createContext<IValue>({
  state: initialState,
  markAsSelected: () => {},
  setNextQuestion: () => {},
  setPrevQuestion: () => {},
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
      if (index === 0) {
        return { ...state, currentQuestion: state.currentQuestion };
      }
      if (state.currentQuestion.reference) {
        newQuestion = state.questions.find(
          (q) => q.identifier === state.currentQuestion.reference
        );
        return { ...state, currentQuestion: newQuestion };
      }
      newQuestion = state.questions[index - 1];
      return { ...state, currentQuestion: newQuestion };

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
    markAsSelected: (value: string) =>
      dispatch({
        type: ActionTypes.TOGGLE_SELECTED,
        value,
      }),
    setNextQuestion: (value?: string) =>
      dispatch({ type: ActionTypes.SET_NEXT_QUESTION, value }),
    setPrevQuestion: () => dispatch({ type: ActionTypes.PREV_QUESTION }),
  };

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};

let QuestionContextConsumer = QuestionContext.Consumer;

export { QuestionContext, QuestionContextProvider, QuestionContextConsumer };
