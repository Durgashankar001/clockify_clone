const express = require("express")
const ProjectModel = require("../Models/project.model")
const projectControl = express.Router()

projectControl.get("/", async (req, res) => {
    const { userEmail } = req.query
    try {
        if (userEmail) {
            const projects = await ProjectModel.find({ email:userEmail })
            return res.status(200).send(projects)
        } else {
            const projectList = await ProjectModel.find()
            return res.status(200).send(projectList)
        }

    } catch (err) {
        res.status(500).send("Internal Server Error")
    }
})


projectControl.post("/new",async(req,res)=>{
    try{
       const newProject = await ProjectModel.create(req.body) 
       return res.status(200).send({message:"Project added successfully",newProject})
    }catch(err)
    {
        return res.status(500).send("Project added failed")
    }
})

projectControl.patch("/:id",async(req,res)=>{
    const {id} = req.params
    try{
        const updatedProject = await ProjectModel.findByIdAndUpdate({_id:id},req.body,{
            new:true
        })

        return res.status(200).send({message:"Project Updated",updatedProject})


    }catch(err)
    {
        return res.status(500).send("Internal server error")
    }
})

projectControl.delete("/:id",async(req,res)=>{
    const {id}  = req.params
    try{
        await ProjectModel.findByIdAndDelete({_id:id})
        res.status(200).send({message:"Deleted successfully"})

    }catch(err){
        return res.status(500).send("Internal server error")
    }
})


module.exports = projectControl


