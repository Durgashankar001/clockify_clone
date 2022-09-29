const express = require("express")
const User = require("../Models/user.model")

const userRouter = express.Router()

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try{
        const find_user = await User.findOne({email,password})

        if(!find_user){
            return res.status(401).send("Invalid Credential")
        }

        return res.send({
            token:`${find_user.id}:${find_user.email}:${find_user.password}`
        })
    }
    catch(err)
    {
        return res.status(401).send(err.message) 
    }

   
})


userRouter.post("/signup",async(req,res)=>{
    const {email,password} = req.body
    try{
        let find_user = await User.findOne({email})
        if(find_user)
        {
            return res.status(401).send("Email is already exist try using different email")
        }
        const newUser = await User.create(req.body)
        res.send({
            token: `${newUser.id}:${newUser.email}:${newUser.password}`
        })
    }
    catch(e)
    {
        res.status(500).send(e.message)
    }
})


module.exports = userRouter