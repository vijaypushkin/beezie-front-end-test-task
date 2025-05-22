"use client";

import { getQueryClient } from "@/configs/react-query.config";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
