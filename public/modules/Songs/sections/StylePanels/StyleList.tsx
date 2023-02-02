import { Style } from "@interfaces/style.interface"
import StyleItem from "./StyleItem"

const StyleList = ({ data }: StyleListProps) => {
  return (
    <div className="songs">
      {data.map((i) => (
        <StyleItem
          key={i.id}
          title={i.title}
          type={i.type}
          details={i.details}
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
