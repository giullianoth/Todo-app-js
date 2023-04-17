import Complete from "./complete.js";
import { slideDown } from "./effects.js";
import { allTasks, completeBtn, completeCheckElement, completedTasks, emptyMessage, formCreate, getElement, notCompletedTasks, taskInputElement, taskList } from "./variables.js";

const taskElement = (newTask, completed) => {
    let task = document.createElement("li");
    task.className = `j_task${completed ? " completed" : ""}`;

    task.innerHTML = `        
        <div class="task_content">
            <label class="complete">
                <input type="checkbox" class="j_complete" title="${completed ? "Set as no-completed" : "Complete this task"}"${completed ? " checked" : ""}>
                <i class="fa-solid fa-check"></i>
            </label>
        
                <p class="task">${newTask}</p>
        
            <div title="Delete this task" class="delete j_delete">
                <i class="fa-solid fa-xmark"></i>
            </div>        
        </div>
    `;

    return task;
}

const createTask = () => {

    completeCheckElement.addEventListener("click", () => taskInputElement.focus());

    formCreate.addEventListener("submit", (event) => {
        event.preventDefault();
        let newTask = taskInputElement.value;

        if (newTask.length > 0) {
            if (emptyMessage()) {
                emptyMessage().remove();
            }

            let newTaskElement = taskElement(newTask, completeCheckElement.checked);
            
            taskList().append(newTaskElement);
            slideDown(newTaskElement);

            taskInputElement.value = "";

            completeBtn().forEach((btn) => btn.addEventListener("click", Complete));
        }
    })
}

export default createTask;