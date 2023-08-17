console.log('=======================');
console.log('08-classes-btodolist.ts');
console.log('=======================');

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskStorage {
    saveTask(task: Task): void;
    getAllTasks(): Task[];
}

class InMemoryTaskStorage implements TaskStorage {
    private tasks: Task[] = [];
    saveTask(task: Task): void {
        this.tasks.push(task);
    }
    getAllTasks(): Task[] {
        return this.tasks;
    }
}

class TaskManager {
    private taskStorage: TaskStorage;
    constructor(taskStorage: TaskStorage) {
        this.taskStorage = taskStorage;
    }
    addTask(task: Task): void {
        this.taskStorage.saveTask(task);
    }
    getTasks(): Task[] {
        return this.taskStorage.getAllTasks();
    }
}

const storage = new InMemoryTaskStorage();
const taskManager = new TaskManager(storage);

for (let i = 1; i <= (Math.floor(Math.random() * 9) + 1); i++) {
    const newTask: Task = { id: i, title: `Completar la tarea ${i}`, completed: false };
    taskManager.addTask(newTask);
}

const tasks = taskManager.getTasks();
console.log(tasks);
