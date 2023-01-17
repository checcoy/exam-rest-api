import Food from '../models/Food.js'
import Chef from '../models/Chef.js'

export const getFood = async (req, res) => {
    try {
        const Food = await Food
           .find({ chefId: req.params.chefId })
           .populate('ChefId')
           .select('code ChefName numberofyearsactive ChefId')
        if (Food.length !== 0)
            res.status(200).json(Food)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getfood = async (req, res) => {
    try {
        const { id } = req.params
        const food = await food.findById(id)
            .populate('ChefId')
            .select('code ChefName numberofyearsactive ChefId')
        if (Food)
            res.status(200).json(Food)
        else (Food)
            res.status(404).json({ error: 'resource not found '})
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addFood = async (req, res) => {
    try {
        const { code, FoodName, numberOfFood, specialty } = req.body
        const chefId = req.params.chefId
        const newFood = await Food.create({
            code,
            FoodName,
            numberOfFood,
            specialty,
            chefId
        })
        const savedFood = await newFood.save()
        res.status(201).json({ id: savedchef._id })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteFood = async (req, res) => {
    try {
        await food.deleteOne({
            chefId: req.params.chefId,
            _id: req.params.id
        })
        res.status(204).send()
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

export const updateFood = async (req, res) => {
    try {
        const filter = {
            chefId: req.params.chefId,
            _id: req.params.id
        }
        const { version, year } = req.body
        const update = {
            code: code,
            foodName: foodName,
            numberOfFood: numberOfFood,
            expiration: expiration,
        }
        await Food.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}