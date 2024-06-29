"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

let browserQueryClient: QueryClient | undefined = undefined;

function makeQueryClient() {
  return new QueryClient();
}

function getQueryClient() {
  if (typeof window === "undefined")
    return makeQueryClient();

  if (!browserQueryClient)
    browserQueryClient = makeQueryClient();

  return browserQueryClient;
}

export const queryClient = getQueryClient();

export default function TanStackQueryProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}


