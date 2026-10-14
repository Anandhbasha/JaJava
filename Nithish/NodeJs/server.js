import express from "express"
import { route } from "./Router/router.js"
// express
const app = express()
const PORT = 7083
// get,post,put,delete ->Rest Api Methods

// every method conatains ->router,controller->req,res
app.use(express.json())
app.use("/crud",route)


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);    
})


// Step1: File create with js
// npm init -y
// packagejson -> type:module
//npm i express
// check dependency in packagejson express is added or not
// create the server with express
// get method