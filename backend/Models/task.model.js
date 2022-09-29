const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tag: { type: String, required: true },
    billable: {type: Boolean, required: true},
    startAt: { type: String, required: true },
    endAt: { type: String, required: true },
    projectName: { type: String, requied: true },
    totalTime: {type:String, required: true}
})

const TaskModel = mongoose.model("task",taskSchema)

module.exports = TaskModel