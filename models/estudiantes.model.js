import mongoose, { model, Schema } from "mongoose"

const estudianteSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  grado: {
    type: String,
    required: true,
  },
  grupo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefono:{
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
    enum: ["Activo", "Inactivo"],
  },
  geolocation: {
    latitud: String,
    altitud: String,
  },

})

export const estudianteModel = model("estudiante", estudianteSchema)
