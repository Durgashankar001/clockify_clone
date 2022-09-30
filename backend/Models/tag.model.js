const mongoose = require("mongoose")

const tagSchema = new mongoose.Schema({
    name: { type: String, required: true },
})

const TagModel = mongoose.model("tag",tagSchema)

module.exports = TagModel