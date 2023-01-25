const ActionButton = ({ text }: ActionButtonProps) => {
  return (
    <button className="w-full bg-ww-alt transition-all py-2 px-4 rounded-lg mb-4">
      {text}
    </button>
  )
}

type ActionButtonProps = {
  text: string
}
export default ActionButton
