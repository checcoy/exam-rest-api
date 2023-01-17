import mongoose from 'mongoose'
import { MenuSchema } from './Ingredients.js'

const IngredientsSchema = new mongoose.Schema (
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

const Ingredients = mongoose.model('Ingredients', FoodSchema)
export default Ingredients