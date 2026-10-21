import mongoose from "mongoose"

const dataBase = (URI)=>{
    try{
        mongoose.connect(URI)
        const db = mongoose.connection
        db.once("open",()=>{
            console.log("Db is connected");            
        })

    }catch(err){
        console.log(err);
        
    }
}

export default dataBase