import { clearTask } from "./delete.js";
import loadList from "./load-list.js";
import todoList from "./todo-list.js";

const filterBtn = document.querySelectorAll(".j_filter");

const updateList = (tasks) => {
    let list = document.querySelector(".j_list");
    list.innerHTML = "";
    tasks.forEach((item) => {
        list.append(item);
    })
}

const filterTask = () => {

    filterBtn.forEach((btn, i, arr) => {
        btn.addEventListener("click", () => {

            arr.forEach(item => { item.classList.remove("active") })
            btn.classList.add("active");

            let list = document.querySelector(".j_list");
            let tasks = list.querySelectorAll(".j_task");

            tasks.forEach((task) => {
                task.style.maxHeight = "0";
                task.style.paddingTop = "0";
                task.style.paddingBottom = "0";
                task.style.visibility = "hidden";

                if (task.classList.contains("completed") && btn.classList.contains("j_filter_completed")) {
                    task.style.maxHeight = "";
                    task.style.paddingTop = "";
                    task.style.paddingBottom = "";
                    task.style.visibility = "";
                } else if (!task.classList.contains("completed") && btn.classList.contains("j_filter_active")) {
                    task.style.maxHeight = "";
                    task.style.paddingTop = "";
                    task.style.paddingBottom = "";
                    task.style.visibility = "";
                } else if (btn.classList.contains("j_filter_all")) {
                    task.style.maxHeight = "";
                    task.style.paddingTop = "";
                    task.style.paddingBottom = "";
                    task.style.visibility = "";
                }
            });
        })
    })
}

export default filterTask;