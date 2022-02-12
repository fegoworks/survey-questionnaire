export type Questionnaire = {
  id: number;
  name: string;
  identifier: string;
  questions: Question[];
  description: string;
  category_name_hyphenated: string;
};

export type Choice = {
  label: string;
  value: string;
  selected: boolean;
};

export type Question = {
  question_type: string;
  identifier: string;
  headline: string;
  description: string | null;
  required: boolean;
  multiple?: string;
  jumps: Jump[];
  choices?: Choice[];
  multiline?: string;
  reference?: string;
  checked?: boolean;
  answer?: string;
};

export type Condition = {
  field: string;
  value: string;
};

export type Destination = {
  id: string;
};

export type Jump = {
  conditions: Array<Condition>;
  destination: Destination;
};

export type MapJump = {
  destination: string;
  value: string;
};
