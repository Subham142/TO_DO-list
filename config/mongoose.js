//import mongoose
const mongoose = require('mongoose');

// make connection
mongoose.connect('mongodb://localhost/todo_list_db');


// making variable for checking connection
const db = mongoose.connection;

//error in connecting
db.on('error',console.error.bind('error connecting to db'));

//success on connection
db.once('open',function(){
    console.log('successfully connected to the database');
});