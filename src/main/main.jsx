import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// 1. Импортируем нужные инструменты из TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";

// 2. Создаем экземпляр клиента (это наше хранилище кэша)
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 3. Оборачиваем App и передаем клиент в props */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
