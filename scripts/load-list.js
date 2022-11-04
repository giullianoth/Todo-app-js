import completeTask from "./complete.js";
import { clearTask } from "./delete.js";
import listCount from "./list-count.js";
import todoList from "./todo-list.js";

const loadList = (task) => {

    let list = document.querySelector(".j_list");
    let emptyList = document.querySelector(".j_empty");

    if (emptyList && task) {
        emptyList.remove();
    }

    if (task) {        
        todoList.push(task.outerHTML);
        list.innerHTML = todoList.join("");
    }

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

    deleteTaskBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            clearTask(btn.parentNode);
        })
    })
}

export default loadList;