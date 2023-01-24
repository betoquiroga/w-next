const StyleItem = ({ title, type, style }: SongsItemProps) => {
  return (
    <div className="song border-b-2 border-b-ww-alt last:border-none py-4 flex align-top">
      <img
        src="/images/styles/sideral.jpeg"
        alt="Sideral"
        className="w-[7rem] mr-6 aspect-video"
      />
      <div>
        <p className="text-ww-normal">{title}</p>
        <span className="text-ww-lighter flex">{type}</span>
        <span className="text-ww-lighter flex">{style}</span>
      </div>
    </div>
  )
}

type SongsItemProps = {
  title: string
  type: string
  style: string
}

export default StyleItem
