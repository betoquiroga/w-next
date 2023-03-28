import { useMutation, useQueryClient } from "@tanstack/react-query"
import Link from "next/link"
import { authenticate } from "src/common/api/auth/auth.api"
import { IS_AUTHENTICATED } from "src/common/constants/auth"
import { useState } from "react"
import { joiResolver } from "@hookform/resolvers/joi/dist/joi"
import { LoginFormSchema } from "./helpers/login-form-schema.helper"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import MessageError from "./MessageError"

const LoginView = () => {
  const router = useRouter()
  const [messageError, setMessageError] = useState<string>("")

  const { register, handleSubmit: onSubmit } = useForm<LoginFormValues>({
    resolver: joiResolver(LoginFormSchema),
    mode: "onChange",
  })
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(
    async ({ username, password }: { username: string; password: string }) =>
      await authenticate(username, password),
    {
      onSuccess: async () => {
        await queryClient.cancelQueries([IS_AUTHENTICATED])
        queryClient.setQueryData([IS_AUTHENTICATED], true)
        router.push("/songs")
      },
      onError: () => {
        setMessageError("Usuario y/o contraseña incorrectos")
      },
    }
  )

  const handleSubmit = async ({
    username,
    password,
  }: LoginFormValues): Promise<void> => {
    setMessageError("")
    mutate({ username, password })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ww-main">
      <div className="bg-ww-content p-16 rounded shadow-md w-[30rem]">
        <h1 className="text-2xl font-bold mb-6">Inicia sesión</h1>
        <form onSubmit={onSubmit(handleSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-ww-normal mb-2">
              Usuario o Correo electrónico
            </label>
            <input
              type="text"
              id="email"
              className="appearance-none border rounded w-full py-2 px-3 text-ww-main leading-tight focus:outline-none focus:shadow-outline"
              {...register("username")}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-ww-normal mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="appearance-none border rounded w-full py-2 px-3 text-ww-main leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="mb-4 bg-ww-green-700 hover:bg-ww-green-600 text-ww-normal font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            {isLoading ? "Cargando..." : "Iniciar sesión"}
          </button>
        </form>
        <div className="text-center mb-4">
          ¿No tienes una cuenta?{" "}
          <Link href="/register" className="text-ww-green-600 hover:underline">
            Regístrate
          </Link>
        </div>
        <MessageError message={messageError} />
      </div>
    </div>
  )
}

type LoginFormValues = {
  username: string
  password: string
}

export default LoginView
