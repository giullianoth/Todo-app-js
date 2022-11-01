const btnDelete = document.querySelectorAll(".j_delete");
const task = document.querySelectorAll(".j_task");

const deleteTask = () => {
    btnDelete.forEach((item, i) => {
        item.addEventListener("click", () => {
            task[i].style.maxHeight = "0";
            task[i].style.paddingTop = "0";
            task[i].style.paddingBottom = "0";

            setTimeout(() => {
                task[i].remove();
            }, 300);
        })
    })
}

export default deleteTask;