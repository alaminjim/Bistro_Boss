import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Router/Routes";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Providers/AuthProviders";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <HelmetProvider>
          <Toaster />
          <div className="max-w-6xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </AuthProviders>
    </QueryClientProvider>
  </StrictMode>
);
