import express from 'express'
import { getSong, getMenu, addMenu, updateMenu, deleteMenu } from '../controllers/Menu.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getMenu)
router.get('/:id', verifyToken, getMenu)
router.post('/', verifyToken, addMenu)
router.put('/:id', verifyToken, updateMenu)
router.delete('/:id', verifyToken, deleteMenu)

export default router