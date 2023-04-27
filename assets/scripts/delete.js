import countTask from "./count.js";
import { slideDown, slideUp } from "./effects.js";
import { allTasksQt, completedTasks, filter, getTask, taskList, tasks, transitionDuration } from "./variables.js";

const emptyElement = () => {
    let empty = document.createElement("li");
    empty.className = "empty j_empty";
    empty.innerText = "Your todo will appear here";
    return empty;
}

const DeleteCompleted = () => {
    completedTasks().forEach((task) => {
        tasks.splice(tasks.indexOf(task), 1);
        slideUp(task, true);
    })

    setTimeout(() => {
        if (allTasksQt() === 0) {
            let empty = emptyElement();
            taskList().append(empty);
            slideDown(empty);
        }

        filter === "all" && countTask(allTasksQt());
        filter === "active" && countTask(allTasksQt());
        filter === "completed" && countTask(allTasksQt());
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

        filter === "all" && countTask(allTasksQt());
        filter === "active" && countTask(allTasksQt());
        filter === "completed" && countTask(allTasksQt());
    }, transitionDuration);
}

export { DeleteCompleted, DeleteTask };