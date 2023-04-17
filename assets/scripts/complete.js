import { toggleClass } from "./variables.js";

const Complete = (event) => {
    let taskElement = ((event.target.parentNode).parentNode).parentNode;
    toggleClass(taskElement, "completed");
}

export default Complete;