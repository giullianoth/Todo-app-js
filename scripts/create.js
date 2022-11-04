import todoList from "./todo-list.js";
import filterTask from "./filter.js";
import loadList from "./load-list.js";

const formCreate = document.querySelector(".j_create");

const createTaskElement = (taskText, isCompleted) => {
    let element = document.createElement("li");
    let check = document.createElement("label");
    let task = document.createElement("p");
    let del = document.createElement("div");

    let checkInput = document.createElement("input");
    let checkIcon = document.createElement("i");
    checkInput.setAttribute("type", "checkbox");
    checkInput.className = "j_complete";
    checkIcon.className = "fa-solid fa-check";

    checkInput.setAttribute("title", "Complete this task");
    del.setAttribute("title", "Delete this task");

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

    let taskValue = formCreate.querySelector("#new_task");
    let taskCompleted = formCreate.querySelector("#new_complete");

    taskCompleted.addEventListener("click", () => { taskValue.focus(); })

    formCreate.addEventListener("submit", (event) => {
        event.preventDefault();

        loadList(createTaskElement(taskValue.value, taskCompleted.checked));
        taskValue.value = "";
        taskCompleted.removeAttribute("checked");
    })
}

export default createTask;