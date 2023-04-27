import countTask from "./count.js";
import { slideDown, slideUp } from "./effects.js";
import { allTasksQt, completedTasks, completedTasksQt, filter, getTask, taskList, tasks, transitionDuration } from "./variables.js";

const emptyElement = () => {
    let empty = document.createElement("li");
    empty.className = "empty j_empty";
    empty.innerText = "Your todo will appear here";
    return empty;
}

const DeleteCompleted = () => {
    completedTasks().forEach((task) => {
        if (tasks.length) {
            tasks.splice(tasks.indexOf(task), 1);
            slideUp(task, true);
        }
    })

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
    let taskToDelete = getTask(event.target);

    tasks.splice(tasks.indexOf(taskToDelete), 1);
    slideUp(taskToDelete, true);

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