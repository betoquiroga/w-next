import { Tab } from "@headlessui/react"

const TabsHeader = ({ items }: TabsHeaderProps) => {
  return (
    <Tab.List className="bg-ww-main text-ww-lighter">
      {items.map((i) => (
        <Tab
          key={i}
          className="rounded-t-lg py-3 px-6 focus:outline-none ui-selected:bg-ww-content ui-selected:text-ww-normal"
        >
          {i}
        </Tab>
      ))}
    </Tab.List>
  )
}

type TabsHeaderProps = {
  items: Array<string>
}

export default TabsHeader
