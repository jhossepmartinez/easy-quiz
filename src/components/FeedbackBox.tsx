import { Text, Callout } from "@radix-ui/themes";

export const FeedbackBox = ({
    isCorrect,
    answer,
    explanation,
}: {
    isCorrect: boolean;
    answer: string | null;
    explanation: string | undefined;
}) => {
    const color: "green" | "ruby" = isCorrect ? "green" : "ruby";
    const missingAnswer: boolean = answer === null;
    console.log("answer:", answer);
    return (
        <Callout.Root color={color} size="1">
            <Callout.Icon>
                <Text weight={"bold"}>{answer}</Text>
            </Callout.Icon>
            <Callout.Text>
                {missingAnswer ? (
                    <Text>Por favor selecciona una respuesta.</Text>
                ) : (
                    <>
                        <Text as="div">{explanation}</Text>
                    </>
                )}
            </Callout.Text>
        </Callout.Root>
    );
};
