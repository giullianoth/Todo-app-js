const btnDelete = document.querySelectorAll(".j_delete");
const task = document.querySelectorAll(".j_task");
const clear = document.querySelector(".j_clear_completed");

const clearTask = (task) => {
    task.style.maxHeight = "0";
    task.style.paddingTop = "0";
    task.style.paddingBottom = "0";

    setTimeout(() => {
        task.remove();
    }, 300);
}

const deleteTask = () => {
    btnDelete.forEach((item, i) => {
        item.addEventListener("click", () => {
            clearTask(task[i]);
        })
    })
}

const clearCompleted = () => {
    clear.addEventListener("click", () => {
        let completed = document.querySelectorAll(".j_task.completed");
        
        completed.forEach((task) => {
            clearTask(task);
        })
    })
}

export { deleteTask, clearCompleted };