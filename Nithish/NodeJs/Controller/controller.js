export const readMethod = (req,res)=>{
    res.status(200).json("Node js is working fine")
}

export const insertUser = (req,res)=>{
    const {email,password} = req.body
    res.status(201).json({data:{
        email:email,
        password:password
    }})
}

export const updateUser = (req,res)=>{
    const {id} = req.params
    const {email,password} = req.body
     res.status(202).json({data:{
        email:email,
        password:password
    }})
}

export const delUser = (req,res)=>{
    const {id} = req.params
     res.status(202).json({message:"user Deleted sucessfully"})
}