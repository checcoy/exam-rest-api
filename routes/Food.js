import express from 'express'
import { getFood, getFood, addFood, updateFood, deleteFood } from '../controllers/Food.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergreParams: true})

router.get('/', verifyToken, getFood)
router.get('/:id', verifyToken, getFood)
router.post('/', verifyToken, addFood)
router.put('/:id', verifyToken, updateFood)
router.delete('/id:', verifyToken, deleteFood)

export default router