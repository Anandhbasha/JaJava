import dataBase from "../Database/db.js"
import movie from "../Model/crudModel.js"

export const readMovies = async(req,res)=>{
    try {
        const existMovie = await movie.find()
        if(!existMovie==null){
            res.status(404).json({message:"No movies found"})
        }
        else{
            res.status(200).json({
                message:"Movies are",
                Movies:existMovie
            })
        }
    } catch (error) {
        res.status(404).json({message:"Unable to found"})
    }
}


export const addNewMovie = async(req,res)=>{
    try {
        const {movieName,actorName,actressName,directorname,realseDate} = req.body
        const exist = await movie.findOne({movieName})
        if(exist){
            res.status(402).json({message:"Movie already added"})
        }
        const addNewMov = await movie({movieName,actorName,actressName,directorname,realseDate}).save()
        res.status(200).json({message:"New Movie  added sucessfully",data:addNewMov})
    } catch (error) {
        res.status(401).json({message:"unable to add",error:error.message})
    }
}