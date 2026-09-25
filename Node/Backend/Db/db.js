import mongoose from "mongoose"

const db = (URI)=>{
    try{
        mongoose.connect(URI)
        const dataBase = mongoose.connection
        dataBase.once("open",()=>{
            console.log("Db Connected");        
        })
    }catch(err){
        console.log("Unable to connect Db");
        
    }
}

export default db