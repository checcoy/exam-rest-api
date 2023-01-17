import Food from '../models/Food.js'
import ingredients from '../models/ingredients.js'

export const getingredients = async (req, res) => {
    try {
        const ingredients = await ingredients
           .find({ foodId: req.params.foodId })
           .populate('foodId')
           .select('code foodName dateofexpiration foodId')
        if (ingredints.length !== 0)
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

export const addingredients = async (req, res) => {
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

export const deleteingredients = async (req, res) => {
    try {
        await ingredients.deleteOne({
            foodId: req.params.foodId,
            _id: req.params.id
        })
        res.status(204).send()
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

export const updateingredients = async (req, res) => {
    try {
        const filter = {
            foodId: req.params.foodId,
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