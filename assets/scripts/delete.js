import countTask from "./count.js";
import { slideDown, slideUp } from "./effects.js";
import { allTasksQt, completedTasks, getTask, taskList, transitionDuration } from "./variables.js";

const emptyElement = () => {
    let empty = document.createElement("li");
    empty.className = "empty j_empty";
    empty.innerText = "Your todo will appear here";
    return empty;
}

const DeleteCompleted = () => {
    completedTasks().forEach((task) => slideUp(task, true));
    
    setTimeout(() => {
        if (allTasksQt() === 0) {
            let empty = emptyElement();
            taskList().append(empty);
            slideDown(empty);
        }

        countTask(allTasksQt());
    }, transitionDuration);
}

const DeleteTask = (event) => {
    event.preventDefault();
    let taskToDelete = getTask(event.target);

    slideUp(taskToDelete, true);

    console.log(taskList());

    setTimeout(() => {
        if (allTasksQt() === 0) {
            let empty = emptyElement();
            taskList().append(empty);
            slideDown(empty);
        }

        countTask(allTasksQt());
    }, transitionDuration);
}

export { DeleteCompleted, DeleteTask };