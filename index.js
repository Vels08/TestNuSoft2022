import express from "express"
import 'dotenv/config'
import "./config/database.js"
import estudianteRouter from './routes/estudiante.routes.js'
import cursoRouter from './routes/curso.routes.js'
import cursoEstudianteRouter from './routes/cursoEstudiante.routes.js'

const app = express()

//Middlewares
app.use(express.json())

//RUTAS
app.use('/api/student', estudianteRouter)
app.use('/api/course', cursoRouter)
app.use('/api/cour_stud', cursoEstudianteRouter)

const port = process.env.port || 3000
app.listen(port, () => console.log(`http://localhost:${port}`))
