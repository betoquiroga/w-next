import { WW_API_DOMAIN } from "src/common/constants/domains"

export const uploadImage = async (file: string | Blob) => {
  try {
    const formData = new FormData()
    formData.append("file", file)

    const uploadResponse = await fetch(
      `http://${WW_API_DOMAIN}/uploads/styles`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `${localStorage.getItem("tokenWW")}`,
        },
      }
    )

    if (!uploadResponse.ok) {
      throw new Error("Error uploading image")
    }

    const uploadResp = await uploadResponse.json()
    return uploadResp.file
  } catch (error) {
    console.error(error)
    alert("Error uploading image")
    return ""
  }
}
