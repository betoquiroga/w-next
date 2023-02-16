import Link from "next/link"
import { useState, FormEvent, ChangeEvent } from "react"

const RegisterView = () => {
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordVerify, setPasswordVerify] = useState("")

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value)
  }

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handlePasswordVerifyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordVerify(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // aquí agregarías el código para enviar los datos de registro a tu servidor
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ww-main">
      <div className="bg-ww-content p-16 rounded shadow-md w-[30rem]">
        <h1 className="text-2xl font-bold mb-6">Crea tu cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-ww-normal mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              className="appearance-none border rounded w-full py-2 px-3 text-ww-main leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-ww-normal mb-2">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="appearance-none border rounded w-full py-2 px-3 text-ww-main leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
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
          <div className="mb-4">
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-ww-normal mb-2">
              Repetir Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={passwordVerify}
              onChange={handlePasswordVerifyChange}
              className="appearance-none border rounded w-full py-2 px-3 text-ww-main leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-ww-green-700 hover:bg-ww-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Regístrate
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

export default RegisterView
