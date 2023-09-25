import React, { useEffect, useState, ChangeEvent, useContext } from "react"
import { Style } from "@interfaces/style.interface"
import StylesHeader from "./Components/StyleViewsComponents/StylesHeader"
import StylesAddButton from "./Components/StyleViewsComponents/StylesAddButton"
import StylesSearchInput from "./Components/StyleViewsComponents/StylesSearchInput"
import StylesTable from "./Components/StyleViewsComponents/StylesTable"
import StylesLoadingError from "./Components/StyleViewsComponents/StylesLoadingError"
import { handleError } from "./Helpers/Handlers"
import { StyleContext } from "@context/StyleContext"
import { handleSearch } from "@helpers/handlers"

const StylesView = () => {
  const { data, isLoading, isError } = useContext(StyleContext)
  const [styles, setStyles] = useState<Style[]>([])

  useEffect(() => {
    if (data) {
      setStyles(data as Style[])
    }
  }, [data])

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setStyles(handleSearch(e.target.value, data))
  }

  return (
    <div className="p-4 pl-[5rem] bg-ww-content pb-16">
      <div className="max-w-[80rem] m-auto">
        <StylesHeader />
        <StylesAddButton />
        <StylesSearchInput handleSearch={onSearch} />
        <div className="m-auto general-section max-h-[50vh] md:max-h-[35vh] lg:max-h-[70vh]">
          <StylesLoadingError isLoading={isLoading} isError={isError} />
          {!isLoading && !isError && (
            <StylesTable styles={styles} handleError={handleError} />
          )}
        </div>
      </div>
    </div>
  )
}

export default StylesView
