import todoList from "./todoList.js";

const checkComplete = document.querySelectorAll(".j_complete");

const completeTask = () => {
    checkComplete.forEach((item, i) => {
        item.addEventListener("click", () => {
            let task = document.querySelectorAll(".j_task");

            if (item.checked) {
                task[i].classList.add("completed");
            } else {
                task[i].classList.remove("completed");
            }

            todoList[i] = task[i];
        })
    })
}

export default completeTask;