import express from "express"
import { insert, readUser, updateUser } from "../Controller/controller.js"

export const router = express.Router()

router.get("/read",readUser)

router.post("/insert",insert)

router.put("/update/:userName",updateUser)