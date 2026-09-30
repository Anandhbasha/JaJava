// bcyrptjs
// jsonwebtoken

import { auths } from "../Model/authSchema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const registerStudent = async(req,res)=>{
    try {
        const {studentName,studentAge,studentCourse,studentEmail,studentMobile,studentPassword} = req.body
        const existUser = await auths.findOne({studentEmail})
        if(existUser){
            res.status(405).json({message:"already a user please use login"})
        }
        else{
            const salt = await bcrypt.genSalt(10)
            const hassedPassword = await bcrypt.hash(studentPassword,salt)
            const insertStudent = await auths(
                {
                    studentName:studentName,
                    studentAge:studentAge,
                    studentCourse:studentCourse,
                    studentEmail:studentEmail,
                    studentMobile:studentMobile,
                    studentPassword:hassedPassword

                }
            ).save()
            res.status(200).json({message:"Student Registration Sucessfull",data:insertStudent})
        }
    } catch (error) {
        res.status(500).json({message:"Unable to Register"})
    }
}

export const loginStudent = async(req,res)=>{
    try {
        const {studentEmail,studentPassword} = req.body
        const existing = await auths.findOne({studentEmail})
        if(!existing){
            res.status(404).json({message:"User not found please register"})
        }
        else{
            const matchPass = await bcrypt.compare(studentPassword,existing.studentPassword)
            if(!matchPass){
                res.status(405).json({message:"Invalid Password"})
            }
            else{
                const token = jwt.sign({studentEmail},"abcdef",{expiresIn:"1m"})
                res.status(201).json({message:"Login Sucessfull",token:token})
            }
        }
    } catch (error) {
        res.status(500).json({message:"Login Error",error:error})
    }
}


export const verifyToken = async(req,res,next)=>{
    try {
        const auth = req.headers["authorization"]
        if(!auth){
            res.status(404).json({message:"No token Provided"})
        }else{
            const token = auth.split(" ")[1]
            console.log(token);
            const decode = jwt.verify(token,"abcdef")
            req.user =decode
            next()
            
        }
    } catch (error) {
        res.status(500).json({message:"Invalid token"})
    }
}