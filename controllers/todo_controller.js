// import the file for saving data in database
const Todo = require('../models/todo');

//Render home page || reading the list
module.exports.todo = function(req,res){

    Todo.find({},function(err,tasks){
        if(err){
            console.log('error in fetching');
            return;
        }
        return res.render('todo',{
            title:"Todo List",
            task_list:tasks
        });
    })
}

//Adding task
module.exports.add = function(req,res){
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newTask){
        if(err){
            console.log('error in creating task');
            return;
        }
        console.log('*******',newTask);
        return res.redirect('back');
    });
}
//Deleting Task(multiple)
module.exports.delete = function(req,res){
    let id = req.body;
    console.log(id);

    let checkboxs = Object.keys(id).length;

    for(let i=0;i<checkboxs;i++){
        Todo.findByIdAndDelete(Object.keys(id)[i],function(err){
            if(err){
                console.log("error in deleting");
                return;
            }
        });
    }
   return res.redirect('back');    
}