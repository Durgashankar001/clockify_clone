const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const connect = require("./config/Connect")
const dotenv = require("dotenv")
const userRouter = require("./Controller/user.router")
const taskControl = require("./Controller/task.router")
dotenv.config("./.env")
const PORT =process.env.PORT
console.log(PORT)

const server = express()
server.use(cors())
server.use(express.json())
server.use("/user",userRouter)
server.use("/task",taskControl)

server.listen(PORT,async()=>{
    await connect()
    console.log("Server started at port 8080")
})