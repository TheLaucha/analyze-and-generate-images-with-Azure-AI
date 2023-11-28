import axios from "axios"

const subscriptionKey = process.env.REACT_APP_KEY // Reemplaza con tu clave de suscripción de Visión de Azure
const endpoint = process.env.REACT_APP_ENDPOINT // Reemplaza con tu punto de conexión de Visión de Azure

console.log(subscriptionKey)
console.log(endpoint)

export const analyzeImage = async (imageUrl) => {
  try {
    const response = await axios.post(
      `${endpoint}/vision/v3.0/analyze?visualFeatures=Description,Tags,Faces&language=es`,
      { url: imageUrl },
      {
        headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": subscriptionKey,
        },
      }
    )

    return response.data
  } catch (error) {
    console.error("Error al analizar la imagen:", error)
    throw error
  }
}
