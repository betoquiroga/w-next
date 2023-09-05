import React, { useEffect, useState, ChangeEvent, SyntheticEvent } from "react"
import { useQuery } from "@tanstack/react-query"
import { Style } from "@interfaces/style.interface"
import { getStyles } from "src/common/api/styles/styles.api"
import StylesHeader from "./Components/StyleViewsComponents/StylesHeader"
import StylesAddButton from "./Components/StyleViewsComponents/StylesAddButton"
import StylesSearchInput from "./Components/StyleViewsComponents/StylesSearchInput"
import StylesTable from "./Components/StyleViewsComponents/StylesTable"
import StylesLoadingError from "./Components/StyleViewsComponents/StylesLoadingError"

const StylesView = () => {
  const { data, isLoading, isError } = useQuery<Style[], Error>(
    ["ALL_STYLES"],
    getStyles
  )
  const [styles, setStyles] = useState<Style[]>([])

  const handleDeleteSuccess = () => {
    window.location.reload()
  }

  useEffect(() => {
    if (data) {
      setStyles(data)
    }
  }, [data])

  const handleError = (
    e: SyntheticEvent<HTMLImageElement, Event>,
    type: string
  ) => {
    const target = e.target as HTMLImageElement
    target.src = type.includes("Video")
      ? "/images/styles/video.jpeg"
      : "/images/styles/error.jpeg"
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
    if (value === "") {
      if (data) {
        setStyles(data)
      }
      return
    }

    if (data) {
      const newData = data.filter(
        (b) =>
          b.title
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          b.details.toLowerCase().includes(value.toLowerCase())
      )

      setStyles(newData)
    }
  }

  return (
    <div className="p-4 pl-[5rem] bg-ww-content pb-16">
      <div className="max-w-[80rem] m-auto">
        <StylesHeader />
        <StylesAddButton />
        <StylesSearchInput handleSearch={handleSearch} />
        <StylesLoadingError isLoading={isLoading} isError={isError} />
        {!isLoading && !isError && (
          <StylesTable
            styles={styles}
            handleError={handleError}
            handleDeleteSuccess={handleDeleteSuccess}
          />
        )}
      </div>
    </div>
  )
}

export default StylesView
