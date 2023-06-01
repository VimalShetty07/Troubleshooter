const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type : String,
        required:[true,"Please select a title"]


    },
    content:{
        type: String,
        required:[true,"Please select a content"]

    },

    user:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required: true
    }
})

module.exports = mongoose.model("blogs",blogSchema)