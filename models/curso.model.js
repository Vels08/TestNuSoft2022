import mongoose, { model, Schema } from "mongoose"

const cursoSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    
    creditos: Number,
})

export const cursoModel = model("curso", cursoSchema)

