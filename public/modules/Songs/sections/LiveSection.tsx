import LiveItem from "./LivePanel/LiveItem"

const LiveSection = () => {
  return (
    <div className="bg-ww-content rounded col-span-10 p-4">
      <div className="flex gap-6">
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
