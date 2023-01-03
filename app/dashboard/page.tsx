'use client'

import { socket } from "../../socket/mainSocket"

export default function Dashboard() {
  const addMessage = (e: React.SyntheticEvent) => {
    socket.emit("message", e.currentTarget.innerHTML)
  }

  return (
    <div>
      <p onClick={addMessage} className="bg-gray-500 p-5">
        El Dios que hizo los cielos y la tierra <br /> Con el poder de su
        palabra <br /> Y reina con autoridad
      </p>
      <p onClick={addMessage} className="bg-gray-500 p-5">
        El Dios que aún los vientos le obedecen <br /> Una palabra es suficiente
        <br />
        Para los muertos levantar
      </p>
      <p onClick={addMessage} className="bg-gray-500 p-5">
        Nadie es como él <br /> Oh, gran yo soy
      </p>
    </div>
  )
}