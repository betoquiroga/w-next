"use client"

import { Lyric } from "@interfaces/lyrics.interface"
import { Song } from "@interfaces/song.interface"
import axios, { HttpStatusCode } from "axios"
import { useEffect, useState } from "react"
import { WW_API_DOMAIN } from "src/common/constants/domains"

export default function SongId({ params }: SongIdProps) {
  const [song, setSong] = useState<Song | undefined>()
  const [lyrics, setLyrics] = useState<Lyric[] | undefined>()

  useEffect(() => {
    axios
      .get(`https://${WW_API_DOMAIN}/songs/${params.id}`, {
        headers: {
          Authorization: `${localStorage.getItem("tokenWW")}`,
        },
      })
      .then((r) => {
        setSong(r.data)
        axios
          .get(`https://${WW_API_DOMAIN}/lyrics/song/${params.id}`, {
            headers: {
              Authorization: `${localStorage.getItem("tokenWW")}`,
            },
          })
          .then((re) => {
            setLyrics(re.data)
          })
          .catch((e) => {
            if (e.response.status === HttpStatusCode.NotFound) {
              setLyrics([])
            }
          })
      })
  }, [])

  if (!song || !lyrics) {
    return (
      <div className="px-24 py-16">
        <h1>Cargando...</h1>
      </div>
    )
  }

  return (
    <div className="px-24 py-10">
      <div className="mb-4">
        <h1 className="text-4xl">{song.title}</h1>
        <span className="text-xl text-slate-400">{song.author}</span>
      </div>
      <hr />
      <div className="pt-4">
        {lyrics
          .sort((a, b) => a.order - b.order)
          .map((ly) => (
            <p key={ly.id} className="mb-4">
              {
                <>
                  {ly.verse.split("\n").map((s) => (
                    <span key={s}>
                      {s}
                      <br />
                    </span>
                  ))}
                </>
              }
            </p>
          ))}
      </div>
    </div>
  )
}

type SongIdProps = {
  params: {
    id: string
  }
}
