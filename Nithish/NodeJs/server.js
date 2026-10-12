import express from "express"
// express
const app = express()
const PORT = 7083
// get,post,put,delete ->Rest Api Methods

// every method conatains ->router,controller->req,res

app.get("/read",(req,res)=>{
    res.send("Node js is working")
})


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