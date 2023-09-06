export const handleSearch = <T>(
  value: string,
  data: T[] | null,
  setData: (data: T[]) => void
) => {
  const normalizedValue = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  if (normalizedValue === "") {
    setData(data || [])
  } else if (data) {
    const newData = data.filter((item) =>
      JSON.stringify(item)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(normalizedValue.toLowerCase())
    )
    setData(newData)
  }
}
