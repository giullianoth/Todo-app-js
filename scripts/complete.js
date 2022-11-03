import todoList from "./todo-list.js";

const completeTask = (check, position) => {
    let task = document.querySelectorAll(".j_task");

    if (check.checked) {
        task[position].classList.add("completed");
    } else {
        task[position].classList.remove("completed");
    }

    todoList[position] = task[position];
}

export default completeTask;