import { Tab } from "@headlessui/react"
import Bible from "@icons/bible"
import Config from "@icons/config"
import Photo from "@icons/photo"
import Profile from "@icons/profile"
import Song from "@icons/song"

const DashboardView = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-4 gap-4 p-4 w-full min-h-[40rem] justify-items-stretch h-screen pl-[5rem]">
      <div className="bg-ww-content rounded col-span-3 row-span-3">
        <Tab.Group>
          <Tab.List className="bg-ww-main text-ww-lighter">
            <Tab className="rounded-t-lg py-3 px-6 focus:outline-none ui-selected:bg-ww-content ui-selected:text-ww-normal">
              Canciones
            </Tab>
            <Tab className="rounded-t-lg py-3 px-6 focus:outline-none ui-selected:bg-ww-content ui-selected:text-ww-normal">
              Listas
            </Tab>
            <Tab className="rounded-t-lg py-3 px-6 focus:outline-none ui-selected:bg-ww-content ui-selected:text-ww-normal">
              Historial
            </Tab>
          </Tab.List>
          <Tab.Panels className="text-ww-normal p-4">
            <Tab.Panel className="">
              <div className="tab-content">
                <div className="songs-search mb-4">
                  <input
                    type="text"
                    placeholder="Buscar "
                    className="mb-3 w-full p-3 focus:outline-none focus-visible:outline-none bg-ww-alt rounded-lg"
                  />
                  <span>Búsqueda avanzada</span>
                </div>
                <div className="border-b-2 border-b-ww-alt pb-4 flex justify-between w-full">
                  <div className="grid-cols-5 grid gap-4 grid-flow-col self-center">
                    <Song />
                    <Bible />
                    <Photo />
                    <Config />
                    <Profile />
                  </div>
                  <span>Ordenar por</span>
                </div>
                <div className="songs">
                  <div className="song border-b-2 border-b-ww-alt p-4 hover:bg-ww-alt cursor-pointer">
                    <p className="text-ww-normal w-full">
                      El Dios que Adoramos
                    </p>
                    <span className="text-ww-lighter w-full">
                      La IBI & Gracia Soberana
                    </span>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="bg-ww-content rounded col-span-3 row-span-3"></div>
      <div className="bg-ww-content rounded col-span-3 row-span-3"></div>
      <div className="bg-ww-content rounded col-span-3 row-span-3"></div>
      <div className="bg-ww-content rounded col-span-10"></div>
      <div className="bg-ww-content rounded col-span-2"></div>
    </div>
  )
}

export default DashboardView
