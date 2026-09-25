import { students } from "../Model/crudSchema.js"

export const readStudents = async(req,res)=>{
    try{
        const getStudents = await students.find()
        if(getStudents.length===0){
            res.status(404).json({message:"No Students found"})
        }
        else{
            res.status(200).json({message:"Student Details",data:getStudents})
        }
    }catch(err){
        res.status(500).json({message:"Unable to Connect",error:err})
    }
}


export const addStudent = async(req,res)=>{
    try {
        const {studentName,studentAge,studentCourse,courseDuration,studentEmail} =req.body
        const existing = await students.findOne({studentEmail})
        if(existing){
            res.status(403).json({message:"Student already exists"})
        }
        else{
            const addStu = await students({studentName:studentName,studentAge:studentAge,studentCourse:studentCourse,courseDuration:courseDuration,studentEmail:studentEmail}).save()
            res.status(201).json({message:"Student Added Sucessfully",student:addStu})
        }
    } catch (error) {
        res.status(500).json({message:"Unable to addStudent"})
    }
}