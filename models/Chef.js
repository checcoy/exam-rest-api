import mongoose from 'mongoose'

const ChefSchema = new mongoose.Schema (
    {
        code: { type: String, required: true, unique: true },
        fullName: { type: String, required: true },
        yearsActive: { type: Number, required: true }
    },
    { timestamps: true }
)

const Chef = mongoose.model ('Chef', ChefSchema)
export default Chef