import { estudianteModel } from "../models/estudiante.model.js"

export const crearEstudiante = async (req, res) => {
  try {
    const { email } = req.body

    const estudianteExist = await estudianteModel.findOne({ email })

    if (!estudianteExist) {
      const estudiante = await estudianteModel.create(req.body)
      return res
        .status(201)
        .send({ Mensaje: "El estudiante ha sido creado", estudiante })
    }

    res.status(400).send({ Mensaje: "El estudiante ya existe" })
  } catch (error) {
    console.log(error)
    res.status(500).send({ Mensaje: `Hubo un error: ${error}` })
  }
}

export const getEstudiantes = async (req, res) => {
  try {
    const listaEstudiantes = await estudianteModel.find()
    res.status(200).send({ listaEstudiantes })
  } catch (error) {
    console.log(error)
    res.status(500).send({ Mensaje: `Hubo un error: ${error}` })
  }
}

export const actualizarEstudiante = async (req, res) => {
  try {
    const { id, ...estudiante } = req.body

    const estudianteExist = await estudianteModel.findOne({ _id: id })

    if (!estudianteExist)
      return res.status(400).send({ Mensaje: "El estudiante no existe" })

    await estudianteModel.updateOne({ _id: id }, estudiante)
    //const estActualizado = estudianteModel.findById(id)
    res.status(200).send({ Mensaje: "El estudiante ha sido actualizado" })
  } catch (error) {
    console.log(error)
    res.status(500).send({ Mensaje: `Hubo un error: ${error}` })
  }
}
