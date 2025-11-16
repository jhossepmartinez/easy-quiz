import { Box, Card, Flex, RadioGroup } from "@radix-ui/themes";
import { FeedbackBox } from "./FeedbackBox";
import { useResponses } from "../context/responsesContext/use";
import type { SingleChoiceQuestion as SingleChoiceQuestionType } from "../types";

const RadioRoot = RadioGroup.Root;
const RadioItem = RadioGroup.Item;

export const SingleChoiceQuestion = ({
    id,
    question,
    showAnswer,
}: {
    id: number;
    question: SingleChoiceQuestionType;
    showAnswer: boolean;
}) => {
    const { responses, setResponse } = useResponses();
    const { statement, options, answer, explanation } = question;
    const value = responses[id] || null;
    return (
        <Flex direction={"column"} width={"50%"} gap={"1"}>
            <Box>
                <Card>
                    <p>{statement}</p>
                    <RadioRoot
                        value={value}
                        onValueChange={(newValue) => setResponse(id, newValue)}
                    >
                        {Object.entries(options).map(([key, value]) => (
                            <RadioItem value={key}>
                                {key}: {value}
                            </RadioItem>
                        ))}
                    </RadioRoot>
                </Card>
            </Box>

            {showAnswer && (
                <Box>
                    <FeedbackBox
                        explanation={explanation}
                        answer={answer}
                        isCorrect={value === answer}
                    />
                </Box>
            )}
        </Flex>
    );
};
