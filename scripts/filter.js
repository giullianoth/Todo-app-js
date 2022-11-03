import todoList from "./todoList.js";

const task = document.querySelectorAll(".j_task");
const list = document.querySelector(".j_list");

const filterAll = document.querySelector(".j_filter_all");
const filterActive = document.querySelector(".j_filter_active");
const filterCompleted = document.querySelector(".j_filter_completed");

const updateList = (tasks) => {
    list.innerHTML = "";
    tasks.forEach((item) => {
        list.append(item);
    })
}

const showAll = () => {
    updateList(todoList);
}

const showActive = () => {
    let filter = [];
    todoList.forEach(item => {
        if (!item.classList.contains("completed")) {
            filter.push(item);
        }
    });

    updateList(filter);
}

const showCompleted = () => {
    let filter = [];
    todoList.forEach(item => {
        if (item.classList.contains("completed")) {
            filter.push(item);
        }
    });

    updateList(filter);
}

const filterTask = () => {
    filterAll.addEventListener("click", () => {
        showAll();
        filterAll.classList.add("active");
        filterActive.classList.remove("active");
        filterCompleted.classList.remove("active");
    });

    filterActive.addEventListener("click", () => {
        showActive();
        filterAll.classList.remove("active");
        filterActive.classList.add("active");
        filterCompleted.classList.remove("active");
    });

    filterCompleted.addEventListener("click", () => {
        showCompleted();
        filterAll.classList.remove("active");
        filterActive.classList.remove("active");
        filterCompleted.classList.add("active");
    });
}

export default filterTask;