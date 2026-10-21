import express from "express"
import { addNewMovie, readMovies } from "../Controller/Controller.js"

export const router = express.Router()

router.get("/",readMovies)
router.post("/",addNewMovie)