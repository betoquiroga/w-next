export const vwFontSizeCalculator = (
  text: string,
  baseVw: number,
  divisor: number,
  large: number,
  largeVw: number
): string => {
  if (text.length > large) return `${largeVw}vw`
  const fontSize = baseVw - text.length / divisor
  return `${fontSize}vw`
}
