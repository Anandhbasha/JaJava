import express from "express"
const app = express()
const PORT = 6731
// route // request // response // controller
app.use("/read",(req,res)=>{
    res.send("Node is working")
})

app.listen(PORT,()=>{
    console.log(`The server is running under:http://localhost:${PORT}`)    
})