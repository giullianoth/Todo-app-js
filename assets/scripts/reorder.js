import { addClass, addStoragedTask, allTasks, draggableItems, dropZone, getElement, getElements, normalArray, removeClass, tasks } from "./variables.js";

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

const DragStart = (event) => {
    let draggable = event.target
    addClass(draggable, "dragging")
}

const DragEnd = (event) => {
    let draggable = event.target
    let taskInDraggable = getElement(".task", draggable).innerText
    let relatedTask = tasks.find(task => task.task === taskInDraggable)

    removeClass(draggable, "dragging")
    tasks.splice(allTasks().indexOf(draggable), 0, tasks.splice(tasks.indexOf(relatedTask), 1)[0])

    addStoragedTask()
}

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

const ReorderTasks = () => {

    draggableItems().forEach((item) => {
        item.addEventListener("dragstart", DragStart);
        item.addEventListener("dragend", DragEnd);
    })

    dropZone.addEventListener("dragover", DragOver)
}

export default ReorderTasks;