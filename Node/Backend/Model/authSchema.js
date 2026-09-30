import mongoose from "mongoose";

const studentAuth = mongoose.Schema({
    studentName:{type:String,require:true},
    studentAge:{type:Number,require:true},
    studentCourse:{type:String,require:true},
    studentEmail:{type:String,require:true},
    studentPassword:{type:String,require:true},
    studentMobile:{type:Number,require:true}
    
})

export const auths = mongoose.model("stuAuth",studentAuth)

