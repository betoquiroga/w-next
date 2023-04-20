const BibleContent = ({ text }: BibleContentProps) => {
  return <p className="font-bold text-white">{text}</p>
}

export default BibleContent

type BibleContentProps = {
  text: string
}
