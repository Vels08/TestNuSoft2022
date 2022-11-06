import mongoose from "mongoose"

try {
  await mongoose.connect(process.env.URI_MONGO)
  console.log("Conexión DB Ok")
} catch (error) {
  console.log(`Conexión DB Fail: ${error}`)
}
