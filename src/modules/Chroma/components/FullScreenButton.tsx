const FullScreenButton = () => {
  return (
    <button
      className="bg-black"
      onClick={() => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen()
        } else if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }}
    >
      [ Full ]
    </button>
  )
}

export default FullScreenButton
