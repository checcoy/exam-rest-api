import mongoose from 'mongoose'
import { FoodSchema } from './Procedure.js'

const ProcedureSchema = new mongoose.Schema (
    {
        code: { type: String, required: true, unique: true },
        FoodName: { type: String, required: true },
        timeofexpiration: { type: Number, required: true },
        date: { type: Number, required: true },
        chefId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chef',
            required: true
        },
        Procedure: [ProcedureSchema]
    },
    { timestamps: true }
)

const Procedure = mongoose.model('Ingredients', FoodSchema)
export default Procedure