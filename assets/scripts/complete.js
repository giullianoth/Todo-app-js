import { elementContainsClass, getElement, toggleClass } from "./variables.js";

const Complete = (event) => {
    let taskElement = ((event.target.parentNode).parentNode).parentNode;
    let checkElement = getElement(".j_complete", taskElement);

    toggleClass(taskElement, "completed");

    checkElement.setAttribute(
        "title",
        elementContainsClass(taskElement, "completed") ? "Set as no-completed" : "Complete this task"
    );
}

export default Complete;