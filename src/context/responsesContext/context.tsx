import { createContext } from "react";
import type { ResponsesContext as ResponsesContextType } from "../../types";

export const ResponsesContext = createContext<ResponsesContextType | undefined>(
    undefined,
);
