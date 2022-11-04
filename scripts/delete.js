import listCount from "./list-count.js";
import todoList from "./todo-list.js";

const emptyArea = () => {
    let empty = document.createElement("li");
    empty.className = "empty j_empty";
    empty.innerText = "Your todo will appear here";

    return empty.outerHTML;
}

const clearTask = (task, position) => {
    let list = document.querySelector(".j_list");

    task.style.maxHeight = "0";
    task.style.paddingTop = "0";
    task.style.paddingBottom = "0";

    setTimeout(() => {
        task.remove();
    }, 300);

    todoList.splice(position, 1);

    if (todoList.length === 0) {
        list.innerHTML = emptyArea();
        todoList.unshift();
    }

    listCount();
}

const clearCompleted = () => {
    let tasks = document.querySelectorAll(".j_task");

    tasks.forEach((task, i) => {
        if (task.classList.contains("completed")) {
            clearTask(task, i);
        }
    })
}

export { clearTask, clearCompleted };