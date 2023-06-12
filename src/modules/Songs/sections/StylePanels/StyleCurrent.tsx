import { StyleContext } from "src/common/context/StyleContext"
import { useContext } from "react"
import StyleItem from "./StyleItem"

const StyleCurrent = () => {
  const { style } = useContext(StyleContext)
  return (
    <div className="songs mb-4">
      <StyleItem
        id={style.id}
        title={style.title}
        type={style.type}
        details={style.details}
        image={style.image}
        current
      />
    </div>
  )
}

export default StyleCurrent
