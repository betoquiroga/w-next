import Link from "next/link"
import { useState, FormEvent, ChangeEvent } from "react"

const LoginView = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // aquí agregarías el código para enviar los datos de inicio de sesión a tu servidor
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ww-main">
      <div className="bg-ww-content p-16 rounded shadow-md w-[30rem]">
        <h1 className="text-2xl font-bold mb-6">Inicia sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-ww-normal mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="appearance-none border rounded w-full py-2 px-3 text-ww-main leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-ww-normal mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="appearance-none border rounded w-full py-2 px-3 text-ww-main leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-ww-green-700 hover:bg-ww-green-600 text-ww-normal font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="text-center mt-4">
          ¿No tienes una cuenta?{" "}
          <Link href="/register" className="text-ww-green-600 hover:underline">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginView
