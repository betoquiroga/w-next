const PreviewHeader = ({ text, select }: PreviewHeaderProps) => {
  return (
    <div className="pb-4 flex justify-between w-full border-b-2 border-b-ww-alt">
      <span>{text}</span>
      {select && <span>Cambiar</span>}
    </div>
  )
}

type PreviewHeaderProps = {
  text: string
  select?: boolean
}

export default PreviewHeader
