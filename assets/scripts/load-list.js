import completeTask from "./complete.js";
import { clearTask } from "./delete.js";
import listCount from "./list-count.js";
import todoList from "./todo-list.js";

const showTask = (task, list, filter = false) => {
    let emptyList = document.querySelector(".j_empty");

    if (emptyList && task) {
        emptyList.remove();
    }

    task.style.maxHeight = "0";
    task.style.paddingTop = "0";
    task.style.paddingBottom = "0";
    
    list.append(task);

    setTimeout(() => {
        task.style.maxHeight = "";
        task.style.paddingTop = "";
        task.style.paddingBottom = "";
    }, 100);

    if (!filter) {
        todoList.push(task.outerHTML);
    }
}

const loadList = (task) => {

    let list = document.querySelector(".j_list");

    if (task) {
        showTask(task, list);
    }

    document.querySelector(".j_filter_all").classList.add("active");

    //Todo count
    listCount();

    // Checbox - Complete task
    let checkComplete = list.querySelectorAll(".j_complete");

    checkComplete.forEach((check, i) => {
        check.addEventListener("click", () => {
            completeTask(check, i);
        })
    })

    // Delete Task
    let deleteTaskBtn = list.querySelectorAll(".j_delete");

    deleteTaskBtn.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            clearTask(btn.parentNode, i);
        })
    })
}

export default loadList;