const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    text: {
        type:String,
        require: true
    },
    timestamps:true
})

module.exports = mongoose.model('Todo',TodoSchema)