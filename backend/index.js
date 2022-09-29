const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const connect = require("./config/Connect")
const dotenv = require("dotenv")
const userRouter = require("./Controller/user.router")
dotenv.config("./.env")
const PORT =process.env.PORT
console.log(PORT)
const AuthMiddleware = async(req,res,next)=>{
    const token = req.headers.token

    if(token){
        let [id,email,password] = token.split(":")

        let user = await User.findOne({_id:id})
        
        if(user.email==email && user.password==password)
        {
            req.userId = id
            next()
        }else{
             res.status(401).send("Operation not allowed.")
        }
    }
    else{
        res.status(401).send("Operation not allowed.")
    }
}

const server = express()
server.use(cors())
server.use(express.json())
server.use("/user",userRouter)

server.listen(PORT,async()=>{
    await connect()
    console.log("Server started at port 8080")
})