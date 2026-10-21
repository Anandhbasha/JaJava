import mongoose, { model } from "mongoose";

const movieSchema = mongoose.Schema(
    {
        movieName:{type:String,require:true},
        actorName:{type:String,require:true},
        actressName:{type:String,require:true},
        directorname:{type:String,require:true},
        realseDate:{type:Number,require:true}
    }
)

const movie = mongoose.model("movies",movieSchema)

export default movie