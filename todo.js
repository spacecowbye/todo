

class Todo {
    id = null;
    createdAt = null;
    todoTask = null;
    isCompleted = false;
    
    constructor(id, todoTask,createdAt) {
        this.id = id;
        this.isCompleted = false;
        this.todoTask = todoTask;
        this.createdAt = createdAt || new Date().toISOString();
    }
    updateTodo(obj) {
        if (obj === null || obj === undefined) {
            throw new Error("Invalid update logic-1");
        }
        console.log(obj);
        for (const key in obj) {
            if (key === "todoTask" && obj[key] !==undefined) {
                this[key] = obj[key];
            }
            else if (key === "isCompleted" && obj[key] !== undefined) {
                this[key] = obj[key];
            }
            else {
                console.warn(`[updateTodo] Skipping unexpected key: ${key}`);
                continue;
            }
        }

        return this;

    }

    toString() {
        return JSON.stringify({
        id: this.id,
        todoTask: this.todoTask,
        isCompleted: this.isCompleted,
        createdAt: this.createdAt
    });
    }


}

export default Todo