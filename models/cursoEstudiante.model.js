import { model, Schema } from "mongoose"

const cursoEstudianteSchema = new Schema({
  estudianteId: {
    type: Schema.Types.ObjectId,
    ref: "estudiante",
    required: true,
  },
  cursoId: {
    type: Schema.Types.ObjectId,
    ref: "curso",
    required: true,
  },
})

export const cursoEstudianteModel = model(
  "cursoEstudiante",
  cursoEstudianteSchema
)
