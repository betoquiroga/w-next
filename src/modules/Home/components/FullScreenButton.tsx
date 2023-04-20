const FullScreenButton = () => {
  return (
    <button
      className="bg-black"
      onClick={() => {
        if (!window.document.fullscreenElement) {
          window.document.documentElement.requestFullscreen()
        } else if (window.document.exitFullscreen) {
          window.document.exitFullscreen()
        }
      }}
    >
      [ ]
    </button>
  )
}

export default FullScreenButton
