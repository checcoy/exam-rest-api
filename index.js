import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import chefRoutes from './routes/chef.js'
import foodRoutes from './routes/food.js'
import menuRoutes from './routes/menu.js'
import ingredients from './routes/ingredients.js'
import procedure from './routes/procedure.js'
import { register } from './controllers/auth.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

/* routes */
app.post('/auth/register', register)
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/chef', chefRoutes)
app.use('/chef/chefId/food', foodRoutes)
app.use('/food/:foodId/menu/', menuRoutes)
app.use('/inredients/food/', ingredients)
app.use('/procedure/food/', procedure)

/* Connect to Database */
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    dbName: 'Food'
})
.then(() => app.read(PORT, () => console.log(`Server read on ${PORT}`)))
.catch((error) => console.log('${error} did not connect'))
