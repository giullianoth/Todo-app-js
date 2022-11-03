import loadList from "./load-list.js";
import todoList from "./todo-list.js";

const btnDelete = document.querySelectorAll(".j_delete");
const task = document.querySelectorAll(".j_task");

const clearTask = (task) => {
    task.style.maxHeight = "0";
    task.style.paddingTop = "0";
    task.style.paddingBottom = "0";

    setTimeout(() => {
        task.remove();
    }, 300);


}

const clearCompleted = () => {
    let tasks = document.querySelectorAll(".j_task.completed");
    
    tasks.forEach((task) => {
        console.log(task);
        clearTask(task);
    })

    todoList.forEach((task) => {
        loadList(task);
    })

    console.log(todoList);
}

export { clearTask, clearCompleted };