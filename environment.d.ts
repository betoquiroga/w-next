declare global {
  namespace NodeJS {
    interface ProcessEnv {
      WS_HOSTNAME?: string
      WS_PORT?: string
      NEXT_PUBLIC_WS_HOST: string
    }
  }
}

export {}
