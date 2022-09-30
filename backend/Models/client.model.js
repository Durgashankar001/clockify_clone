const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address:{type:String, default:"India"}
})

const ClientModel = mongoose.model("client",clientSchema)

module.exports = ClientModel