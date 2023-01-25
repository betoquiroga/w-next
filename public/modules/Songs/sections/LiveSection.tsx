import LiveItem from "./LivePanel/LiveItem"

const LiveSection = () => {
  return (
    <div className="bg-ww-content rounded col-span-10 p-4 overflow-y-scroll">
      <div className="pt-4 flex gap-4">
        <LiveItem
          title="Pantalla Principal - TV"
          src="/images/styles/sideral.jpeg"
        />
        <LiveItem
          title="Pantalla Principal - TV"
          src="/images/styles/sideral.jpeg"
        />
        <LiveItem
          title="Pantalla Principal - TV"
          src="/images/styles/sideral.jpeg"
        />
      </div>
    </div>
  )
}

export default LiveSection
