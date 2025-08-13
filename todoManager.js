class TodoManager {
    // id to todos mapping
    todos = undefined;
    file = undefined
    fs = undefined

    constructor(fs) {
        this.todos = {};
        this.file = "todos.txt";
        this.mapping = "TodoIdMapping.txt"
        this.fs = fs;
    }
    async addTodo(id, Todo) {
        if(!id || !Todo){
            throw new Error("Forgot to add id or Todo");
        }
        this.todos[id] = Todo;
        const data = `${id} : ${Todo}\n`;
        await this.fs.appendFile(this.file, data);
        console.log(`[TodoManager] ${Todo} written to file with ${id}`);
    }
    async updateTodo(Todo){
        if(!Todo){
            throw new Error("Forgot to add id or Todo");
        }
        const id = Todo.id;
        if(!id){
            console.log("Error in finding if of below todo");
            console.log(Todo);
        }    
        this.todos[id] = Todo;
        this.addTodo(id,Todo);

        }
    
    getAllTodos() {
        let everyTodo = [Object.values(this.todos)];
        console.log("[TodoManager] returned everyTodo in memory");
        return everyTodo;

    }
    getTodo(id) {
        let todoToReturn = this.todos[id];
        console.log([`[TodoManager] returned a single todo`]);
        return this.todos[id];
    }
    // async readTodos() {


    // }


}

export default TodoManager