import { useState, type ReactNode } from "react";
import type { Responses } from "../../types";
import { ResponsesContext } from "./context";

export const ResponsesProvider = ({ children }: { children: ReactNode }) => {
    const [responses, setResponses] = useState<Responses>({});
    const setSingleResponse = (id: number, value: string) => {
        setResponses((prevResponses) => ({ ...prevResponses, [id]: value }));
    };
    const resetResponses = () => setResponses({});
    return (
        <ResponsesContext.Provider
            value={{
                responses,
                setResponse: setSingleResponse,
                resetResponses,
            }}
        >
            {children}
        </ResponsesContext.Provider>
    );
};
