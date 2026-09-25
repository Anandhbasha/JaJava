// express mongoose cors bcryptjs jsonwebtoken dotenv

import express from "express"
import db from "./Db/db.js"
import router from "./Router/studentsRouter.js"

const app = express()

app.use(express.json())
const PORT = 3561

app.use("/studentRegister",router)
db("mongodb://127.0.0.1:27017/fullSTack")

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})