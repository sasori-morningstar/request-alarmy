import dotenv from "dotenv"
import express from "express"
import routes from "./routes.js"


dotenv.config()
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`request-alarmy: Server is running on port ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/request-alarmy", routes)

