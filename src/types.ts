export type TrueFalseQuestion = {
    statement: string;
    answer: "V" | "F";
    explanation?: string | undefined;
};

export type SingleChoiceQuestion = {
    statement: string;
    options: Record<string, string>;
    answer: string;
    explanation?: string | undefined;
};

export type Responses = Record<number, string>;
export type ResponsesContext = {
    responses: Responses;
    setResponse: (id: number, value: string) => void;
    resetResponses: () => void;
};
