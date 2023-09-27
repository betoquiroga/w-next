import { Style } from "@interfaces/style.interface"
import { WW_STYLES_FOLDER, buildImageURL } from "src/common/constants/style"

const Dropdown = ({
  selectedStyle,
  styles,
  handleStyleSelect,
  dropdownOpen,
  toggleDropdown,
}: DropdownProps) => {
  return (
    <div className="input mb-4 relative col-span-2">
      <div
        className="selected-style flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          {selectedStyle ? (
            <>
              <img
                src={buildImageURL(
                  selectedStyle.image,
                  WW_STYLES_FOLDER,
                  "small"
                )}
                alt={selectedStyle.title}
                className="w-[7rem] mr-6 aspect-video hover:opacity-80 border border-gray-800 rounded-lg"
              />
              <span className="flex-grow">{selectedStyle.title}</span>
            </>
          ) : (
            <span>Seleccione un estilo</span>
          )}
        </div>
        <svg
          className="w-5 h-5 ml-2 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {dropdownOpen && (
        <ul className="style-dropdown max-h-[400px] overflow-y-auto mt-2">
          <li
            onClick={() => handleStyleSelect(null)}
            className="flex items-center border-b border-gray-900 py-2 hover:bg-gray-900 cursor-pointer"
          >
            <span>Ningún estilo</span>
          </li>
          {styles.map((style) => (
            <li
              key={style.id}
              onClick={() => handleStyleSelect(style)}
              className="flex items-center border-b border-gray-900 py-2 hover:bg-gray-900 cursor-pointer"
            >
              <img
                src={buildImageURL(style.image, WW_STYLES_FOLDER, "small")}
                alt={style.title}
                className="w-[7rem] ml-4 mr-6 aspect-video hover:opacity-80 border border-gray-800 rounded-lg"
              />
              <span className="flex-grow">{style.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

interface DropdownProps {
  selectedStyle: Style | null
  styles: Style[]
  handleStyleSelect: (style: Style | null) => void
  dropdownOpen: boolean
  toggleDropdown: () => void
}

export default Dropdown
