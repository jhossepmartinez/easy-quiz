import { useContext } from "react";
import { ResponsesContext } from "./context";

export const useResponses = () => {
    const context = useContext(ResponsesContext);
    if (!context) {
        throw new Error("useResponses must be used within a ResponsesProvider");
    }
    return context;
};
