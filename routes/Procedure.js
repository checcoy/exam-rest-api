import express from 'express'
import { getProcedure, getProcedure, addProcedure, updateProcedure, deleteProcedure } from '../controllers/Procedure.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergreParams: true})

router.get('/', verifyToken, getProcedure)
router.get('/:id', verifyToken, getProcedure)
router.post('/', verifyToken, addProcedure)
router.put('/:id', verifyToken, updateProcedure)
router.delete('/id:', verifyToken, deleteProcedure)

export default router