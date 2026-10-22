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

export const updateMovie = async(req,res)=>{
    try {
        const {actorName,actressName,directorname,realseDate} = req.body
        const {movieName} = req.params
        const updateMovieDetail = await movie.findOneAndUpdate({movieName},{$set:{actorName,actressName,directorname,realseDate}})
        if(!updateMovieDetail){
            res.status(403).json({message:"unable to Update the movie details"})
        }else{
            res.status(201).json({message:"Movie information updated sucessfully"})
        }
    } catch (error) {
        res.status(500).json({message:"Movie not exist"})
    }
}


export const deleteMovie = async(req,res)=>{
    try {
        const {movieName} = req.params
        const delMovieDetail = await movie.findOneAndDelete({movieName})
        if(!delMovieDetail){
            res.status(403).json({message:"unable to delete the movie details"})
        }else{
            res.status(201).json({message:"Movie Deleted sucessfully"})
        }
    } catch (error) {
        res.status(500).json({message:"Movie not exist"})
    }
}