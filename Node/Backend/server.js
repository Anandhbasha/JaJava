// express mongoose cors bcryptjs jsonwebtoken dotenv

import express from "express"
import db from "./Db/db.js"
// import router from "./Router/studentsRouter.js"
import cors from "cors"
import multer from "multer"
import mongoose from "mongoose"
const app = express()

app.use(express.json())
const PORT = 3561

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}))

app.use("/uploads",express.static("uploads"))
// app.use("/studentRegister",router)
db("mongodb://127.0.0.1:27017/fullSTack")


const imageSchema = new mongoose.Schema({
    image:{type:String,require:true}
})


const Image = mongoose.model("Image",imageSchema)
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"_"+file.originalname)
    }
})

const upload = multer({storage:storage})

app.post("/upload",upload.single("image"),async(req,res)=>{
    const newImage = new Image({
        image:req.file.filename
    })
    await newImage.save()
    res.status(200).json({message:"Image Uploaded Sucessfully",image:req.file.filename})
    })
app.get("/images",async(req,res)=>{
    const images = await Image.find()
    res.status(200).json({message:"Images Fetched Sucessfully",images:images})
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})