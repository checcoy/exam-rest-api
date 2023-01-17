import Food from '../models/Food.js'

export const getMenu = async (req, res) => {
    try {
        const Food = await Food.findById(req.params.albumId)
        const { FoodName } = req.query
    
        if (foodName) {
            food.menu = food.menu.filter((item) => item.foodName == expiration)
        }

        if (food.menu.length !== 0)
            res.status(200).json(food.menu)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getFood = async (req, res) => {
    try {
        const { ChefId, id } = req.params
        const food = await food.findById(chefId)
        const menu = food.menu.id(id)

        if (course)
            res.status(200).json(menu)
        else
            res.status(404).json({ error: 'resource not found' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addMenu = async (req, res) => {
    try {
        const newMenu = req.body
        const food = await food.findById(req.params.foodId)
        food.menu.push(newmenu)
        await food.save()
        const idNewmenu = food.menu.id[food.menu.length-1]._id
        res.status(201).json({ id: idNewMenu })
    } catch (err) {
        res.status(500).json({ errpr: err.message })
    }
}

export const deleteMenu = async (req, res) => {
    try {
        const { foodId, id } = req.params
        const food = await food.findById(foodId)
        food.menu.id(id).remove();
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message})
    }
}

export const updateMenu = async (req, res) => {
    try {
        const { foodId, id } = req.params
        const food = await food.findById(foodId)

        const {code, menuName, description} = req.body
        food.menu.id(id).code = code
        food.menu.id(id).menuName = menuName
        food.menu.id(id).description = description

        await food.save()
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}