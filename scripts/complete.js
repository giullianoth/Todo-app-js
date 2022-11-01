const checkComplete = document.querySelectorAll(".j_complete");
const task = document.querySelectorAll(".j_task");

const completeTask = () => {
    checkComplete.forEach((item, i) => {
        item.addEventListener("click", () => {
            if (item.checked) {
                task[i].classList.add("completed");
            } else {
                task[i].classList.remove("completed");
            }
        })
    })
}

export default completeTask;