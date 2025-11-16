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
    const { statement, options, answer, explanation, image } = question;
    const value = responses[id] || null;

    return (
        <Flex direction="column" width="60%" gap="2">
            <Card>
                <Flex gap="4" align="start">
                    <Box flexGrow="2" flexBasis="0">
                        <p>{statement}</p>

                        <RadioRoot
                            value={value}
                            onValueChange={(newValue) =>
                                setResponse(id, newValue)
                            }
                        >
                            {Object.entries(options).map(([key, value]) => (
                                <RadioItem key={key} value={key}>
                                    {key}: {value}
                                </RadioItem>
                            ))}
                        </RadioRoot>
                    </Box>

                    {image && (
                        <Box flexGrow="1" flexBasis="0">
                            <img
                                src={image}
                                alt=""
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                    borderRadius: "var(--radius-2)",
                                }}
                            />
                        </Box>
                    )}
                </Flex>
            </Card>

            {showAnswer && (
                <FeedbackBox
                    explanation={explanation}
                    answer={answer}
                    isCorrect={value === answer}
                />
            )}
        </Flex>
    );
};
