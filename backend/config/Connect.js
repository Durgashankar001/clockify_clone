const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config("./.env")

const connect = () => {
    return mongoose.connect(`${process.env.DB_URL}`)
}
module.exports = connect