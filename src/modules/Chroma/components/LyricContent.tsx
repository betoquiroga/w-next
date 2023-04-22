const LyricContent = ({ primeraMitad, segundaMitad }: LyricContentProps) => {
  return (
    <p className="font-bold text-white">
      {primeraMitad && primeraMitad}
      {primeraMitad && segundaMitad && <br />}
      {segundaMitad && segundaMitad}
    </p>
  )
}

export default LyricContent

type LyricContentProps = {
  primeraMitad: string
  segundaMitad: string
}
