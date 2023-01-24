const StyleHeader = ({ text }: StyleHeaderProps) => {
  return (
    <div className="pb-4 flex justify-between w-full">
      <span>{text}</span>
    </div>
  )
}

type StyleHeaderProps = {
  text: string
}

export default StyleHeader
