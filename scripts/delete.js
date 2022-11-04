import loadList from "./load-list.js";
import todoList from "./todo-list.js";

const clearTask = (task) => {
    task.style.maxHeight = "0";
    task.style.paddingTop = "0";
    task.style.paddingBottom = "0";

    setTimeout(() => {
        task.remove();
    }, 300);
}

const clearCompleted = () => {
    let tasks = document.querySelectorAll(".j_task");

    tasks.forEach((task, i) => {
        if (task.classList.contains("completed")) {
            clearTask(task);
            todoList.splice(i, 1);
        }
    })

    console.log(todoList, tasks);
}

export { clearTask, clearCompleted };