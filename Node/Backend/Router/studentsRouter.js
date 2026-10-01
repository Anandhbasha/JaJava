import express from "express"
import { addStudent, deleteStudent, editStudent, readStudents } from "../Controller/studentController.js"
import { loginStudent, registerStudent, verifyToken } from "../Controller/authController.js"

const router = express.Router()

router.get("/",readStudents)
router.post("/",addStudent)
router.put("/edit/:studentEmail",editStudent)
router.delete("/del/:studentEmail",deleteStudent)

router.post("/register",registerStudent)
router.post("/login",loginStudent)


export default router