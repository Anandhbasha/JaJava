import express from "express"
import { router } from "./Router/router.js"
const app = express()
app.use(express.json())
const PORT = 6731
// route // request // response // controller
app.use("/crud",router)
// MVC -> Model view controller

app.listen(PORT,()=>{
    console.log(`The server is running under:http://localhost:${PORT}`)    
})