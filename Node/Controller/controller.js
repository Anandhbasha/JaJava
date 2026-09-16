export const readUser = async(req,res)=>{
    res.status(200).json("Node is working")
}

export const insert = async(req,res)=>{
    try {
        const {userName,password} = req.body
        res.status(200).json(`${userName} user Added sucessfully `)

    } catch (error) {
        res.status(404).json(error)
    }
}

export const updateUser = async(req,res)=>{
    try{
        const{password} = req.body
        const {userName} = req.params
        res.status(200).json(`${userName} password changed sucessfully`)

    }catch(err){
        res.status(400).json(`unable to update user`)
    }
}