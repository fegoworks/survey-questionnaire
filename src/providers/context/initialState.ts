const initialState = {
  questions: [],
  currentQuestion: {
    question_type: "",
    identifier: "",
    headline: "",
    description: "",
    required: false,
    multiple: "false",
    jumps: [
      {
        conditions: [
          {
            field: "",
            value: "",
          },
        ],
        destination: {
          id: "",
        },
      },
    ],
    choices: [
      {
        label: "",
        value: "",
        selected: false,
      },
    ],
    multiline: "",
    reference: "",
    checked: false,
  },
};

export default initialState;
