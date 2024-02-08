const todo=require('./todo.model.js')

class ToDoController{
    readAllTask(req,res){
        return res.json(todo.getFullName())
    }
}

module.exports=new ToDoController()