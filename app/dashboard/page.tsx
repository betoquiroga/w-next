'use client'

import { socket } from "../../socket/mainSocket"
import songs from "../../__mock__/songs"
import ReactHtmlParser from "react-html-parser"

export default function Dashboard() {
  const addMessage = (e: React.SyntheticEvent) => {
    socket.emit("message", e.currentTarget.innerHTML)
  }

  return (
    <div>
      {songs[0].lyrics.map(( vers ) => (
        <div key={vers.order}  onClick={addMessage} className="p-5 text-white hover:bg-slate-800 cursor-pointer">
          {ReactHtmlParser(vers.content)}
        </div>
      ))}
    </div>
  )
}