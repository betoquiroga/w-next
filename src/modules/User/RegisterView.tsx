import { ErrorResponse } from "src/common/interfaces/http-response"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Link from "next/link"
import { registration } from "src/common/api/auth/auth.api"
import { IS_AUTHENTICATED } from "src/common/constants/auth"
import { useState } from "react"
import { joiResolver } from "@hookform/resolvers/joi/dist/joi"
import { useForm } from "react-hook-form"
import { RegisterFormSchema } from "./helpers/register-form-schema.helper"
import { RegisterPayload } from "src/common/interfaces/auth-service.interface"
import { useRouter } from "next/navigation"

const RegisterView = () => {
  const router = useRouter()
  const [messageError, setMessageError] = useState<string>()

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: joiResolver(RegisterFormSchema),
    mode: "onChange",
  })
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(
    async ({ name, username, email, password }: RegisterPayload) =>
      await registration({ name, email, username, password }),
    {
      onSuccess: async () => {
        await queryClient.cancelQueries([IS_AUTHENTICATED])

        queryClient.setQueryData([IS_AUTHENTICATED], true)
        router.push("/login")
      },
      onError: (err: ErrorResponse) => {
        setMessageError(err.response.data.errors[0].message)
      },
    }
  )

  const handleSubmit = async ({
    name,
    email,
    username,
    password,
  }: RegisterFormValues): Promise<void> => {
    mutate({ name, email, username, password })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ww-main">
      <div className="bg-ww-content p-16 rounded shadow-md w-[30rem]">
        <h1 className="text-2xl font-bold mb-6">Inicia sesión</h1>
        <form onSubmit={onSubmit(handleSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-ww-normal mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              className="appearance-none border rounded w-full py-2 px-3 text-ww-main leading-tight focus:outline-none focus:shadow-outline"
              {...register("name")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-ww-normal mb-2">
              Nombre de Usuario
            </label>
            <input
              type="text"
              id="username"
              className="appearance-none border rounded w-full py-2 px-3 text-ww-main leading-tight focus:outline-none focus:shadow-outline"
              {...register("username")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-ww-normal mb-2">
              Correo electrónico
            </label>
            <input
              type="text"
              id="email"
              className="appearance-none border rounded w-full py-2 px-3 text-ww-main leading-tight focus:outline-none focus:shadow-outline"
              {...register("email")}
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
          <div className="mb-6">
            <label
              htmlFor="passwordRepeat"
              className="block text-ww-normal mb-2"
            >
              Repite la contraseña
            </label>
            <input
              type="password"
              id="passwordRepeat"
              className="appearance-none border rounded w-full py-2 px-3 text-ww-main leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-ww-green-700 hover:bg-ww-green-600 text-ww-normal font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            {isLoading ? "Cargando..." : "Iniciar sesión"}
          </button>
        </form>
        <div className="text-center mt-4">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="text-ww-green-600 hover:underline">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  )
}

type RegisterFormValues = {
  name: string
  username: string
  email: string
  password: string
}

export default RegisterView
