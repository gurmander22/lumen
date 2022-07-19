import app from "./app.js"
import dotenv from "dotenv"
import connectDatabase from "./config/database.js"

dotenv.config({ path: 'Lumen-Backend/config/config.env' })
connectDatabase()

app.listen(process.env.PORT, () => {
    console.log(`listening on port http://localhost:${process.env.PORT}`)
})