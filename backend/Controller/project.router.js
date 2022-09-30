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
