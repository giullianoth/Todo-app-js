import listCount from "./list-count.js";
import todoList from "./todo-list.js";

const emptyArea = () => {
    let empty = document.createElement("li");
    empty.classname = "empty j_empty";
    empty.innerText = "Your todo will appear here";

    return empty.outerHTML;
}

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
    let list = document.querySelector(".j_list");

    tasks.forEach((task, i) => {
        if (task.classList.contains("completed")) {
            clearTask(task);
            todoList.splice(i, 1);
        }
    })

    if (todoList.length === 0) {
        list.innerHTML = emptyArea();
    }

    listCount();
}

export { clearTask, clearCompleted };