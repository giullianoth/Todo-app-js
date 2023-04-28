import countTask from "./count.js";
import { slideDown, slideUp } from "./effects.js";
import { addStoragedTask, allTasksQt, clearStoragedTasks, completedTasks, completedTasksQt, filter, getTask, storagedTasks, taskList, tasks, transitionDuration } from "./variables.js";

const emptyElement = () => {
    let empty = document.createElement("li");
    empty.className = "empty j_empty";
    empty.innerText = "Your todo will appear here";
    return empty;
}

const deleteStoraged = () => {
    if (!tasks.length) {
        clearStoragedTasks();
    } else {
        addStoragedTask();
    }
}

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