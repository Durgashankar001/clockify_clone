const express = require("express")
const TagModel = require("../Models/tag.model")

const tagControl = express.Router()

tagControl.get("/",async(req,res)=>{
    try{
        const tagList = await TagModel.find()
        return res.status(200).send(tagList)
    }catch(err){
        return res.status(500).send("Internal Server error")
    }
})
tagControl.post("/new",async(req,res)=>{
    try{
        const newTag = await TagModel.create(req.body)
        return res.status(200).send({message:"Tag added successfully",newTag})
    }catch(err){
        return res.status(500).send("Internal Server error")
    }
})
tagControl.patch("/:id",async(req,res)=>{
    const {id} = req.params
    try{
        const updateTag = await TagModel.findByIdAndUpdate({_id:id},req.body,{
            new:true
        })
        return res.status(200).send({message:"Tag updated successfully",updateTag})
    }catch(err){
        return res.status(500).send("Internal Server error")
    }
})


tagControl.delete("/:id",async(req,res)=>{

    const {id} = req.params
    try{
        await TagModel.findByIdAndDelete({_id:id})
        return res.status(200).send({message:"Tag deleted successfully"})
    }catch(err){
        return res.status(500).send("Internal Server error")
    }
})

module.exports = tagControl