import type { SingleChoiceQuestion } from "./types";

export const shuffleArray = (array: SingleChoiceQuestion[]) => {
    let currentIndex = array.length,
        randomIndex;

    // Mientras queden elementos por barajar.
    while (currentIndex !== 0) {
        // Escoge un elemento restante.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Y cámbialo por el elemento actual.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};
