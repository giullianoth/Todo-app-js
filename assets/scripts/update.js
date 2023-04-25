import { getElement, updateForm } from "./variables.js";

const updateTaskForm = (value) => {
    let form = document.createElement("form");
    form.className = "j_update_form";

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", value);

    form.append(input);

    return form;
}

const UpdateTask = (event) => {
    let taskParagraph = event.target;
    let oldTask = event.target.innerText;
    
    taskParagraph.innerHTML = updateTaskForm(oldTask).outerHTML;
    getElement("input", updateForm()).focus();

    updateForm().addEventListener("submit", (e) => {
        e.preventDefault();
        let newTask = getElement("input", e.target).value;

        if (newTask.length > 0) {
            event.target.innerText = newTask;
        }
    })
}

export default UpdateTask;