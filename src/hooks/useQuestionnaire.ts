import { Questionnaire } from "../types/types";
import data from "./../questionnaire.json";

export default function useQuestionnaire(
  questionnaireId: string | undefined
): Questionnaire {
  let qs: any = data.questionnaire;

  const ds = qs.find((q: Questionnaire) => q.identifier === questionnaireId);
  return { ...ds };
}
