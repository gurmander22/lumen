import express from "express";


const app = express()
app.use(express.json())

// route imports
import product from './routes/productRoute.js'
app.use('/api/v1', product)


export default app