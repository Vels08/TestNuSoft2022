import {Router} from 'express'
import { createCourse, getCourses } from '../controllers/curso.controller.js'

const router = Router()

router.post('/', createCourse)
router.get('/get_courses', getCourses)

export default router