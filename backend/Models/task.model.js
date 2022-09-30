const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name: { type: String, required: false },
    tag: { type: String, required: false },
    billable: {type: Boolean, required: false},
    startAt: { type: String, required: false },
    endAt: { type: String, required: false },
    projectName: { type: String, requied: false },
    totalTime: {type:String, required: false}
})

const TaskModel = mongoose.model("task",taskSchema)

module.exports = TaskModel