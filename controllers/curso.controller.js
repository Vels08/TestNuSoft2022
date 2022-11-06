import { cursoModel } from "../models/curso.model.js"

export const createCourse = async (req, res) => {
  try {
    const { nombre } = req.body
    const cursoExist = await cursoModel.findOne({ nombre })

    if (!cursoExist) {
      const curso = await cursoModel.create(req.body)
      return res.status(201).send({ Mensaje: "El curso ha sido creado", curso })
    }

    res.status(400).send({ Mensaje: "El curso ya existe" })
  } catch (error) {
    console.log(error)
    res.status(500).send({ Mensaje: `Hubo un error: ${error}` })
  }
}

export const getCourses = async (req, res) => {
  try {
    const listaCursos = await cursoModel.find()
    res.status(200).send({ listaCursos })
  } catch (error) {
    console.log(error)
    res.status(500).send({ Mensaje: `Hubo un error: ${error}` })
  }
}
