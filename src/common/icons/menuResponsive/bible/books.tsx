const Books = ({ setActiveColumn }: SubMenuIconsProps) => {
  return (
    <div
      className="group pr-6 pl-6 py-6 transition hover:bg-ww-alt"
      onClick={() => setActiveColumn(1)}
    >
      <svg
        className="w-6 h-6 tooltip"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
      <div className="hidden group-hover:block absolute bg-black text-white text-sm p-2 rounded mt-2">
        Libros
      </div>
    </div>
  )
}

interface SubMenuIconsProps {
  setActiveColumn: (column: number) => void
  className?: string
}

export default Books
