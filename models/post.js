const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "The title field is required."]
    },
    subtitle: {
        type: String,
        required: [true, "The subtitle field is required."]
    },
    content: {
        type: String,
        required: [true, "The content field is required."]
    }
}, { timestamps: true })

const Post = mongoose.model("posts", postSchema)

module.exports = Post
