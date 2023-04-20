export const parseContent = (text: string) => {
  const lineas = text.split("\n")
  const cantidadSaltosDeLinea = lineas.length - 1

  if (cantidadSaltosDeLinea === 1) {
    return {
      primeraMitad: lineas[0],
      segundaMitad: lineas[1],
    }
  }

  const palabras = text.split(" ")
  const cantidadPalabras = palabras.length
  const mitad = Math.floor(cantidadPalabras / 2)

  const primeraMitad = palabras.slice(0, mitad).join(" ")
  const segundaMitad = palabras.slice(mitad).join(" ")

  return { primeraMitad, segundaMitad }
}
