import { uploadImage } from "@modules/Admin/Styles/Components/Form/StylesUploadImages"
import { createStyle, updateStyle } from "src/common/api/styles/styles.api"

export async function handleSubmit(
  file: File | null,
  styleTitle: string,
  styleDetails: string,
  isEditing: boolean,
  idStyle: number | null,
  setStyleTitle: (title: string) => void,
  setStyleDetails: (details: string) => void,
  setPreview: (preview: string | null) => void,
  setStyleImage: (styleImage: string | null) => void
) {
  if (!file) {
    alert("¡No has seleccionado una imagen!")
    return
  }

  try {
    const fileURL = await uploadImage(file)

    if (isEditing && idStyle !== null) {
      await updateStyle(idStyle, {
        title: styleTitle,
        details: styleDetails,
        type: "Imagen",
        image: fileURL,
        active: false,
      })
      alert("Estilo actualizado")
    } else {
      await createStyle({
        title: styleTitle,
        details: styleDetails,
        type: "Imagen",
        image: fileURL,
        active: false,
      })
      alert("Estilo creado")
    }
    setStyleTitle("")
    setStyleDetails("")
    setPreview(null)
    setStyleImage(null)
  } catch (error) {
    console.error(error)
    alert("Error al crear/actualizar el estilo")
  }
}
