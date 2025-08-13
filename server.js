import express from "express"
import Todo from "./todo.js"
import fs from "fs/promises"
import TodoManager from "./todoManager.js";


const PORT = 8080;
const app = express();
let id = 0;
const todoManager = new TodoManager(fs);

app.use(express.json());
app.get('/',(req,res)=>{
    console.log("[GET] req on path /");
    res.send({
        "hi" : "dude"
    });
})
app.get('/getTodo/:id',(req,res)=>{
    console.log("[GET] req on path /getTodo for single todo");
    
})
app.get('/everyTodo',async(req,res) =>{
    console.log("[GET] req on path /everyTodo");
    let todos = await todoManager.getAllTodos();
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
    await todoManager.addTodo(id++,newTodo);
    console.log(newTodo);
    res.status(201).send({
        id,
        message : "ok"
    })
    
})


app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})