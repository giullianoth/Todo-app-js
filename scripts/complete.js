import todoList from "./todo-list.js";

const completeTask = (checkComplete, position) => {
    let check = checkComplete.querySelector(".j_complete");
    let task = document.querySelectorAll(".j_task");

    if (check.checked) {
        task[position].classList.add("completed");
    } else {
        task[position].classList.remove("completed");
    }

    todoList[position].complete = check.checked;
}

export default completeTask;