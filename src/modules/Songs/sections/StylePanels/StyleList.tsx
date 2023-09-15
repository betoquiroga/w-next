import { Style } from "src/common/interfaces/style.interface"
import StyleItem from "./StyleItem"

const StyleList = ({ data }: StyleListProps) => {
  if (!data) {
    return null
  }

  return (
    <div className="songs">
      {data.map((i) => (
        <StyleItem
          key={i.id}
          title={i.title}
          type={i.type}
          details={i.details}
          active={i.active}
          image={i.image}
          id={i.id}
        />
      ))}
    </div>
  )
}

type StyleListProps = {
  data: Array<Style>
}

export default StyleList
