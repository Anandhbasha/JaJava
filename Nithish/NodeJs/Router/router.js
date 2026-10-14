import express from "express"
import { delUser, insertUser, readMethod, updateUser } from "../Controller/controller.js"

export const route = express.Router()

route.get("/read",readMethod)
route.post("/",insertUser)
route.put("/:id",updateUser)
route.delete("/:id",delUser)
