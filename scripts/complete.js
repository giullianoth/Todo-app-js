import todoList from "./todo-list.js";

const completeTask = (check, position) => {
    let task = document.querySelectorAll(".j_task");
    let taskCheck = task[position].querySelector(".j_complete");

    if (check.checked) {
        task[position].classList.add("completed");
        taskCheck.setAttribute("checked", true);
    } else {
        task[position].classList.remove("completed");
    }

    todoList[position] = task[position].outerHTML;
}

export default completeTask;