import express from "express"
import { addStudent, readStudents } from "../Controller/studentController.js"

const router = express.Router()

router.get("/",readStudents)
router.post("/",addStudent)


export default router