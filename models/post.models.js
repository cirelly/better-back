const mongoose = require('mongoose')
const Schema = mongoose.Schema


const PostSchema = Schema({
    title: String,
    author: String,
    category: String,
    description: String,
    image: String,
    },
    { timestamps: true }
)

module.exports = mongoose.model("post_schema", PostSchema)