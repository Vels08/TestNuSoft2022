import mongoose, { model, Schema } from "mongoose"

const cursoSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    
    creditos: {
        type: Number,
        required: true,
    }
})

export const cursoModel = model("curso", cursoSchema)

