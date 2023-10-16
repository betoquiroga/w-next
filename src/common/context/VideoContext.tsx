"use client"

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react"

const VideoContext = createContext({} as VideoContextType)

export const VideoProvider = ({ children }: VideoProviderProps) => {
  const [videoURLs, setVideoURLs] = useState<string[]>([])

  const addVideoURL = useCallback((url: string) => {
    setVideoURLs((prevVideoURLs) => {
      const updatedVideoURLs = [...prevVideoURLs, url]
      localStorage.setItem("videoURLs", JSON.stringify(updatedVideoURLs))
      return updatedVideoURLs
    })
  }, [])

  const removeVideoURL = useCallback((indexToRemove: number) => {
    setVideoURLs((prevVideoURLs) => {
      const updatedVideoURLs = prevVideoURLs.filter(
        (_, index) => index !== indexToRemove
      )
      localStorage.setItem("videoURLs", JSON.stringify(updatedVideoURLs))
      return updatedVideoURLs
    })
  }, [])

  useEffect(() => {
    try {
      const storedVideoURLs = localStorage.getItem("videoURLs")
      if (storedVideoURLs) {
        setVideoURLs(JSON.parse(storedVideoURLs))
      }
    } catch (error) {
      console.error(
        "Error al cargar datos desde el almacenamiento local:",
        error
      )
    }
  }, [])

  return (
    <VideoContext.Provider value={{ videoURLs, addVideoURL, removeVideoURL }}>
      {children}
    </VideoContext.Provider>
  )
}

type VideoProviderProps = {
  children: React.ReactNode
}

type VideoContextType = {
  videoURLs: string[]
  addVideoURL: (url: string) => void
  removeVideoURL: (indexToRemove: number) => void
}

export function useVideoContext() {
  return useContext(VideoContext)
}
