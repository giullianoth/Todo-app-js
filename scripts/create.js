import todoList from "./todo-list.js";
import completeTask from "./complete.js";
import filterTask from "./filter.js";

const formCreate = document.querySelector(".j_create");
const taskList = document.querySelector(".j_list");
const emptyTaskList = document.querySelector(".j_empty");

const filterAll = document.querySelector(".j_filter_all");
const filterActive = document.querySelector(".j_filter_active");
const filterCompleted = document.querySelector(".j_filter_completed");

const setComplete = (check, position) => {
    completeTask(check, position);
}

const taskElement = (taskText, isCompleted) => {
    let element = document.createElement("li");
    let check = document.createElement("label");
    let task = document.createElement("p");
    let del = document.createElement("div");

    let checkInput = document.createElement("input");
    let checkIcon = document.createElement("i");
    checkInput.setAttribute("type", "checkbox");
    checkInput.className = "j_complete";
    checkIcon.className = "fa-solid fa-check";

    if (isCompleted) {
        checkInput.setAttribute("checked", isCompleted);
    }

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-xmark";

    let completeCkecked = isCompleted ? " completed" : "";

    element.className = `j_task${completeCkecked}`;
    check.className = "complete";
    task.className = "task";
    del.className = "delete j_delete";

    check.innerHTML = checkInput.outerHTML + checkIcon.outerHTML;
    task.innerText = taskText;
    del.innerHTML = deleteIcon.outerHTML;

    element.innerHTML = check.outerHTML + task.outerHTML + del.outerHTML;

    return element;
}

const createTask = () => {
    formCreate.addEventListener("submit", (event) => {
        event.preventDefault();
        let newTask = formCreate.querySelector("#new_task");
        let completeTask = formCreate.querySelector("#new_complete");
        
        emptyTaskList.remove();

        let task = taskElement(newTask.value, completeTask.checked);
        let complete = task.querySelectorAll(".complete");

        taskList.append(task);
        todoList.push(task);
        newTask.value = "";
        filterAll.classList.add("active");

        complete.forEach((item, i) => {
            item.addEventListener("click", () => {
                setComplete(item, i);
            })
        })

        filterAll.addEventListener("click", () => {
            filterActive.classList.remove("active");
            filterCompleted.classList.remove("active");
            filterTask("all", filterAll);
        })

        filterActive.addEventListener("click", () => {
            filterAll.classList.remove("active");
            filterCompleted.classList.remove("active");
            filterTask("active", filterActive);
        })

        filterCompleted.addEventListener("click", () => {
            filterAll.classList.remove("active");
            filterActive.classList.remove("active");
            filterTask("completed", filterCompleted);
        })
    })
}

export default createTask;