import { Box, Card, Flex, RadioGroup } from "@radix-ui/themes";
import { FeedbackBox } from "./FeedbackBox";
import { useResponses } from "../context/responsesContext/use";

const RadioRoot = RadioGroup.Root;
const RadioItem = RadioGroup.Item;

export const TrueFalseSelector = ({
    id,
    statement,
    answer,
    showAnswer,
    explanation,
}: {
    id: number;
    statement: string;
    answer: "V" | "F";
    showAnswer: boolean;
    explanation?: string | undefined;
}) => {
    const { responses, setResponse } = useResponses();
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
                        <RadioItem value="F">Falso</RadioItem>
                        <RadioItem value="V">Verdadero</RadioItem>
                        <RadioItem value="D">Depende</RadioItem>
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
