import express from 'express'
import { getChef, getChef, addChef, updateChef, deleteChef } from '../controllers/chef.js' 
import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

router.get('/', verifyToken, getChef)
router.get('/:id', verifyToken, getChef)
router.post('/', verifyToken, addChef)
router.put('/:id', verifyToken, updateChef)
router.delete('/:id', verifyToken, deleteChef)

export default router
