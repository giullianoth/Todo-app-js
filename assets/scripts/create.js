import Actions from "./actions.js";
import countTask from "./count.js";
import { emptyElement } from "./delete.js";
import { slideDown, slideUp } from "./effects.js";
import { addStoragedTask, completeCheckElement, completedTasksQt, emptyMessage, filter, formCreate, isCompletedTask, notCompletedTasksQt, taskInputElement, taskList, tasks, transitionDuration, transitionGap } from "./variables.js";

/**
 * The element for the tasks.
 * @param {string} newTask 
 * @param {boolean} completed 
 * @returns {HTMLLIElement}
 */
const taskElement = (newTask, completed) => {
    let task = document.createElement("li");
    task.className = `j_task j_draggable${completed ? " completed" : ""}`;
    task.setAttribute("draggable", "true");

    task.innerHTML = `        
        <div class="task_content">
            <label class="complete">
                <input type="checkbox" class="j_complete" title="${completed ? "Set as no-completed" : "Complete this task"}"${completed ? " checked" : ""}>
                <i class="fa-solid fa-check"></i>
            </label>
        
            <p class="task j_update" title="Double click to edit">${newTask}</p>
        
            <div title="Delete this task" class="delete">
                <i class="fa-solid fa-xmark j_delete"></i>
            </div>        
        </div>
    `;

    return task;
}

/**
 * Creates a new task.
 */
const createTask = () => {

    completeCheckElement.addEventListener("click", () => taskInputElement.focus());

    formCreate.addEventListener("submit", (event) => {
        event.preventDefault();
        let newTask = taskInputElement.value;

        if (newTask.length > 0) {
            if (emptyMessage()) {
                emptyMessage().remove()
            }

            let newTaskElement = taskElement(newTask, completeCheckElement.checked);

            taskList().append(newTaskElement);
            slideDown(newTaskElement);

            tasks.push({
                task: newTask,
                completed: completeCheckElement.checked,
                element: newTaskElement,
                outerHTML: newTaskElement.outerHTML
            });

            taskInputElement.value = "";

            Actions();
            addStoragedTask();

            setTimeout(() => {
                if ((filter === "active" && isCompletedTask(newTaskElement)) || (filter === "completed" && !isCompletedTask(newTaskElement))) {
                    slideUp(newTaskElement);

                    if (!emptyMessage() && (completedTasksQt() === 0 || notCompletedTasksQt() === 0)) {
                        let empty = emptyElement();
                        taskList().append(empty);
                    }
                }
            }, transitionDuration + transitionGap * 2);

            countTask();
        }
    })
}

export { taskElement, createTask };