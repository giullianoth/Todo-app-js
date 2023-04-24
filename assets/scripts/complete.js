import { elementContainsClass, getElement, getTask, toggleClass } from "./variables.js";

const CompleteTask = (event) => {
    let taskElement = getTask(event.target);
    let checkElement = getElement(".j_complete", taskElement);

    toggleClass(taskElement, "completed");

    checkElement.setAttribute(
        "title",
        elementContainsClass(taskElement, "completed") ? "Set as no-completed" : "Complete this task"
    );
}

export default CompleteTask;