const LiveItem = ({ title, src }: LiveItemProps) => {
  return (
    <div className="live-screen h-full">
      <span>{title} </span>
      <img src={src} alt={title} className="mt-4 h-[13rem] aspect-video" />
    </div>
  )
}

type LiveItemProps = {
  title: string
  src: string
}

export default LiveItem
