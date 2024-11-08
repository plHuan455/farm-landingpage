"use client"

import { useState } from "react"
import { QueryClientProvider as Provider, QueryClient } from "react-query"

export default function QueryClientProvider({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchInterval: false,
            staleTime: 90000,
            retry: 2,
          },
        },
      }),
  )
  return <Provider client={queryClient}>{children}</Provider>
}
