import CompleteTask from "./complete.js";
import countTask from "./count.js";
import { DeleteCompleted, DeleteTask } from "./delete.js";
import { slideDown } from "./effects.js";
import { allTasksQt, clearCompleted, completeBtn, completeCheckElement, deleteBtn, emptyMessage, formCreate, taskInputElement, taskList } from "./variables.js";

const taskElement = (newTask, completed) => {
    let task = document.createElement("li");
    task.className = `j_task${completed ? " completed" : ""}`;

    task.innerHTML = `        
        <div class="task_content">
            <label class="complete">
                <input type="checkbox" class="j_complete" title="${completed ? "Set as no-completed" : "Complete this task"}"${completed ? " checked" : ""}>
                <i class="fa-solid fa-check"></i>
            </label>
        
            <p class="task" title="Double click to edit">${newTask}</p>
        
            <div title="Delete this task" class="delete">
                <i class="fa-solid fa-xmark j_delete"></i>
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

            completeBtn().forEach((btn) => btn.addEventListener("click", CompleteTask));
            deleteBtn().forEach((btn) => btn.addEventListener("click", DeleteTask));
            clearCompleted.addEventListener("click", DeleteCompleted);

            countTask(allTasksQt());
        }
    })
}

export default createTask;