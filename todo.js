

class Todo {
    id = null;
    createdAt = null;
    todoTask = null;
    isCompleted = false;
    date = new Date();

    constructor(id, todoTask) {
        this.id = id;
        this.isCompleted = false;
        this.todoTask = todoTask;
        this.createdAt = this.date.toISOString();
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