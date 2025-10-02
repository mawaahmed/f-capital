import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./translation/i18n.ts";
import { DiistyProvider } from "./context/ApplicationContext.tsx";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner.tsx";

const queryClient = new QueryClient();
{/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <QueryClientProvider client={queryClient}>
          <DiistyProvider>
            <App />
            <Toaster position="top-center" richColors/>
          </DiistyProvider>
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
