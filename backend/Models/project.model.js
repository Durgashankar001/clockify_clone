const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name: { type: String, required: false },
    tag: {type: String},
    billable: { type: Boolean, required: false },
    useremail: { type: String, required: false },
})

const ProjectModel = mongoose.model("project",projectSchema)

module.exports = ProjectModel