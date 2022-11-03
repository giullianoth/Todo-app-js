import todoList from "./todo-list.js";

const updateList = (tasks) => {
    let list = document.querySelector(".j_list");
    list.innerHTML = "";
    tasks.forEach((item) => {
        list.append(item);
    })
}

const showAll = (list) => {    
    updateList(list);
}

const showActive = (list) => {
    
    let filter = [];
    list.forEach((item) => {
        if (!item.classList.contains("completed")) {
            filter.push(item);
        }
    });
    
    updateList(filter);
}

const showCompleted = (list) => {
    
    let filter = [];
    list.forEach((item) => {
        if (item.classList.contains("completed")) {
            filter.push(item);
        }
    });

    updateList(filter);
}

const filterTask = (filter, button) => {

    let taskList = todoList;

    switch (filter) {
        case "all":
            showAll(taskList);
            break;

        case "active":
            showActive(taskList);
            break;

        case "completed":
            showCompleted(taskList);
            break;
    }

    button.classList.add("active");
}

export default filterTask;