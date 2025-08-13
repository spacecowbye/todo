

class Todo{
    id = null;
    createdAt = null;
    todoTask = null;
    isCompleted = false;
    date = new Date();

    constructor(id,todoTask){
        this.id = id;
        this.isCompleted = false;
        this.todoTask = todoTask;
        this.createdAt = this.date.toISOString();
    }

    toString(){
        const id = this.id;
        const todoTask = this.todoTask;
        const isCompleted = this.isCompleted;
        const date = this.date;
        const todo = {
            id,
            todoTask,
            isCompleted,
            date,
        }
        return JSON.stringify(todo);
    }

    
}

export default Todo