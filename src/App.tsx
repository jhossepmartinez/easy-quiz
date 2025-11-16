import { Button, Flex, Text } from "@radix-ui/themes";
import "./App.css";
import questionsData from "./assets/data/questions.json";
import type { SingleChoiceQuestion as SingleChoiceQuestionType } from "./types";
import { useMemo, useState } from "react";
import { useResponses } from "./context/responsesContext/use";
import { SingleChoiceQuestion } from "./components/SingleChoiceQuestion";
import { shuffleArray } from "./utils";

function App() {
    const [showAnswers, setShowAnswers] = useState(false);
    const trueFalseQuestions =
        questionsData.questions as SingleChoiceQuestionType[];
    const { responses, resetResponses } = useResponses();

    const shuffledQuestions = useMemo(() => {
        return shuffleArray(trueFalseQuestions);
    }, [trueFalseQuestions]);

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
                {shuffledQuestions.map((question, index) => (
                    <SingleChoiceQuestion
                        key={index}
                        id={index}
                        question={question}
                        showAnswer={showAnswers}
                    />
                ))}
            </Flex>
        </>
    );
}

export default App;
