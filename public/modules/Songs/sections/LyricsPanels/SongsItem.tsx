const SongsItem = ({ title, author }: SongsItemProps) => {
  return (
    <div className="song border-t-2 border-t-ww-alt p-4 hover:bg-ww-alt cursor-pointer">
      <p className="text-ww-normal">{title}</p>
      <span className="text-ww-lighter">{author}</span>
    </div>
  )
}

type SongsItemProps = {
  title: string
  author: string
}

export default SongsItem
