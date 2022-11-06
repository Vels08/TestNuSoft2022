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
    type: Number,
    required: true,
  },
  geolocation: {
    latitud: String,
    longitud: String,
  },

})

export const estudianteModel = model("estudiante", estudianteSchema)
