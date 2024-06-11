import countTask from "./count.js";
import { slideDown, slideUp } from "./effects.js";
import { addStoragedTask, allTasksQt, clearStoragedTasks, completedTasks, completedTasksQt, filter, getTask, taskList, tasks, transitionDuration } from "./variables.js";

/**
 * Element for the empty list's message.
 * @returns {HTMLLIElement}
 */
const emptyElement = () => {
    let empty = document.createElement("li");
    empty.className = "empty j_empty";
    empty.innerText = "Your todo will appear here";
    return empty;
}

/**
 * Deletes tasks from local storage.
 */
const deleteStoraged = () => {
    if (!tasks.length) {
        clearStoragedTasks();
    } else {
        addStoragedTask();
    }
}

/**
 * Removes the completed tasks.
 */
const DeleteCompleted = () => {
    completedTasks().forEach((task) => {
        if (tasks.length) {
            let taskToDelete = tasks.find((t) => t.element === task);
            tasks.splice(tasks.indexOf(taskToDelete), 1);
            slideUp(task, true);
        }
    })

    deleteStoraged();

    setTimeout(() => {
        if ((filter !== "active" && allTasksQt() === 0) || (filter === "completed" && completedTasksQt() === 0)) {
            let empty = emptyElement();
            taskList().append(empty);
            slideDown(empty);
        }

        countTask();
    }, transitionDuration);
}

/**
 * Deletes a specified task.
 * @param {object} event 
 */
const DeleteTask = (event) => {
    event.preventDefault();
    let taskToDelete = tasks.find((task) => task.element === getTask(event.target));

    tasks.splice(tasks.indexOf(taskToDelete), 1);
    slideUp(taskToDelete.element, true);

    deleteStoraged();

    setTimeout(() => {
        if (allTasksQt() === 0) {
            let empty = emptyElement();
            taskList().append(empty);
            slideDown(empty);
        }

        countTask();
    }, transitionDuration);
}

export { DeleteCompleted, DeleteTask, emptyElement };