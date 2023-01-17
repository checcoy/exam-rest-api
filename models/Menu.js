import mongoose from 'mongoose'

export const MenuSchema = new mongoose.Schema (
    {
        code: { type: String, required: true, unique: true },
        MenuName: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true}
)

const Menu = mongoose.model('Menu', MenuSchema)
export default Menu