import express from "express"
import Todo from "./todo.js"
import fs from "fs"
import TodoManager from "./todoManager.js";


const PORT = 8080;
const app = express();
const todoManager = new TodoManager(fs);
let id = await todoManager.readTodos();

app.use(express.json());
app.get('/',(req,res)=>{
    console.log("[GET] req on path /");
    res.send({
        "hi" : "dude"
    });
})
app.get('/getTodo/:num',(req,res)=>{
    console.log("[GET] req on path /getTodo for single todo");
    let num = req.params.num;
    let todo = todoManager.getTodo(num);
    if(!todo){
        console.log(`Todo with id ${num} is not created, invalid num`);
        res.status(404).send(
            { error: `Todo with id ${num} not found` }
        )
    }
    res.send({
        todo
    });
    
})
app.patch('/updateStatus/:id',async(req,res) =>{
    console.log("[PATCH] request on path /updateStatus");
    const{ isCompleted, todoTask } = req.body;
    const num = req.params.id;
    let todo = todoManager.getTodo(num);
    const obj = {
       isCompleted,
       todoTask
    };
    try {
        todo = todo.updateTodo(obj);
        await todoManager.updateTodo(todo);
        res.send(todo);
    } catch (error) {
        console.log(error);
        res.status(400).send({
            error : "Error in updating todo"
        })
    }
    
    
})
app.get('/everyTodo',(req,res) =>{
    console.log("[GET] req on path /everyTodo");
    let todos =  todoManager.getAllTodos();
    res.status(200).send(
        todos
    )
})

app.post('/createTodo', async(req,res) => {
    const { todoTask } = req.body;
    if(!todoTask){
        console.log(`[ERROR] parameter missing in request sent by user`);
        res.status(400).send({
            message : "ERROR : must have todoTask parameter"
        })
        return;
    }
    console.log(`[POST] req hit on path /createTodo`);
    console.log(`[INFO] todoTask :  ${todoTask}`)
    const newTodo = new Todo(id,todoTask);
    try {
        await todoManager.addTodo(id,newTodo);
        console.log(newTodo);
        res.status(201).send({
        id,
        message : "ok"
    })
    id+=1;
    } catch (error) {
        console.log(error);
        res.status(400).send({
            error : "Error in creating todo"
        })
    }
})


app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})