import React from "react"

const MenuIconsSongResponsive = ({ setActiveColumn }: SubMenuIconsProps) => {
  return (
    <div className="w-full flex justify-between justify-center">
      <div
        className="group pr-6 pl-6 py-6 transition hover:bg-ww-alt"
        onClick={() => setActiveColumn(1)}
      >
        <svg
          className="tooltip"
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          strokeWidth={0.5}
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2116 0.658853C15.3936 0.800983 15.5 1.01906 15.5 1.25001V4.23432C15.5002 4.24518 15.5002 4.25602 15.5 4.26683V11C15.5 11.743 15.0483 12.3239 14.507 12.6847C13.9605 13.049 13.2487 13.25 12.5 13.25C11.7513 13.25 11.0395 13.049 10.493 12.6847C9.95173 12.3239 9.5 11.743 9.5 11C9.5 10.257 9.95173 9.67615 10.493 9.31531C11.0395 8.95098 11.7513 8.75001 12.5 8.75001C13.0344 8.75001 13.5499 8.85238 14 9.04344V5.21059L6.5 7.08559V13.25C6.5 13.993 6.04827 14.5739 5.50702 14.9347C4.96052 15.299 4.24874 15.5 3.5 15.5C2.75126 15.5 2.03948 15.299 1.49298 14.9347C0.951727 14.5739 0.5 13.993 0.5 13.25C0.5 12.507 0.951727 11.9261 1.49298 11.5653C2.03948 11.201 2.75126 11 3.5 11C4.03438 11 4.54993 11.1024 5 11.2934V6.51569C4.99976 6.50483 4.99977 6.49399 5 6.48319V3.50001C5 3.15586 5.23422 2.85587 5.5681 2.7724L14.5681 0.5224C14.7922 0.466386 15.0295 0.516722 15.2116 0.658853ZM6.5 5.53942L14 3.66442V2.21059L6.5 4.08559V5.53942ZM5 13.25C5 13.1646 4.94805 12.9954 4.67497 12.8134C4.40713 12.6348 3.9939 12.5 3.5 12.5C3.0061 12.5 2.59287 12.6348 2.32503 12.8134C2.05195 12.9954 2 13.1646 2 13.25C2 13.3354 2.05195 13.5046 2.32503 13.6866C2.59287 13.8652 3.0061 14 3.5 14C3.9939 14 4.40713 13.8652 4.67497 13.6866C4.94805 13.5046 5 13.3354 5 13.25ZM14 11C14 10.9146 13.948 10.7454 13.675 10.5634C13.4071 10.3848 12.9939 10.25 12.5 10.25C12.0061 10.25 11.5929 10.3848 11.325 10.5634C11.052 10.7454 11 10.9146 11 11C11 11.0854 11.052 11.2546 11.325 11.4366C11.5929 11.6152 12.0061 11.75 12.5 11.75C12.9939 11.75 13.4071 11.6152 13.675 11.4366C13.948 11.2546 14 11.0854 14 11Z"
            fill="#D9F5EE"
          />
        </svg>
        <div className="hidden group-hover:block absolute bg-black text-white text-sm p-2 rounded mt-2">
          Canciones
        </div>
      </div>
      <div
        className="group pr-6 pl-6 py-6 transition hover:bg-ww-alt"
        onClick={() => setActiveColumn(2)}
      >
        <svg
          className="w-6 h-6 tooltip"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
        <div className="hidden group-hover:block absolute bg-black text-white text-sm p-2 rounded mt-2">
          Letras
        </div>
      </div>
      <div
        className="group pr-6 pl-6 py-6 transition hover:bg-ww-alt"
        onClick={() => setActiveColumn(3)}
      >
        <svg
          className="w-6 h-6 tooltip"
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
        onClick={() => setActiveColumn(4)}
      >
        <svg
          className="w-6 h-6 md:hidden tooltip"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
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

interface SubMenuIconsProps {
  setActiveColumn: (column: number) => void
}

export default MenuIconsSongResponsive
