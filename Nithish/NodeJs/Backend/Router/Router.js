import express from "express"
import { addNewMovie, deleteMovie, readMovies, updateMovie } from "../Controller/Controller.js"

export const router = express.Router()

router.get("/",readMovies)
router.post("/",addNewMovie)
router.put("/:movieName",updateMovie)
router.delete("/:movieName",deleteMovie)