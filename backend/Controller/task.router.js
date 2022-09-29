const express = require("express")

const TaskModel = require("../Models/task.model")

const taskControl = express.Router()

taskControl.get("/", async (req, res) => {
    const { project } = req.query
    try {
        if (project) {
            const taskList = await TaskModel.findOne({ project })
            return res.status(200).send(taskList)
        } else {
            const task = await TaskModel.find()
            return res.status(200).send(task)
        }

    } catch (err) {
        res.status(500).send("Internal Server Error!")
    }
})

taskControl.post("/new", async (req, res) => {
    try {
        const newTask = await TaskModel.create(req.body)
        return res.status(200).send({ message: "Task added Successfully", newTask })
    } catch (err) {
        return res.status(500).send("Internal Server Error!")
    }
})

taskControl.patch("/update/:id", async (req, res) => {
    const { id } = req.params
    try {
        const updateTask = await TaskModel.findByIdAndUpdate({ _id: id }, req.body, {
            new: true
        })
        return res.status(200).send({ message: "Updated Successfully", updateTask })

    } catch (err) {
        res.status(500).send("Internal Server Error!")
    }
})

taskControl.delete("/delete/:id", async (req, res) => {
    const { id } = req.params
    try{
        const taskDelete = await TaskModel.findByIdAndDelete({_id:id})
        return res.status(200).send({message:"Task Deleted",taskDelete})

    }catch(err){
        return res.status(500).send("Internal server Error!")
    }
})

module.exports  = taskControl