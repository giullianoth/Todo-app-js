import CompleteTask from "./complete.js";
import countTask from "./count.js";
import { DeleteCompleted, DeleteTask, emptyElement } from "./delete.js";
import { slideDown, slideUp } from "./effects.js";
import UpdateTask from "./update.js";
import { addStoragedTask, clearCompleted, completeBtn, completeCheckElement, completedTasksQt, deleteBtn, emptyMessage, filter, formCreate, isCompletedTask, notCompletedTasksQt, taskInputElement, taskList, tasks, tasksToUpdate, transitionDuration, transitionGap } from "./variables.js";

const taskElement = (newTask, completed) => {
    let task = document.createElement("li");
    task.className = `j_task${completed ? " completed" : ""}`;

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

const createTask = () => {

    completeCheckElement.addEventListener("click", () => taskInputElement.focus());

    formCreate.addEventListener("submit", (event) => {
        event.preventDefault();
        let newTask = taskInputElement.value;

        if (newTask.length > 0) {
            if (emptyMessage()) {
                slideUp(emptyMessage(), true);
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

            completeBtn().forEach((btn) => btn.addEventListener("click", CompleteTask));
            deleteBtn().forEach((btn) => btn.addEventListener("click", DeleteTask));
            clearCompleted.addEventListener("click", DeleteCompleted);

            tasksToUpdate().forEach((task) => task.addEventListener("dblclick", UpdateTask));

            addStoragedTask();

            setTimeout(() => {
                if ((filter === "active" && isCompletedTask(newTaskElement)) || (filter === "completed" && !isCompletedTask(newTaskElement))) {
                    slideUp(newTaskElement);

                    if (!emptyMessage() && (completedTasksQt() === 0 || notCompletedTasksQt() === 0)) {
                        let empty = emptyElement();
                        taskList().append(empty);
                        slideDown(empty);
                    }
                }
            }, transitionDuration + transitionGap * 2);

            countTask();
        }
    })
}

export { taskElement, createTask };