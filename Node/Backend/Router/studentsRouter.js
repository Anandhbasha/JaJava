import express from "express"
import { addStudent, deleteStudent, editStudent, readStudents } from "../Controller/studentController.js"

const router = express.Router()

router.get("/",readStudents)
router.post("/",addStudent)
router.put("/edit/:studentEmail",editStudent)
router.delete("/del/:studentEmail",deleteStudent)


export default router