"use client"

import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import HttpRequest from "public/common/services/http-request"
import { useState } from "react"

const Providers = ({ children }: ProvidersProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydrate(queryClient)}>{children}</Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

type ProvidersProps = {
  children: React.ReactNode
}

export default Providers
