import Chef from "../models/Chef.js"

export const getchef = async (req, res) => {
    try {
        const Chef = await Chef.find()
        if (Chef.length !== 0)
            res.status(200).json(Chef)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getChef = async (req, res) => {
    try {
        const { id } = req.params
        const Chef = await Chef.findById(id)
        if (Chef)
            res.status(200).json(Chef)
        else
            res.status(404).json({ error: 'resource not found' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addChef = async (req, res) => {
    try {
        const { code, fullName, yearsActive } = req.body
        const newChef = await Chef.create({
            code,
            fullName,
            yearsActive
        })
        const savedChef = await newChef.save()
        res.status(201).json({ id: savedChef.id })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteChef = async (req, res) => {
    try {
        await Chef.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}

export const updateChef = async (req, res) => {
    try {
        const filter = { _id: req.params.id }
        const { code, fullName, yearsActive } = req.body
        const update = {
            code: code,
            fullName: fullName,
            yearsActive: yearsActive
        }

        await Chef.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}