const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type : String,
        required:[true,"Please select a title"]


    },
    content:{
        type: String,
        required:[true,"Please select a content"]

    }
})

module.exports = mongoose.model("blogs",blogSchema)