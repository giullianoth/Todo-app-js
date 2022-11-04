import completeTask from "./complete.js";
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
    let todoCount = todoList.length;
    let todoCountArea = document.querySelector(".j_count");
    
    if (todoCount > 0) {
        todoCountArea.innerHTML = `${todoCount} ${todoCount === 1 ? "item" : "items"} left`;
    } else {
        todoCountArea.innerText = "No items";
    }

    // Checbox - Complete task
    let checkComplete = list.querySelectorAll(".j_complete");

    checkComplete.forEach((check, i) => {
        check.addEventListener("click", () => {
            completeTask(check, i);
        })
    })
}

export default loadList;