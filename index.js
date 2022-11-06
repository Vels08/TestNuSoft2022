import express from "express"
import 'dotenv/config'
import "./config/database.js"

const app = express()

//Middlewares
app.use(express.json())

//RUTAS
// app.use('/api/', authRouter)
// app.use('/api/links', linkRouter)

const port = process.env.port || 3000
app.listen(port, () => console.log(`http://localhost:${port}`))
