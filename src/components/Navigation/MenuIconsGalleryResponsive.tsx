const MenuIconsGalleryResponsive = ({
  setActiveColumn,
}: SubMenuColumnProps) => {
  return (
    <div className="w-full flex justify-between justify-center">
      <div
        className="group pr-6 pl-6 py-6 transition hover:bg-ww-alt"
        onClick={() => setActiveColumn(1)}
      >
        <svg
          className="w-6 h-6 tooltip md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <div className="hidden group-hover:block absolute bg-black text-white text-sm p-2 rounded mt-2">
          Estilos
        </div>
      </div>
      <div
        className="group pr-6 pl-6 py-6 transition hover:bg-ww-alt"
        onClick={() => setActiveColumn(2)}
      >
        <svg
          className="w-6 h-6 tooltip md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <div className="hidden group-hover:block absolute bg-black text-white text-sm p-2 rounded mt-2">
          Vista previa
        </div>
      </div>
    </div>
  )
}

interface SubMenuColumnProps {
  setActiveColumn: (section: number) => void
}

export default MenuIconsGalleryResponsive
