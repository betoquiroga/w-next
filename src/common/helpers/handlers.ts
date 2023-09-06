export const handleSearch = <T>(value: string, data: T[] = []) => {
  const normalizedValue = normalizeValue(value)

  if (normalizedValue === "") {
    return data
  } else {
    const newData = data.filter((item) =>
      normalizeValue(JSON.stringify(item))
        .toLowerCase()
        .includes(normalizedValue.toLowerCase())
    )
    return newData
  }
}

export const normalizeValue = (value: string) => {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}
