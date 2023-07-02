import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/preflight.css";
import "./styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      cacheTime: 60000,
      retry: (failureCount = 3, error) => {
        if (error instanceof Error && error.message.includes("(retry = false)")) {
          console.log("No retry:", error);
          return false;
        } else {
          return true;
        }
      },
    },
  },
  // queryCache: new QueryCache({
  //   onError: (error, query): void => {
  //     if (error instanceof Error) {
  //       console.log("somthing went wrong");
  //     }
  //   },
  // }),
});

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
