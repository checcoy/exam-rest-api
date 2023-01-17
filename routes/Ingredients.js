import express from 'express'
import { getIngredients, getIngredients, addIngredients, updateIngredients, deleteIngredients } from '../controllers/Ingredients.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergreParams: true})

router.get('/', verifyToken, getIngredients)
router.get('/:id', verifyToken, getIngredients)
router.post('/', verifyToken, addIngredients)
router.put('/:id', verifyToken, updateIngredients)
router.delete('/id:', verifyToken, deleteIngredients)

export default router