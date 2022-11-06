import {Router} from 'express'
import { actualizarEstudiante, crearEstudiante, getEstudiantes } from '../controllers/estudiante.controller.js'

const router = Router()


router.post('/', crearEstudiante)
router.get('/get_students', getEstudiantes)
router.put('/update_student', actualizarEstudiante)

export default router