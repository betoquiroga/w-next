"use client"

import React, { createContext, useContext, useState } from "react"

const VideoContext = createContext({} as VideoContextType)

export const VideoProvider = ({ children }: VideoProviderProps) => {
  const [videoURLs, setVideoURLs] = useState<string[]>([])

  const addVideoURL = (urls: string[]) => {
    const updatedVideoURLs = videoURLs.concat(urls)
    setVideoURLs(updatedVideoURLs)
  }

  const removeVideoURL = (indexToRemove: number) => {
    const updatedVideoURLs = videoURLs.filter(
      (_, index) => index !== indexToRemove
    )
    setVideoURLs(updatedVideoURLs)
  }

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
  addVideoURL: (url: string[]) => void
  removeVideoURL: (indexToRemove: number) => void
}

export function useVideoContext() {
  return useContext(VideoContext)
}
