const express=require('express')
const app=express()
const ToDoController=require('./todo.controller.js')

app.get('/',ToDoController.readAllTask)

app.listen(3000,()=>{console.log('server is listening on port 3000')})