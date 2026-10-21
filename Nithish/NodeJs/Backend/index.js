// npm i express nodemon mongoose dotenv

import express from "express"
import { router } from "./Router/Router.js"
import dataBase from "./Database/db.js"

const app = express()
const PORT = 8724

app.use(express.json())
app.use("/crud",router)

dataBase("mongodb://127.0.0.1:27017/Movies")

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})