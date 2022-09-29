const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tag: {type: String},
    billable: { type: Boolean, required: true },
    useremail: { type: String, required: true },
})

const ProjectModel = mongoose.model("project",projectSchema)

module.exports = ProjectModel