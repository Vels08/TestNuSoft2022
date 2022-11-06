import {Router} from 'express'
import { getCourseStudent, linkCourse, unlinkCourse } from '../controllers/cursoEstudiante.controller.js'

const router = Router()


router.post('/', linkCourse)
router.get('/get_courses_x_student', getCourseStudent)
router.delete('/', unlinkCourse)

export default router
