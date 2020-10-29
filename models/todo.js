//import mongoose
const mongoose = require('mongoose');

//Make schema for determining the type of data
const todoSchema = new mongoose.Schema({
    description : {
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

//make variable schema
const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;