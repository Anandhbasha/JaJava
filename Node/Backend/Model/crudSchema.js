import mongoose from "mongoose";

const fullStack = mongoose.Schema({
    studentName:{type:String,require:true},
    studentAge:{type:Number,require:true},
    studentCourse:{type:String,require:true},
    courseDuration:{type:String,require:true},
    studentEmail:{type:String,require:true},
    studentImage:{type:String,require:true},
    
})

export const students = mongoose.model("studentData",fullStack)

