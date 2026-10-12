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