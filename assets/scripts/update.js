import Actions from "./actions.js";
import countTask from "./count.js";
import { addStoragedTask, allTasks, getElement, tasks, updateForm } from "./variables.js";

/**
 * Creates a form element to update a task.
 * @param {string} value 
 * @returns {HTMLFormElement}
 */
const updateTaskForm = (value) => {
    let form = document.createElement("form");
    form.className = "j_update_form";

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", value);

    form.append(input);

    return form;
}

/**
 * Updates an existing task.
 * @param {object} event 
 */
const UpdateTask = (event) => {
    let oldTask = event.target.innerText;
    let parent = event.target.parentNode
    let formElement = updateTaskForm(oldTask)
    let taskField = event.target.cloneNode(true)
    let refElement = getElement(".delete", parent)
    let taskLength = oldTask.length

    allTasks().forEach((task) => task.removeAttribute("draggable"))

    parent.insertBefore(formElement, refElement)
    event.target.remove()
    
    let input = getElement("input", updateForm())

    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(taskLength, taskLength)
    } else if (input.createTextRange) {
        let range = input.createTextRange()
        range.collapse(true)
        range.moveEnd("character", taskLength)
        range.moveStart("character", taskLength)
        range.select()
    }

    updateForm().addEventListener("submit", (e) => {
        e.preventDefault();
        let newTask = getElement("input", e.target).value;

        if (newTask.length > 0) {
            event.target.innerHTML = newTask;

            tasks.forEach((task) => {
                if (task.task === oldTask) {
                    taskField.innerText = newTask

                    task.task = newTask;
                    task.element = taskField
                    task.outerHTML = taskField.outerHTML

                    updateForm().remove()
                    parent.insertBefore(taskField, refElement)
                    addStoragedTask();
                }
            })

            countTask();
            Actions()

            allTasks().forEach((task) => task.setAttribute("draggable", true))
        }
    })
}

export default UpdateTask;