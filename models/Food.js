import mongoose from 'mongoose'
import { MenuSchema } from './Food.js'

const FoodSchema = new mongoose.Schema (
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
        menu: [MenuSchema]
    },
    { timestamps: true }
)

const Food = mongoose.model('Food', FoodSchema)
export default Food