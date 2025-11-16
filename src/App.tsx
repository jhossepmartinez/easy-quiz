import { Button, Flex, Text } from "@radix-ui/themes";
import "./App.css";
import questions from "./assets/data/questions.json";
import type { SingleChoiceQuestion as SingleChoiceQuestionType } from "./types";
import { useMemo, useState } from "react";
import { useResponses } from "./context/responsesContext/use";
import { SingleChoiceQuestion } from "./components/SingleChoiceQuestion";

function App() {
    const [showAnswers, setShowAnswers] = useState(false);
    const trueFalseQuestions =
        questions.questions as SingleChoiceQuestionType[];
    const { responses, resetResponses } = useResponses();

    const correctAnswersCount = useMemo(() => {
        return trueFalseQuestions.reduce((count, question, index) => {
            const userAnswer = responses[index];
            const correctAnswer = question.answer;

            if (userAnswer === correctAnswer) {
                return count + 1;
            }
            return count;
        }, 0);
    }, [responses, trueFalseQuestions]);
    return (
        <>
            <Flex
                direction={"column"}
                position={"fixed"}
                top={"1rem"}
                right={"1rem"}
                gap="2"
            >
                {showAnswers && (
                    <Text>
                        Puntaje: {correctAnswersCount} /{" "}
                        {trueFalseQuestions.length}
                    </Text>
                )}
                <Button onClick={() => setShowAnswers(!showAnswers)}>
                    Mostrar Respuestas
                </Button>
                <Button
                    color="ruby"
                    onClick={() => {
                        resetResponses();
                        setShowAnswers(false);
                    }}
                >
                    Reiniciar Cuestionario
                </Button>
            </Flex>
            <Flex direction={"column"} align={"center"} gap="4">
                {trueFalseQuestions.map((question, index) => (
                    <SingleChoiceQuestion
                        key={index}
                        id={index}
                        question={question}
                        statement={question.statement}
                        answer={question.answer}
                        showAnswer={showAnswers}
                        explanation={question.explanation}
                    />
                ))}
            </Flex>
        </>
    );
}

export default App;
