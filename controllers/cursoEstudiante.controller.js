import { cursoModel } from "../models/curso.model.js"
import { cursoEstudianteModel } from "../models/cursoEstudiante.model.js"
import { estudianteModel } from "../models/estudiante.model.js"

export const linkCourse = async (req, res) => {
  try {
    const { estudianteId, cursoId } = req.body

    //Buscar estudiante
    const eId = await estudianteModel.findOne({ _id: estudianteId })
    const nombreEst = eId.nombre + " " + eId.apellido
    if (!eId)
      return res.status(400).send({ Mensaje: "El estudiante no existe" })

    //Buscar curso
    const cId = await cursoModel.findById({ _id: cursoId })
    const nombreCurso = cId.nombre
    if (!cId) return res.status(400).send({ Mensaje: "El curso no existe" })

    //Crear link
    const cursoEnlazado = await cursoEstudianteModel.create(req.body)

    res
      .status(201)
      .send({ Mensaje: "El curso ha sido enlazado", nombreEst, nombreCurso })
  } catch (error) {
    console.log(error)
    res.status(500).send({ Mensaje: `Hubo un error: ${error}` })
  }
}

export const getCourseStudent = async (req, res) => {
  try {
    const listaCursoEstudiante = await cursoEstudianteModel.find()

    res.status(200).send({ Mensaje: "Lista de cursos", listaCursoEstudiante })
  } catch (error) {
    console.log(error)
    res.status(500).send({ Mensaje: `Hubo un error: ${error}` })
  }
}

export const unlinkCourse = async (req, res) => {
  try {
    const { id } = req.body
    const cursoDesenlazado = await cursoEstudianteModel.findByIdAndDelete(id)

    if (!cursoDesenlazado)
      return res.status(400).send({ Mensaje: "El enlace no existe" })

    res.status(200).send({ Mensaje: "El enlace ha sido borrado" })
  } catch (error) {
    console.log(error)
    res.status(500).send({ Mensaje: `Hubo un error: ${error}` })
  }
}
