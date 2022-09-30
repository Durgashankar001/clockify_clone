const express = require("express")
const ClientModel = require("../Models/client.model")

const clientControl = express.Router()

clientControl.get("/",async(req,res)=>{
    try{
        const clientList = await ClientModel.find()
        return res.status(200).send(clientList)

    }catch(err){
        return res.status(500).send("Internal Server error")
    }
})

clientControl.post("/new",async(req,res)=>{
    try{
        const newClient = await ClientModel.create(req.body)
        return res.status(200).send({message:"client added successfully",newClient})
    }catch(err)
    {
        return res.status(500).send("Internal Server error")
    }
})

clientControl.patch("/:id",async(req,res)=>{
    const {id} = req.params
    try{
        const updatedClient = await ClientModel.findByIdAndUpdate({_id:id},req.body,{
            new:true
        })
        return res.status(200).send({message:"client updated successfully",updatedClient})
    }catch(err)
    {
        return res.status(500).send("Internal Server error")
    }
})

clientControl.delete("/:id",async(req,res)=>{
    const {id} = req.params
    try{
        await ClientModel.findByIdAndDelete({_id:id})
        return res.status(200).send({message:"client deleted successfully"})
    }catch(err)
    {
        return res.status(500).send("Internal Server error")
    }
})

module.exports = clientControl