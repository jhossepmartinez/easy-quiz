import { StrictMode } from "react";
import "@radix-ui/themes/styles.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";
import { ResponsesProvider } from "./context/responsesContext/provider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Theme appearance="dark">
            <ResponsesProvider>
                <App />
            </ResponsesProvider>
        </Theme>
    </StrictMode>,
);
