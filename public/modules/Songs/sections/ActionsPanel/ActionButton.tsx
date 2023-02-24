import { MouseEventHandler } from "react"

const ActionButton = ({ text, onClick }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-ww-alt transition-all py-2 px-4 rounded-lg mb-4"
    >
      {text}
    </button>
  )
}

type ActionButtonProps = {
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}
export default ActionButton
