const handleFileUpload = async (files: File[], endpoint: string) => {
  if (files.length === 0) return

  const formData = new FormData()

  files.forEach((file) => {
    formData.append("file", file)
  })

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `${localStorage.getItem("tokenWW")}`,
      },
    })

    if (!response.ok) {
      throw new Error("Error cargando las imágenes")
    }

    alert("Se subieron las imágenes correctamente")
    return true
  } catch (error) {
    console.error(error)
    alert("Error subiendo las imágenes")
    return false
  }
}

export default handleFileUpload
