import { useEffect, useState } from "react"

const useAnimation = (prefix: string, compare: string, delay: number) => {
  const [animationClass, setAnimationClass] = useState<string>(`${prefix}-in`)
  const [displayedData, setDisplayedData] = useState<string>(compare)

  useEffect(() => {
    if (displayedData !== compare) {
      setAnimationClass(`${prefix}-out`)
      setTimeout(() => {
        setDisplayedData(compare)
        setAnimationClass(`${prefix}-in`)
      }, delay)
    }
  }, [compare, displayedData])

  return { animationClass, displayedData }
}

export default useAnimation
