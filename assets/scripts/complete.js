import countTask from "./count.js";
import { emptyElement } from "./delete.js";
import { slideDown, slideUp } from "./effects.js";
import { addStoragedTask, completedTasksQt, filter, getElement, getTask, isCompletedTask, notCompletedTasksQt, storagedTasks, taskList, tasks, toggleClass, updateForm } from "./variables.js";

/**
 * Sets the tasks as complete or no-complete by clicking the checkbox.
 * @param {object} event 
 */
const CompleteTask = (event) => {
    let taskElement = getTask(event.target);
    let checkElement = getElement(".j_complete", taskElement);

    toggleClass(taskElement, "completed");

    checkElement.setAttribute(
        "title",
        isCompletedTask(taskElement) ? "Set as no-completed" : "Complete this task"
    );

    tasks.forEach((task) => {
        if (task.element === taskElement) {
            task.completed = isCompletedTask(taskElement);

            if (updateForm()) {
                let taskUpdateInput = getElement("input", updateForm())
                if (taskUpdateInput.value === task.task) {
                    taskUpdateInput.focus()
                }
            }

            addStoragedTask();
        }
    })

    if (filter === "active") {
        isCompletedTask(taskElement) && slideUp(taskElement);

        if (notCompletedTasksQt() === 0) {
            let empty = emptyElement();
            taskList().append(empty);
            slideDown(empty);
        }
    } else if (filter === "completed") {
        !isCompletedTask(taskElement) && slideUp(taskElement);

        if (completedTasksQt() === 0) {
            let empty = emptyElement();
            taskList().append(empty);
            slideDown(empty);
        }
    }

    countTask();
}

export default CompleteTask;