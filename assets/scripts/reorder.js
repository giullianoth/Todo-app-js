import { addClass, addStoragedTask, allTasks, draggableItems, dropZone, getElement, getElements, normalArray, removeClass, tasks } from "./variables.js";

/**
 * Get the element after the dragging element.
 * @param {HTMLElement} container 
 * @param {number} y 
 * @returns {HTMLElement | null}
 */
const getDragAfterElement = (container, y) => {
    let items = normalArray(getElements(".j_draggable:not(.dragging)", container))

    return items.reduce((closest, child) => {
        let box = child.getBoundingClientRect()
        let offset = y - box.top - box.height / 2

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}

/**
 * Features of drag start element.
 * @param {object} event 
 */
const DragStart = (event) => {
    let draggable = event.target
    addClass(draggable, "dragging")
}

/**
 * Features of drag end element.
 * @param {object} event 
 */
const DragEnd = (event) => {
    let draggable = event.target
    let taskInDraggable = getElement(".task", draggable).innerText
    let relatedTask = tasks.find(task => task.task === taskInDraggable)

    removeClass(draggable, "dragging")
    tasks.splice(allTasks().indexOf(draggable), 0, tasks.splice(tasks.indexOf(relatedTask), 1)[0])

    addStoragedTask()
}

/**
 * Features of draggable element when drags over the drop zone.
 * @param {object} event 
 */
const DragOver = (event) => {
    event.preventDefault()

    let draggable = getElement(".dragging", dropZone)
    let afterElement = getDragAfterElement(dropZone, event.clientY)

    if (!afterElement) {
        dropZone.appendChild(draggable)
    } else {        
        dropZone.insertBefore(draggable, afterElement)
    }
}

/**
 * Reorders all the tasks.
 */
const ReorderTasks = () => {

    draggableItems().forEach((item) => {
        item.addEventListener("dragstart", DragStart);
        item.addEventListener("dragend", DragEnd);
    })

    dropZone.addEventListener("dragover", DragOver)
}

export default ReorderTasks;