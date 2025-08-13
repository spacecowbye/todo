class TodoManager{
    // id to todos mapping
    todos = undefined;
    file = undefined
    fs = undefined
    
    constructor(fs){
        this.todos = {};
        this.file = "todos.txt";
        this.mapping = "TodoIdMapping.txt"
        this.fs = fs;
    }
    async addTodo(id,Todo){
        this.todos[id] = Todo;
        const data = `${id} : ${Todo}\n`;
        await this.fs.appendFile(this.file,data);
        console.log(`[TodoManager] ${Todo} written to file with ${id}`);
    }
    async getAllTodos(){
        let everyTodo = [Object.values(this.todos)];
        console.log("[TodoManager] returned everyTodo in memory");
        return everyTodo;

    }
    async readTodos() {
        
        
    }
    

}

export default TodoManager